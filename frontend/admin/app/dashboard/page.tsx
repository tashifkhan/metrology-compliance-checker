"use client";

import React from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import MetricCard from "../../components/MetricCard";
import FilterButton from "../../components/FilterButton";

const DashboardPage: React.FC = () => {
	return (
		<PageLayout>
			<Header currentPage="Dashboard" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<div className="flex min-w-72 flex-col gap-3">
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
								Dashboard
							</p>
							<p className="text-[#994d51] text-sm font-normal leading-normal">
								Overview of compliance metrics and trends
							</p>
						</div>
					</div>

					{/* Filter Buttons */}
					<div className="flex gap-3 p-3 flex-wrap pr-4">
						<FilterButton label="Date Range" />
						<FilterButton label="Platform" />
						<FilterButton label="Category" />
					</div>

					{/* Metrics Cards */}
					<div className="flex flex-wrap gap-4 p-4">
						<MetricCard title="Listings Scanned Today" value="12,345" />
						<MetricCard title="Average Compliance Score" value="85%" />
						<MetricCard title="Open Violations" value="2,567" />
						<MetricCard title="Open Cases" value="123" />
					</div>

					{/* Chart Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Violation Trends by Severity
					</h2>
					<div className="flex flex-wrap gap-4 px-4 py-6">
						<div className="flex min-w-72 flex-1 flex-col gap-2">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal">
								Violations Over Time
							</p>
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight truncate">
								+12%
							</p>
							<div className="flex gap-1">
								<p className="text-[#994d51] text-base font-normal leading-normal">
									Last 30 Days
								</p>
								<p className="text-[#07885d] text-base font-medium leading-normal">
									+12%
								</p>
							</div>
							<div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
								<svg
									width="100%"
									height="148"
									viewBox="-3 0 478 150"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
								>
									<path
										d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
										fill="url(#paint0_linear_1131_5935)"
									/>
									<path
										d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
										stroke="#994d51"
										strokeWidth="3"
										strokeLinecap="round"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_1131_5935"
											x1="236"
											y1="1"
											x2="236"
											y2="149"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#f3e7e8" />
											<stop offset="1" stopColor="#f3e7e8" stopOpacity="0" />
										</linearGradient>
									</defs>
								</svg>
								<div className="flex justify-around">
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										Jan
									</p>
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										Feb
									</p>
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										Mar
									</p>
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										Apr
									</p>
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										May
									</p>
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										Jun
									</p>
									<p className="text-[#994d51] text-[13px] font-bold leading-normal tracking-[0.015em]">
										Jul
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Top Offenders Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Top Offenders
					</h2>

					{/* Tabs */}
					<div className="pb-3">
						<div className="flex border-b border-[#e7d0d1] px-4 gap-8">
							<a
								className="flex flex-col items-center justify-center border-b-[3px] border-b-[#ea2a33] text-[#1b0e0e] pb-[13px] pt-4"
								href="#"
							>
								<p className="text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em]">
									By Category
								</p>
							</a>
							<a
								className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#994d51] pb-[13px] pt-4"
								href="#"
							>
								<p className="text-[#994d51] text-sm font-bold leading-normal tracking-[0.015em]">
									By Brand
								</p>
							</a>
							<a
								className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#994d51] pb-[13px] pt-4"
								href="#"
							>
								<p className="text-[#994d51] text-sm font-bold leading-normal tracking-[0.015em]">
									By Seller
								</p>
							</a>
						</div>
					</div>

					{/* Data Table */}
					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<table className="flex-1">
								<thead>
									<tr className="bg-[#fcf8f8]">
										<th className="px-4 py-3 text-left text-[#1b0e0e] w-[400px] text-sm font-medium leading-normal">
											Category
										</th>
										<th className="px-4 py-3 text-left text-[#1b0e0e] w-[400px] text-sm font-medium leading-normal">
											Violations
										</th>
										<th className="px-4 py-3 text-left text-[#1b0e0e] w-[400px] text-sm font-medium leading-normal">
											Average Score
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-t border-t-[#e7d0d1]">
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											Electronics
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											1,234
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											72%
										</td>
									</tr>
									<tr className="border-t border-t-[#e7d0d1]">
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											Fashion
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											987
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											68%
										</td>
									</tr>
									<tr className="border-t border-t-[#e7d0d1]">
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											Home & Garden
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											543
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											81%
										</td>
									</tr>
									<tr className="border-t border-t-[#e7d0d1]">
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											Automotive
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											321
										</td>
										<td className="px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
											77%
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default DashboardPage;
