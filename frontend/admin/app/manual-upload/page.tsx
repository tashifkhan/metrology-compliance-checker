"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";

interface UploadItem {
	id: string;
	filename: string;
	progress: number;
	result: "In Progress" | "Completed" | "Failed";
}

const mockUploadQueue: UploadItem[] = [
	{
		id: "1",
		filename: "Product_Listing_Document_1.pdf",
		progress: 75,
		result: "In Progress",
	},
	{
		id: "2",
		filename: "Compliance_Report_Q4.xlsx",
		progress: 100,
		result: "Completed",
	},
	{
		id: "3",
		filename: "Product_Images_Batch_1.zip",
		progress: 45,
		result: "In Progress",
	},
	{
		id: "4",
		filename: "Error_Document.pdf",
		progress: 0,
		result: "Failed",
	},
];

const ManualUploadPage: React.FC = () => {
	const [dragActive, setDragActive] = useState(false);

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			// Handle file upload logic here
			console.log("Files dropped:", e.dataTransfer.files);
		}
	};

	const getResultColor = (result: string) => {
		switch (result) {
			case "Completed":
				return "bg-[#07885d] text-white";
			case "Failed":
				return "bg-[#ea2a33] text-white";
			case "In Progress":
				return "bg-[#994d51] text-white";
			default:
				return "bg-[#f3e7e8] text-[#1b0e0e]";
		}
	};

	const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
		<div className="flex items-center gap-3">
			<div className="w-[88px] overflow-hidden rounded-sm bg-[#e7d0d1]">
				<div
					className="h-1 rounded-full bg-[#ea2a33]"
					style={{ width: `${progress}%` }}
				/>
			</div>
			<p className="text-[#1b0e0e] text-sm font-medium leading-normal">
				{progress}
			</p>
		</div>
	);

	return (
		<PageLayout>
			<Header currentPage="Manual Upload" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<div className="flex min-w-72 flex-col gap-3">
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
								Manual Upload
							</p>
							<p className="text-[#994d51] text-sm font-normal leading-normal">
								Upload files for ad-hoc compliance checking
							</p>
						</div>
					</div>

					{/* Upload Area */}
					<div className="flex flex-col p-4">
						<div
							className={`flex flex-col items-center gap-6 rounded-lg border-2 border-dashed px-6 py-14 transition-colors ${
								dragActive
									? "border-[#ea2a33] bg-[#f3e7e8]"
									: "border-[#e7d0d1] hover:border-[#994d51] hover:bg-[#f3e7e8]"
							}`}
							onDragEnter={handleDrag}
							onDragLeave={handleDrag}
							onDragOver={handleDrag}
							onDrop={handleDrop}
						>
							<div className="flex max-w-[480px] flex-col items-center gap-2">
								<div className="text-[#994d51] mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										fill="currentColor"
										viewBox="0 0 256 256"
									>
										<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L120,156.69V40a8,8,0,0,1,16,0V156.69l66.34-66.35a8,8,0,0,1,11.32,11.32Z" />
										<path d="M216,144a8,8,0,0,0-8,8v40H48V152a8,8,0,0,0-16,0v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z" />
									</svg>
								</div>
								<p className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
									Drag and drop files here
								</p>
								<p className="text-[#1b0e0e] text-sm font-normal leading-normal max-w-[480px] text-center">
									Or click to browse your files. Supports PDF, DOCX, XLSX, CSV,
									and image formats.
								</p>
							</div>
							<label htmlFor="file-upload">
								<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
									<span className="truncate">Browse Files</span>
								</button>
								<input
									id="file-upload"
									type="file"
									multiple
									className="hidden"
									onChange={(e) => {
										if (e.target.files) {
											console.log("Files selected:", e.target.files);
										}
									}}
								/>
							</label>
						</div>
					</div>

					{/* Upload Queue */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Upload Queue
					</h2>

					<div className="px-4 py-3">
						<div className="flex overflow-hidden rounded-lg border border-[#e7d0d1] bg-[#fcf8f8]">
							<div className="w-full overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="bg-[#fcf8f8]">
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Filename
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Progress
											</th>
											<th className="px-4 py-3 text-left text-[#1b0e0e] text-sm font-medium leading-normal">
												Result
											</th>
											<th className="px-4 py-3 text-left text-[#994d51] text-sm font-medium leading-normal">
												Actions
											</th>
										</tr>
									</thead>
									<tbody>
										{mockUploadQueue.map((item) => (
											<tr key={item.id} className="border-t border-t-[#e7d0d1]">
												<td className="h-[72px] px-4 py-2 text-[#1b0e0e] text-sm font-normal leading-normal">
													{item.filename}
												</td>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<ProgressBar progress={item.progress} />
												</td>
												<td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
													<button
														className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 text-sm font-medium leading-normal w-full ${getResultColor(
															item.result
														)}`}
													>
														<span className="truncate">{item.result}</span>
													</button>
												</td>
												<td className="h-[72px] px-4 py-2 text-[#994d51] text-sm font-bold leading-normal tracking-[0.015em]">
													<div className="flex gap-2">
														{item.result === "Completed" && (
															<button className="hover:text-[#1b0e0e] transition-colors">
																Download
															</button>
														)}
														{item.result === "Failed" && (
															<button className="hover:text-[#1b0e0e] transition-colors">
																Retry
															</button>
														)}
														<button className="hover:text-[#ea2a33] transition-colors">
															Remove
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

					{/* Action Buttons */}
					<div className="flex gap-3 p-4 justify-end">
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-bold leading-normal tracking-[0.015em]">
							<span className="truncate">Clear Completed</span>
						</button>
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ea2a33] text-[#fcf8f8] text-sm font-bold leading-normal tracking-[0.015em]">
							<span className="truncate">Start All</span>
						</button>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default ManualUploadPage;
