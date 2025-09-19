"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import FilterDropdown from "../../components/FilterDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ListingItem {
	id: string;
	thumbnail: string;
	title: string;
	platform: string;
	category: string;
	brand: string;
	seller: string;
	complianceScore: number;
	violations: number;
	lastSeen: string;
	status: "Compliant" | "Non-Compliant" | "Under Review";
	assignee: string;
}

const mockListings: ListingItem[] = [
	{
		id: "1",
		thumbnail:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuD2SDmcqx6fh0bVj3dKA_BBHi2tXkumvwXF7Aj5y-4wFTJ64qlsHERPVYf-Fr10IeoIdP_S6_mwA7_mnkxOSyFnC9L0bsKfA6E1Ezi2ouMgWeFq7cjtyjE9Yl1CY7jfUiDjg24nwywS4Q6dIlWM49Oh5OqWoFog6wGGvQZ0su-9T5HUWVtZ8fd9Q7dGdNMbqDx9V6rppqHeRL6InoF5YJBFQCto6rgfOvM66yPJU5xbUoF9s2qTXpr_RwEG_Fx6DQd2dRMBi8UBzj0",
		title: "Wireless Bluetooth Headphones",
		platform: "E-commerce Site A",
		category: "Electronics",
		brand: "Brand X",
		seller: "Seller A",
		complianceScore: 85,
		violations: 2,
		lastSeen: "2023-11-15",
		status: "Compliant",
		assignee: "User 1",
	},
	{
		id: "2",
		thumbnail:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCQTjVVyoVdRi5Rkj9EciArO1yj_s8ZoWX36xcPZKj3VESzMPYTtOCU3mioyzufRlG3HQKEDao_SsKedv44YBrOS_VRhJ1LzrenyZlymq-X4QP4Op0FEAzghr0QZFn0-Z5G1XWwd1oiZgfMncPhWNY5V15wvDeBU1T_joRlOOJJfrGc6AQP48n2Md3NNpPUz5vpihT5nFEYB9ilNz-1EFRhroK9RQmRjsV3y62l6Wok5gqf17722iS8YNrPGOiH0WmUAQhumqJvQOU",
		title: "Cotton T-Shirt Basic",
		platform: "E-commerce Site B",
		category: "Clothing",
		brand: "Brand Y",
		seller: "Seller B",
		complianceScore: 60,
		violations: 5,
		lastSeen: "2023-11-14",
		status: "Non-Compliant",
		assignee: "User 2",
	},
	{
		id: "3",
		thumbnail:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDzu65UHqpxQe6S1ouRIED9Cj2TmbklQLz1GJ1fK3Ij3ZzZt4cSLn6k1s3JIpz4wkNeAFIL9-1yqUzXrB_Jz7Zu9uW6AcwqWO1m1QdzDPR6O2rQSat8mP9t5jXwS4h29-b6F2UABhqEGK4EiLlkT_qUpDosfFrjoPu6m2RNbSjvFILYFEPPCLDznoGs8-uxX3ZenXURzFhDcpytFsLDLf22OMBu4dh83ho5sfz2dOib8TXcTg1OCrebPEyB7fKdVpQxWEqHmwhOaic",
		title: "Kitchen Knife Set Premium",
		platform: "E-commerce Site A",
		category: "Home Goods",
		brand: "Brand Z",
		seller: "Seller C",
		complianceScore: 92,
		violations: 1,
		lastSeen: "2023-11-13",
		status: "Compliant",
		assignee: "User 1",
	},
];

const ListingsPage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedPlatform, setSelectedPlatform] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedBrand, setSelectedBrand] = useState("");
	const [selectedSeller, setSelectedSeller] = useState("");
	const [selectedSeverity, setSelectedSeverity] = useState("");

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Compliant":
				return "bg-[#07885d] text-white";
			case "Non-Compliant":
				return "bg-[#ea2a33] text-white";
			case "Under Review":
				return "bg-[#994d51] text-white";
			default:
				return "bg-[#f3e7e8] text-[#1b0e0e]";
		}
	};

	const ComplianceBar: React.FC<{ score: number }> = ({ score }) => (
		<div className="flex items-center gap-3">
			<div className="w-[88px] overflow-hidden rounded-sm bg-[#e7d0d1]">
				<div
					className="h-1 rounded-full bg-[#ea2a33]"
					style={{ width: `${score}%` }}
				/>
			</div>
			<p className="text-[#1b0e0e] text-sm font-medium leading-normal">
				{score}
			</p>
		</div>
	);

	return (
		<PageLayout>
			<Header currentPage="Listings" />
			<div className="gap-1 px-6 flex flex-1 justify-center py-5">
				{/* Sidebar Filters */}
				<div className="layout-content-container flex flex-col w-80">
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Filters
					</h2>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Platform"
							options={[
								"E-commerce Site A",
								"E-commerce Site B",
								"E-commerce Site C",
							]}
							value={selectedPlatform}
							onChange={setSelectedPlatform}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Category"
							options={["Electronics", "Clothing", "Home Goods", "Automotive"]}
							value={selectedCategory}
							onChange={setSelectedCategory}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Brand"
							options={["Brand X", "Brand Y", "Brand Z"]}
							value={selectedBrand}
							onChange={setSelectedBrand}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Seller"
							options={["Seller A", "Seller B", "Seller C"]}
							value={selectedSeller}
							onChange={setSelectedSeller}
						/>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<FilterDropdown
							label="Severity"
							options={["High", "Medium", "Low"]}
							value={selectedSeverity}
							onChange={setSelectedSeverity}
						/>
					</div>

					{/* Date Filter */}
					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Input type="date" placeholder="MM/DD/YYYY" />
						</div>
					</div>

					<div className="flex justify-stretch">
						<div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
							<Button variant="secondary">Clear</Button>
							<Button>Apply</Button>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
							Product Listings
						</p>
						<Button variant="secondary" size="sm">
							Export
						</Button>
					</div>

					{/* Search Bar */}
					<div className="px-4 py-3">
						<div className="flex flex-col min-w-40 h-12 w-full">
							<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
								<div className="text-[#994d51] flex border-none bg-[#f3e7e8] items-center justify-center pl-4 rounded-l-lg border-r-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										fill="currentColor"
										viewBox="0 0 256 256"
									>
										<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
									</svg>
								</div>
								<Input
									placeholder="Search listings"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="rounded-l-none border-l-0 pl-2 bg-[#f3e7e8] border-none focus:border-none"
								/>
							</div>
						</div>
					</div>

					{/* Listings Table */}
					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<div className="w-full overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="bg-[#fcf8f8]">
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Thumbnail
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Title
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Platform
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Category
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Brand
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Seller
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Compliance Score
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Violations (#)
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Last Seen
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Status
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Assignee
											</th>
										</tr>
									</thead>
									<tbody>
										{mockListings.map((listing) => (
											<tr
												key={listing.id}
												className="border-t border-t-[#e7d0d1]"
											>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<div
														className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10"
														style={{
															backgroundImage: `url("${listing.thumbnail}")`,
														}}
													/>
												</td>
												<td className="h-[72px] px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
													{listing.title}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.platform}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.category}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.brand}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.seller}
												</td>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<ComplianceBar score={listing.complianceScore} />
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.violations}
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.lastSeen}
												</td>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<Button
														size="sm"
														className={`w-full ${getStatusColor(
															listing.status
														)}`}
													>
														{listing.status}
													</Button>
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-normal leading-normal">
													{listing.assignee}
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

export default ListingsPage;
