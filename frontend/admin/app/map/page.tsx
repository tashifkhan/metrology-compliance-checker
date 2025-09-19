"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import FilterButton from "../../components/FilterButton";

interface HeatmapData {
	region: string;
	lat: number;
	lng: number;
	violations: number;
	severity: "low" | "medium" | "high";
}

const MapHeatmapPage: React.FC = () => {
	const [regionSearch, setRegionSearch] = useState("");
	const [mapSearch, setMapSearch] = useState("");
	const [zoomLevel, setZoomLevel] = useState(1);
	// mapRef was removed because it was not used. Keep this comment in case
	// a DOM ref is needed in future.

	// Mock heatmap data
	const heatmapData: HeatmapData[] = [
		{
			region: "California",
			lat: 36.7783,
			lng: -119.4179,
			violations: 45,
			severity: "high",
		},
		{
			region: "Texas",
			lat: 31.9686,
			lng: -99.9018,
			violations: 23,
			severity: "medium",
		},
		{
			region: "New York",
			lat: 42.1657,
			lng: -74.9481,
			violations: 38,
			severity: "high",
		},
		{
			region: "Florida",
			lat: 27.7663,
			lng: -81.6868,
			violations: 19,
			severity: "low",
		},
		{
			region: "Illinois",
			lat: 40.3363,
			lng: -89.0022,
			violations: 31,
			severity: "medium",
		},
		{
			region: "Pennsylvania",
			lat: 41.2033,
			lng: -77.1945,
			violations: 27,
			severity: "medium",
		},
		{
			region: "Ohio",
			lat: 40.3888,
			lng: -82.7649,
			violations: 15,
			severity: "low",
		},
		{
			region: "Georgia",
			lat: 33.0406,
			lng: -83.6431,
			violations: 22,
			severity: "medium",
		},
	];

	const getSeverityColor = (severity: string, violations: number) => {
		const opacity = Math.min(violations / 50, 1); // Max opacity at 50 violations
		switch (severity) {
			case "high":
				return `rgba(234, 42, 51, ${0.3 + opacity * 0.7})`;
			case "medium":
				return `rgba(153, 77, 81, ${0.3 + opacity * 0.7})`;
			case "low":
				return `rgba(7, 136, 93, ${0.3 + opacity * 0.7})`;
			default:
				return `rgba(153, 77, 81, ${0.3 + opacity * 0.7})`;
		}
	};

	const handleZoomIn = () => {
		setZoomLevel((prev) => Math.min(prev + 0.2, 3));
	};

	const handleZoomOut = () => {
		setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
	};

	const MapVisualization: React.FC = () => {
		return (
			<div className="relative w-full h-full bg-gradient-to-br from-[#e7f3ff] to-[#f0f8ff] rounded-lg overflow-hidden">
				{/* Simplified US Map Background */}
				<svg
					viewBox="0 0 1000 600"
					className="absolute inset-0 w-full h-full"
					style={{ transform: `scale(${zoomLevel})` }}
				>
					{/* US Map Outline (simplified) */}
					<path
						d="M 150 300 Q 200 250 300 280 Q 400 250 500 270 Q 600 250 700 280 Q 800 270 850 300 Q 900 320 850 400 Q 800 450 700 420 Q 600 450 500 430 Q 400 450 300 420 Q 200 450 150 400 Z"
						fill="#f3e7e8"
						stroke="#e7d0d1"
						strokeWidth="2"
					/>

					{/* Heatmap Points */}
					{heatmapData.map((point, index) => {
						const x = 150 + (point.lng + 125) * 5.6; // Rough conversion for demo
						const y = 150 + (50 - point.lat) * 6; // Rough conversion for demo
						const radius = 20 + (point.violations / 50) * 30;

						return (
							<g key={index}>
								<circle
									cx={x}
									cy={y}
									r={radius}
									fill={getSeverityColor(point.severity, point.violations)}
									className="animate-pulse cursor-pointer hover:opacity-80"
									onClick={() =>
										alert(
											`${point.region}: ${point.violations} violations (${point.severity} severity)`
										)
									}
								/>
								<text
									x={x}
									y={y + 5}
									textAnchor="middle"
									className="text-xs font-medium fill-[#1b0e0e] pointer-events-none"
								>
									{point.violations}
								</text>
							</g>
						);
					})}
				</svg>

				{/* Legend */}
				<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
					<h4 className="text-sm font-medium text-[#1b0e0e] mb-2">
						Violation Severity
					</h4>
					<div className="flex flex-col gap-1">
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 rounded-full bg-[#ea2a33] opacity-60"></div>
							<span className="text-xs text-[#1b0e0e]">High</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 rounded-full bg-[#994d51] opacity-60"></div>
							<span className="text-xs text-[#1b0e0e]">Medium</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 rounded-full bg-[#07885d] opacity-60"></div>
							<span className="text-xs text-[#1b0e0e]">Low</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<PageLayout>
			<Header currentPage="Map" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<div className="flex min-w-72 flex-col gap-3">
							<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight">
								Compliance Map
							</p>
							<p className="text-[#994d51] text-sm font-normal leading-normal">
								Visualize compliance data across regions with interactive
								filters and detailed summaries.
							</p>
						</div>
						<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f3e7e8] text-[#1b0e0e] text-sm font-medium leading-normal hover:bg-[#e7d0d1] transition-colors">
							<span className="truncate">View listings</span>
						</button>
					</div>

					{/* Region Search */}
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
									placeholder="Search by region"
									className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
									value={regionSearch}
									onChange={(e) => setRegionSearch(e.target.value)}
								/>
							</div>
						</label>
					</div>

					{/* Filter Buttons */}
					<div className="flex gap-3 p-3 flex-wrap pr-4">
						<FilterButton label="Date" />
						<FilterButton label="Severity" />
						<FilterButton label="Category" />
					</div>

					{/* Map Container */}
					<div className="flex flex-col h-full flex-1">
						<div className="flex flex-1 flex-col px-4 py-3">
							<div className="relative bg-cover bg-center flex min-h-[480px] flex-1 flex-col justify-between px-4 pb-4 pt-5 rounded-lg">
								{/* Map Background */}
								<MapVisualization />

								{/* Map Search Overlay */}
								<label className="flex flex-col min-w-40 h-12 relative z-10">
									<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
										<div className="text-[#994d51] flex border-none bg-[#fcf8f8] items-center justify-center pl-4 rounded-l-lg border-r-0">
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
											placeholder="Search for a region"
											className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#fcf8f8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
											value={mapSearch}
											onChange={(e) => setMapSearch(e.target.value)}
										/>
									</div>
								</label>

								{/* Map Controls */}
								<div className="flex flex-col items-end gap-3 relative z-10">
									<div className="flex flex-col gap-0.5">
										<button
											onClick={handleZoomIn}
											className="flex size-10 items-center justify-center rounded-t-lg bg-[#fcf8f8] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#f3e7e8] transition-colors"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24px"
												height="24px"
												fill="currentColor"
												viewBox="0 0 256 256"
											>
												<path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
											</svg>
										</button>
										<button
											onClick={handleZoomOut}
											className="flex size-10 items-center justify-center rounded-b-lg bg-[#fcf8f8] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#f3e7e8] transition-colors"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24px"
												height="24px"
												fill="currentColor"
												viewBox="0 0 256 256"
											>
												<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z" />
											</svg>
										</button>
									</div>
									<button className="flex size-10 items-center justify-center rounded-lg bg-[#fcf8f8] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#f3e7e8] transition-colors">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24px"
											height="24px"
											fill="currentColor"
											viewBox="0 0 256 256"
											transform="scale(-1, 1)"
										>
											<path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Statistics Summary */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mt-4">
						<div className="flex flex-col gap-2 rounded-lg p-4 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-sm font-medium leading-normal">
								Total Regions
							</p>
							<p className="text-[#1b0e0e] tracking-light text-xl font-bold leading-tight">
								{heatmapData.length}
							</p>
						</div>
						<div className="flex flex-col gap-2 rounded-lg p-4 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-sm font-medium leading-normal">
								Total Violations
							</p>
							<p className="text-[#1b0e0e] tracking-light text-xl font-bold leading-tight">
								{heatmapData.reduce((sum, item) => sum + item.violations, 0)}
							</p>
						</div>
						<div className="flex flex-col gap-2 rounded-lg p-4 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-sm font-medium leading-normal">
								High Severity
							</p>
							<p className="text-[#1b0e0e] tracking-light text-xl font-bold leading-tight">
								{heatmapData.filter((item) => item.severity === "high").length}
							</p>
						</div>
						<div className="flex flex-col gap-2 rounded-lg p-4 bg-[#f3e7e8]">
							<p className="text-[#1b0e0e] text-sm font-medium leading-normal">
								Avg per Region
							</p>
							<p className="text-[#1b0e0e] tracking-light text-xl font-bold leading-tight">
								{Math.round(
									heatmapData.reduce((sum, item) => sum + item.violations, 0) /
										heatmapData.length
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default MapHeatmapPage;
