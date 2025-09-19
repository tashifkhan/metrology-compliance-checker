"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";

const HelpLegalPage: React.FC = () => {
	const [rulesSearch, setRulesSearch] = useState("");
	const [glossarySearch, setGlossarySearch] = useState("");
	const [supportEmail, setSupportEmail] = useState("");

	const tutorials = [
		{
			id: 1,
			title: "Getting Started",
			icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUa7CgqSaIIruFdafkea5UdYqeqnExV2dvQdiVQaW-GUMJTmRm6DHGDszWce7rQJb0S8MV1WDfS2QwLM_Fx02dwdkfYYAp-E43lTLOSaoZ_7lgNd3-fZbAb8qlMotxWsRx78pLG52u07SuGa5XLglzodaFiMZHn1eqH5baq9FDTaJyIqVXsU9XGG-1BnXi_nqWM8FT_nhFuTcoqwQCSzB2a-l4MULeLY6W0YLpZivR9Z66u6l4_ARedk6y627axuHEqNOb0iqCp7s",
		},
		{
			id: 2,
			title: "Understanding Declarations",
			icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSAMeDKinsE5v4t4r7TshXD_ymgfNhGZw9XmUfjoTG1O8xFFUPhyH9C6peQxoE7Mcri8Mgr2kGCEoHdlznbfb_7FXDwh6xdcQA55hA5ZQLURRoGTsxr0G9rbVrCEW0T29eN1RD1BVigvovZm4Tr0VnEqZO6zWecZwbgE3ulKOLwMUNwNtEN31hDyw0TaPB-sKYISJhZ_FiC_5JjzPSGDjDXOXI1Jd77RdGhpW7I9YOecdPQMgz7deQckAc1QLv-34dz9Ku2AOB7t8",
		},
		{
			id: 3,
			title: "Troubleshooting",
			icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmWdVewLgEscbtcWtZWpWzhtI1AidSFyc69s_c0ep5BR1vnDtoGuYspRtnwv3YVJz1vFYjnIalJgO58IslQEHocSpdkkW5EbeijSfrDlMjT7D5tfTPFLOD67v7UfoCr4--8NQjTfKTKmt3CFJrearL-WlCVUAEB9E6i6eNFK9Rgh0P2ih7_2mRpOZ-oREWAebfjUcJk6oPL6ZxmiiM9znfzJethZkCXeFGOyPfw49w-rWxbZW5_2-rzQN1rWWjXM5eyBFZFZwmZm4",
		},
	];

	const changelog = [
		{
			version: "Version 1.2",
			description: "Added support for new declaration formats",
		},
		{
			version: "Version 1.1",
			description: "Improved performance and bug fixes",
		},
		{
			version: "Version 1.0",
			description: "Initial release",
		},
	];

	const SearchInput: React.FC<{
		value: string;
		onChange: (value: string) => void;
		placeholder: string;
	}> = ({ value, onChange, placeholder }) => (
		<div className="px-4 py-3">
			<label className="flex flex-col min-w-40 h-12 w-full">
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
					<input
						placeholder={placeholder}
						className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
						value={value}
						onChange={(e) => onChange(e.target.value)}
					/>
				</div>
			</label>
		</div>
	);

	return (
		<PageLayout>
			<Header currentPage="Help & Legal" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
							Help & Legal
						</p>
					</div>

					{/* Rules Library Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Rules Library
					</h2>
					<SearchInput
						value={rulesSearch}
						onChange={setRulesSearch}
						placeholder="Search for rules"
					/>

					{/* Glossary Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Glossary
					</h2>
					<SearchInput
						value={glossarySearch}
						onChange={setGlossarySearch}
						placeholder="Search for terms"
					/>

					{/* Tutorials Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Tutorials
					</h2>
					<div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
						{tutorials.map((tutorial) => (
							<div
								key={tutorial.id}
								className="flex flex-1 gap-3 rounded-lg border border-[#e7d0d1] bg-[#fcf8f8] p-4 items-center cursor-pointer hover:bg-[#f3e7e8] transition-colors"
							>
								<div
									className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
									style={{ backgroundImage: `url("${tutorial.icon}")` }}
								/>
								<h2 className="text-[#1b0e0e] text-base font-bold leading-tight">
									{tutorial.title}
								</h2>
							</div>
						))}
					</div>

					{/* Contact Support Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Contact Support
					</h2>
					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<label className="flex flex-col min-w-40 flex-1">
							<p className="text-[#1b0e0e] text-base font-medium leading-normal pb-2">
								Email
							</p>
							<input
								placeholder="Enter your email"
								className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border border-[#e7d0d1] bg-[#fcf8f8] focus:border-[#e7d0d1] h-14 placeholder:text-[#994d51] p-[15px] text-base font-normal leading-normal"
								value={supportEmail}
								onChange={(e) => setSupportEmail(e.target.value)}
								type="email"
							/>
						</label>
					</div>
					<div className="flex px-4 py-3 justify-start">
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
							<span className="truncate">Submit</span>
						</button>
					</div>

					{/* Changelog Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Changelog
					</h2>
					<div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
						{changelog.map((entry, index) => (
							<React.Fragment key={index}>
								<div
									className={`flex flex-col items-center gap-1 ${
										index === 0 ? "pt-3" : ""
									} ${index === changelog.length - 1 ? "pb-3" : ""}`}
								>
									{index > 0 && <div className="w-[1.5px] bg-[#e7d0d1] h-2" />}
									<div className="text-[#1b0e0e]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24px"
											height="24px"
											fill="currentColor"
											viewBox="0 0 256 256"
										>
											<path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
										</svg>
									</div>
									{index < changelog.length - 1 && (
										<div className="w-[1.5px] bg-[#e7d0d1] h-2 grow" />
									)}
								</div>
								<div className="flex flex-1 flex-col py-3">
									<p className="text-[#1b0e0e] text-base font-medium leading-normal">
										{entry.version}
									</p>
									<p className="text-[#994d51] text-base font-normal leading-normal">
										{entry.description}
									</p>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default HelpLegalPage;
