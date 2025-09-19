import React from "react";
import Link from "next/link";

interface HeaderProps {
	currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = "Dashboard" }) => {
	return (
		<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3e7e8] px-10 py-3">
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-4 text-[#1b0e0e]">
					<div className="size-4">
						<svg
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
								fill="currentColor"
							/>
						</svg>
					</div>
					<h2 className="text-[#1b0e0e] text-lg font-bold leading-tight tracking-[-0.015em]">
						Compliance Checker
					</h2>
				</div>
				<nav className="flex items-center gap-9">
					<Link
						href="/dashboard"
						className={`text-sm font-medium leading-normal ${
							currentPage === "Dashboard"
								? "text-[#1b0e0e]"
								: "text-[#994d51] hover:text-[#1b0e0e]"
						}`}
					>
						Dashboard
					</Link>
					<Link
						href="/listings"
						className={`text-sm font-medium leading-normal ${
							currentPage === "Listings"
								? "text-[#1b0e0e]"
								: "text-[#994d51] hover:text-[#1b0e0e]"
						}`}
					>
						Listings
					</Link>
					<Link
						href="/cases"
						className={`text-sm font-medium leading-normal ${
							currentPage === "Cases"
								? "text-[#1b0e0e]"
								: "text-[#994d51] hover:text-[#1b0e0e]"
						}`}
					>
						Cases
					</Link>
					<Link
						href="/review-queue"
						className={`text-sm font-medium leading-normal ${
							currentPage === "Review Queue"
								? "text-[#1b0e0e]"
								: "text-[#994d51] hover:text-[#1b0e0e]"
						}`}
					>
						Review
					</Link>
					<Link
						href="/map"
						className={`text-sm font-medium leading-normal ${
							currentPage === "Map"
								? "text-[#1b0e0e]"
								: "text-[#994d51] hover:text-[#1b0e0e]"
						}`}
					>
						Map
					</Link>
					<Link
						href="/reports"
						className={`text-sm font-medium leading-normal ${
							currentPage === "Reports"
								? "text-[#1b0e0e]"
								: "text-[#994d51] hover:text-[#1b0e0e]"
						}`}
					>
						Reports
					</Link>
				</nav>
			</div>
			<div className="flex flex-1 justify-end gap-8">
				<label className="flex flex-col min-w-40 !h-10 max-w-64">
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
							placeholder="Search"
							className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b0e0e] focus:outline-0 focus:ring-0 border-none bg-[#f3e7e8] focus:border-none h-full placeholder:text-[#994d51] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
						/>
					</div>
				</label>
				<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f3e7e8] text-[#1b0e0e] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
					<div className="text-[#1b0e0e]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20px"
							height="20px"
							fill="currentColor"
							viewBox="0 0 256 256"
						>
							<path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
						</svg>
					</div>
				</button>
				<Link
					href="/profile"
					className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer hover:ring-2 hover:ring-[#994d51] transition-all"
					style={{
						backgroundImage:
							'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7N6KptG9QpPfO6JWYgVYQwL98ztmPeUuirlDSuXrtS06pstsEw2CXpKTsOip_wBz72yJI_pzthrnxQ0LOks69zEAKOcOlefgdC13D7ujcvGytYW2PGY-Lrzt-1U918sm6wI0lKNV0BRdL1xaE5Nj80nyT3wYD1J2WJyJBnmeBdhfHfu8L2U91utVnpgq96rJu7RN-j9YR35KFIKRpUWZooJFRoa1sRj34csmube-qlcYPutlMTMVzHsysICY-7DJCz6k_6WaIwlg")',
					}}
				/>
			</div>
		</header>
	);
};

export default Header;
