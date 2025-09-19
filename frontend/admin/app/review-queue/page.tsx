"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";

interface ReviewItem {
	id: string;
	title: string;
	platform: string;
	score: number;
	topRuleViolations: string;
	confidence: "High" | "Medium" | "Low";
	timestamp: string;
	assignee: string;
}

const mockReviewItems: ReviewItem[] = [
	{
		id: "1",
		title: "Wireless Gaming Headset Pro",
		platform: "E-commerce Platform 1",
		score: 95,
		topRuleViolations: "Rule 1, Rule 2",
		confidence: "High",
		timestamp: "2024-01-15 10:00",
		assignee: "John Smith",
	},
	{
		id: "2",
		title: "Organic Cotton T-Shirt",
		platform: "E-commerce Platform 2",
		score: 80,
		topRuleViolations: "Rule 3",
		confidence: "Medium",
		timestamp: "2024-01-15 11:30",
		assignee: "Jane Doe",
	},
	{
		id: "3",
		title: "Premium Kitchen Knife Set",
		platform: "E-commerce Platform 1",
		score: 70,
		topRuleViolations: "Rule 1",
		confidence: "Low",
		timestamp: "2024-01-15 12:45",
		assignee: "Unassigned",
	},
	{
		id: "4",
		title: "Smart Home Speaker",
		platform: "E-commerce Platform 3",
		score: 85,
		topRuleViolations: "Rule 2, Rule 4",
		confidence: "High",
		timestamp: "2024-01-15 14:20",
		assignee: "Alice Johnson",
	},
	{
		id: "5",
		title: "Bluetooth Fitness Tracker",
		platform: "E-commerce Platform 2",
		score: 75,
		topRuleViolations: "Rule 5",
		confidence: "Medium",
		timestamp: "2024-01-15 15:30",
		assignee: "Unassigned",
	},
];

const ReviewQueuePage: React.FC = () => {
	const [activeTab, setActiveTab] = useState<"All" | "High" | "Medium" | "Low">(
		"All"
	);

	const getConfidenceColor = (confidence: string) => {
		switch (confidence) {
			case "High":
				return "text-[#07885d]";
			case "Medium":
				return "text-[#994d51]";
			case "Low":
				return "text-[#ea2a33]";
			default:
				return "text-[#1b0e0e]";
		}
	};

	const filteredItems =
		activeTab === "All"
			? mockReviewItems
			: mockReviewItems.filter((item) => item.confidence === activeTab);

	const TabButton: React.FC<{
		label: "All" | "High" | "Medium" | "Low";
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

	return (
		<PageLayout>
			<Header currentPage="Review Queue" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<div className="flex min-w-72 flex-col gap-3">
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
								Review Queue
							</p>
							<p className="text-[#994d51] text-sm font-normal leading-normal">
								Items requiring manual review and approval
							</p>
						</div>
					</div>

					{/* Tabs */}
					<div className="pb-3">
						<div className="flex border-b border-[#e7d0d1] px-4 gap-8">
							<TabButton
								label="All"
								isActive={activeTab === "All"}
								onClick={() => setActiveTab("All")}
							/>
							<TabButton
								label="High"
								isActive={activeTab === "High"}
								onClick={() => setActiveTab("High")}
							/>
							<TabButton
								label="Medium"
								isActive={activeTab === "Medium"}
								onClick={() => setActiveTab("Medium")}
							/>
							<TabButton
								label="Low"
								isActive={activeTab === "Low"}
								onClick={() => setActiveTab("Low")}
							/>
						</div>
					</div>

					{/* Review Queue Table */}
					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<div className="w-full overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="bg-[#fcf8f8]">
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Title
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Platform
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Score
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Top Rule Violations
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Confidence
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Timestamp
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Assignee
											</th>
											<th className="px-4 py-3 text-left text-[#994d51] text-sm font-medium leading-normal"></th>
										</tr>
									</thead>
									<tbody>
										{filteredItems.map((item) => (
											<tr key={item.id} className="border-t border-t-[#e7d0d1]">
												<td className="h-[72px] px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
													{item.title}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.platform}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.score}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.topRuleViolations}
												</td>
												<td
													className={`h-[72px] px-4 py-2 text-sm font-normal leading-normal ${getConfidenceColor(
														item.confidence
													)}`}
												>
													{item.confidence}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.timestamp}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{item.assignee}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-bold leading-normal tracking-[0.015em]">
													<button className="hover:text-[#1b0e0e] transition-colors">
														Assign to me
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-3 p-4 justify-end">
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em]">
							<span className="truncate">Mark as Reviewed</span>
						</button>
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#07885d] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
							<span className="truncate">Approve</span>
						</button>
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
							<span className="truncate">Reject</span>
						</button>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default ReviewQueuePage;
