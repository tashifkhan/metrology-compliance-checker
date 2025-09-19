"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";

interface CrawlJob {
	id: string;
	jobName: string;
	platform: string;
	scope: string;
	cadence: string;
	lastRun: string;
	nextRun: string;
	status: "Success" | "Running" | "Failed" | "Scheduled";
}

const mockCrawlJobs: CrawlJob[] = [
	{
		id: "1",
		jobName: "Electronics Category Scan",
		platform: "Platform A",
		scope: "Category: Electronics",
		cadence: "Daily",
		lastRun: "2024-01-15 10:00",
		nextRun: "2024-01-16 10:00",
		status: "Success",
	},
	{
		id: "2",
		jobName: "Fashion Brand Monitor",
		platform: "Platform B",
		scope: "Brand: Nike, Adidas",
		cadence: "Weekly",
		lastRun: "2024-01-14 08:00",
		nextRun: "2024-01-21 08:00",
		status: "Running",
	},
	{
		id: "3",
		jobName: "Home Goods Full Scan",
		platform: "Platform C",
		scope: "Category: Home & Garden",
		cadence: "Monthly",
		lastRun: "2024-01-01 00:00",
		nextRun: "2024-02-01 00:00",
		status: "Failed",
	},
	{
		id: "4",
		jobName: "Tech Products Monitor",
		platform: "Platform A",
		scope: "Keywords: smartphone, laptop",
		cadence: "Hourly",
		lastRun: "2024-01-15 14:00",
		nextRun: "2024-01-15 15:00",
		status: "Scheduled",
	},
];

const CrawlSchedulerPage: React.FC = () => {
	const [showCreateJobModal, setShowCreateJobModal] = useState(false);

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Success":
				return "bg-[#07885d] text-white";
			case "Running":
				return "bg-[#994d51] text-white";
			case "Failed":
				return "bg-[#ea2a33] text-white";
			case "Scheduled":
				return "bg-[#f3e7e8] text-[#1b0e0e]";
			default:
				return "bg-[#f3e7e8] text-[#1b0e0e]";
		}
	};

	return (
		<PageLayout>
			<Header currentPage="Crawl Scheduler" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<div className="flex min-w-72 flex-col gap-3">
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
								Crawl Scheduler
							</p>
							<p className="text-[#994d51] text-sm font-normal leading-normal">
								Manage automated scanning jobs for e-commerce platforms
							</p>
						</div>
						<button
							onClick={() => setShowCreateJobModal(true)}
							className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-medium leading-normal"
						>
							<span className="truncate">Create Job</span>
						</button>
					</div>

					{/* Crawl Jobs Table */}
					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<div className="w-full overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="bg-[#fcf8f8]">
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Job name
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Platform
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Scope
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Cadence
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Last run
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Next run
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Status
											</th>
											<th className="px-4 py-3 text-left text-[#994d51] text-sm font-medium leading-normal">
												Actions
											</th>
										</tr>
									</thead>
									<tbody>
										{mockCrawlJobs.map((job) => (
											<tr key={job.id} className="border-t border-t-[#e7d0d1]">
												<td className="h-[72px] px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
													{job.jobName}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{job.platform}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{job.scope}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{job.cadence}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{job.lastRun}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{job.nextRun}
												</td>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<button
														className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 text-sm font-medium leading-normal w-full ${getStatusColor(
															job.status
														)}`}
													>
														<span className="truncate">{job.status}</span>
													</button>
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-bold leading-normal tracking-[0.015em]">
													<div className="flex gap-2">
														<button className="hover:text-[#1b0e0e] transition-colors">
															Edit
														</button>
														<button className="hover:text-[#07885d] transition-colors">
															Run Now
														</button>
														<button className="hover:text-[#ea2a33] transition-colors">
															Delete
														</button>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* Job Statistics */}
					<div className="flex flex-wrap gap-4 p-4 mt-6">
						<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal">
								Active Jobs
							</p>
							<p className="text-[#1b0e0e] tracking-light text-2xl font-bold leading-tight">
								4
							</p>
						</div>
						<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal">
								Jobs Run Today
							</p>
							<p className="text-[#1b0e0e] tracking-light text-2xl font-bold leading-tight">
								12
							</p>
						</div>
						<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal">
								Success Rate
							</p>
							<p className="text-[#1b0e0e] tracking-light text-2xl font-bold leading-tight">
								94.2%
							</p>
						</div>
						<div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal">
								Items Processed
							</p>
							<p className="text-[#1b0e0e] tracking-light text-2xl font-bold leading-tight">
								8,432
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Create Job Modal (simple placeholder) */}
			{showCreateJobModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-[#fcf8f8] rounded-lg p-6 max-w-md w-full mx-4">
						<h3 className="text-[#1b0e0e] text-lg font-bold mb-4">
							Create New Crawl Job
						</h3>
						<p className="text-[#994d51] text-sm mb-4">
							Job creation form would go here with fields for platform, scope,
							cadence, etc.
						</p>
						<div className="flex gap-3 justify-end">
							<button
								onClick={() => setShowCreateJobModal(false)}
								className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em]"
							>
								Cancel
							</button>
							<button
								onClick={() => setShowCreateJobModal(false)}
								className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]"
							>
								Create
							</button>
						</div>
					</div>
				</div>
			)}
		</PageLayout>
	);
};

export default CrawlSchedulerPage;
