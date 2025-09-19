"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import FilterDropdown from "../../components/FilterDropdown";

interface CaseItem {
	id: string;
	title: string;
	linkedListings: number;
	severity: "High" | "Medium" | "Low";
	sla: string;
	assignee: string;
	updated: string;
}

const mockCases: CaseItem[] = [
	{
		id: "#12345",
		title: "Incorrect declaration on product A",
		linkedListings: 2,
		severity: "High",
		sla: "2 days",
		assignee: "Emily Carter",
		updated: "2 days ago",
	},
	{
		id: "#12346",
		title: "Missing declaration on product B",
		linkedListings: 1,
		severity: "Medium",
		sla: "5 days",
		assignee: "David Lee",
		updated: "3 days ago",
	},
	{
		id: "#12347",
		title: "Incorrect declaration on product C",
		linkedListings: 3,
		severity: "Low",
		sla: "7 days",
		assignee: "Sophia Clark",
		updated: "4 days ago",
	},
	{
		id: "#12348",
		title: "Missing declaration on product D",
		linkedListings: 1,
		severity: "High",
		sla: "1 day",
		assignee: "Emily Carter",
		updated: "1 day ago",
	},
	{
		id: "#12349",
		title: "Incorrect declaration on product E",
		linkedListings: 2,
		severity: "Medium",
		sla: "3 days",
		assignee: "David Lee",
		updated: "2 days ago",
	},
];

const CasesPage: React.FC = () => {
	const [selectedSeverity, setSelectedSeverity] = useState("");
	const [selectedAssignee, setSelectedAssignee] = useState("");
	const [selectedSLA, setSelectedSLA] = useState("");

	const getSeverityColor = (severity: string) => {
		switch (severity) {
			case "High":
				return "bg-[#ea2a33] text-white";
			case "Medium":
				return "bg-[#994d51] text-white";
			case "Low":
				return "bg-[#07885d] text-white";
			default:
				return "bg-[#f3e7e8] text-[#1b0e0e]";
		}
	};

	return (
		<PageLayout>
			<Header currentPage="Cases" />
			<div className="gap-1 px-6 flex flex-1 justify-center py-5">
				{/* Sidebar Filters */}
				<div className="layout-content-container flex flex-col w-80">
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Filters
					</h2>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Severity"
							options={["High", "Medium", "Low"]}
							value={selectedSeverity}
							onChange={setSelectedSeverity}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Assignee"
							options={["Emily Carter", "David Lee", "Sophia Clark"]}
							value={selectedAssignee}
							onChange={setSelectedAssignee}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="SLA Status"
							options={["Overdue", "Due Soon", "On Track"]}
							value={selectedSLA}
							onChange={setSelectedSLA}
						/>
					</div>

					{/* Date Filter */}
					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<label className="flex flex-col min-w-40 flex-1">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal pb-2">
								Created Date
							</p>
							<input
								type="date"
								className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#994d51] p-[15px] text-base font-normal leading-normal"
							/>
						</label>
					</div>

					<div className="flex justify-stretch">
						<div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
							<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em]">
								<span className="truncate">Clear</span>
							</button>
							<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
								<span className="truncate">Apply</span>
							</button>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
							Cases
						</p>
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-medium leading-normal">
							<span className="truncate">New Case</span>
						</button>
					</div>

					{/* Cases Table */}
					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<div className="w-full overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="bg-[#fcf8f8]">
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Case ID
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Title
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Listings linked (#)
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Severity
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												SLA
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Assignee
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Updated
											</th>
										</tr>
									</thead>
									<tbody>
										{mockCases.map((caseItem) => (
											<tr
												key={caseItem.id}
												className="border-t border-t-[#e7d0d1]"
											>
												<td className="h-[72px] px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
													{caseItem.id}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{caseItem.title}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{caseItem.linkedListings}
												</td>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<button
														className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 text-sm font-medium leading-normal w-full ${getSeverityColor(
															caseItem.severity
														)}`}
													>
														<span className="truncate">
															{caseItem.severity}
														</span>
													</button>
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{caseItem.sla}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{caseItem.assignee}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{caseItem.updated}
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

export default CasesPage;
