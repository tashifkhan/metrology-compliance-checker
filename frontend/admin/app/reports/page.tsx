"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import FilterDropdown from "../../components/FilterDropdown";

interface ReportData {
	category: string;
	totalViolations: number;
	criticalViolations: number;
	majorViolations: number;
	minorViolations: number;
}

const mockReportData: ReportData[] = [
	{
		category: "Electronics",
		totalViolations: 120,
		criticalViolations: 30,
		majorViolations: 50,
		minorViolations: 40,
	},
	{
		category: "Apparel",
		totalViolations: 85,
		criticalViolations: 15,
		majorViolations: 35,
		minorViolations: 35,
	},
	{
		category: "Home Goods",
		totalViolations: 70,
		criticalViolations: 10,
		majorViolations: 30,
		minorViolations: 30,
	},
	{
		category: "Food",
		totalViolations: 55,
		criticalViolations: 5,
		majorViolations: 20,
		minorViolations: 30,
	},
	{
		category: "Beauty",
		totalViolations: 40,
		criticalViolations: 8,
		majorViolations: 15,
		minorViolations: 17,
	},
	{
		category: "Toys",
		totalViolations: 25,
		criticalViolations: 3,
		majorViolations: 10,
		minorViolations: 12,
	},
];

type ReportTab =
	| "Violations by Category"
	| "Violations by Brand"
	| "Violations by Seller"
	| "Violations by Platform"
	| "False Positives"
	| "Compliance Score Trends";

const ReportsPage: React.FC = () => {
	const [activeTab, setActiveTab] = useState<ReportTab>(
		"Violations by Category"
	);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedDateRange, setSelectedDateRange] = useState("");

	const TabButton: React.FC<{
		label: ReportTab;
		isActive: boolean;
		onClick: () => void;
	}> = ({ label, isActive, onClick }) => (
		<button
			onClick={onClick}
			className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
				isActive
					? "border-b-[#ea2a33] text-[#1b0e0e]"
					: "border-b-transparent text-[#994d51] hover:text-[#1b0e0e]"
			}`}
		>
			<p
				className={`text-sm font-bold leading-normal tracking-[0.015em] ${
					isActive ? "text-[#1b0e0e]" : "text-[#994d51]"
				}`}
			>
				{label}
			</p>
		</button>
	);

	const BarChart: React.FC = () => {
		const maxValue = Math.max(
			...mockReportData.map((item) => item.totalViolations)
		);

		return (
			<div className="flex min-w-72 flex-1 flex-col gap-2">
				<p className="text-[#1b0e0e] text-base font-medium leading-normal">
					Violations by Category
				</p>
				<div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
					{mockReportData.map((item) => {
						const height = (item.totalViolations / maxValue) * 100;
						return (
							<React.Fragment key={item.category}>
								<div
									className="border-[#994d51] bg-[#f3e7e8] border-t-2 w-full"
									style={{ height: `${height}%` }}
								/>
								<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
									{item.category}
								</p>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		);
	};

	return (
		<PageLayout>
			<Header currentPage="Reports" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<div className="flex min-w-72 flex-col gap-3">
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
								Reports
							</p>
							<p className="text-[#994d51] text-sm font-normal leading-normal">
								Generate and view reports on compliance metrics
							</p>
						</div>
					</div>

					{/* Tabs */}
					<div className="pb-3">
						<div className="flex border-b border-[#e7d0d1] px-4 gap-8 overflow-x-auto">
							<TabButton
								label="Violations by Category"
								isActive={activeTab === "Violations by Category"}
								onClick={() => setActiveTab("Violations by Category")}
							/>
							<TabButton
								label="Violations by Brand"
								isActive={activeTab === "Violations by Brand"}
								onClick={() => setActiveTab("Violations by Brand")}
							/>
							<TabButton
								label="Violations by Seller"
								isActive={activeTab === "Violations by Seller"}
								onClick={() => setActiveTab("Violations by Seller")}
							/>
							<TabButton
								label="Violations by Platform"
								isActive={activeTab === "Violations by Platform"}
								onClick={() => setActiveTab("Violations by Platform")}
							/>
							<TabButton
								label="False Positives"
								isActive={activeTab === "False Positives"}
								onClick={() => setActiveTab("False Positives")}
							/>
							<TabButton
								label="Compliance Score Trends"
								isActive={activeTab === "Compliance Score Trends"}
								onClick={() => setActiveTab("Compliance Score Trends")}
							/>
						</div>
					</div>

					{/* Filters Section */}
					<h3 className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
						Filters
					</h3>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Select Category"
							options={[
								"Electronics",
								"Apparel",
								"Home Goods",
								"Food",
								"Beauty",
								"Toys",
							]}
							value={selectedCategory}
							onChange={setSelectedCategory}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Select Date Range"
							options={[
								"Last 7 days",
								"Last 30 days",
								"Last 90 days",
								"Last year",
							]}
							value={selectedDateRange}
							onChange={setSelectedDateRange}
						/>
					</div>

					<div className="flex justify-stretch">
						<div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
							<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
								<span className="truncate">Apply Filters</span>
							</button>
							<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em]">
								<span className="truncate">Clear Filters</span>
							</button>
							<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#07885d] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
								<span className="truncate">Export Report</span>
							</button>
						</div>
					</div>

					{/* Report Section */}
					<h3 className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
						Report
					</h3>

					{/* Chart */}
					<div className="flex flex-wrap gap-4 px-4 py-6">
						<BarChart />
					</div>

					{/* Data Table */}
					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<div className="w-full overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="bg-[#fcf8f8]">
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Category
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Total Violations
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Critical Violations
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Major Violations
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Minor Violations
											</th>
										</tr>
									</thead>
									<tbody>
										{mockReportData.map((item, index) => (
											<tr key={index} className="border-t border-t-[#e7d0d1]">
												<td className="h-[72px] px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
													{item.category}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.totalViolations}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.criticalViolations}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.majorViolations}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.minorViolations}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default ReportsPage;
