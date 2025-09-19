"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import PageLayout from "../../components/PageLayout";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePreferencesPage: React.FC = () => {
	const [profileData, setProfileData] = useState({
		name: "",
		email: "",
		organization: "",
	});

	const [passwordData, setPasswordData] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
	const [language, setLanguage] = useState("english");
	const [emailNotifications, setEmailNotifications] = useState(true);
	const [inAppNotifications, setInAppNotifications] = useState(true);
	const [highContrastMode, setHighContrastMode] = useState(false);
	const [increaseFontSize, setIncreaseFontSize] = useState(false);

	const savedFilters = [
		{ id: 1, name: "All Declarations" },
		{ id: 2, name: "Products with Issues" },
		{ id: 3, name: "Recent Submissions" },
	];

	const toggleSwitch =
		(setter: React.Dispatch<React.SetStateAction<boolean>>) =>
		(checked: boolean) => {
			setter(checked);
		};

	const ToggleSwitch: React.FC<{
		checked: boolean;
		onChange: (checked: boolean) => void;
	}> = ({ checked, onChange }) => (
		<label
			className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 transition-all ${
				checked ? "justify-end bg-[#ea2a33]" : "justify-start bg-[#f3e7e8]"
			}`}
		>
			<div
				className="h-full w-[27px] rounded-full bg-white transition-all"
				style={{
					boxShadow:
						"rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
				}}
			/>
			<input
				type="checkbox"
				className="invisible absolute"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
		</label>
	);

	return (
		<PageLayout>
			<Header currentPage="Profile & Preferences" />
			<div className="px-40 flex flex-1 justify-center py-5">
				<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
					{/* Page Header */}
					<div className="flex flex-wrap justify-between gap-3 p-4">
						<p className="text-[#1b0e0e] tracking-light text-[32px] font-bold leading-tight min-w-72">
							Settings
						</p>
					</div>

					{/* Profile Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Profile
					</h2>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">Name</Label>
							<Input
								value={profileData.name}
								onChange={(e) =>
									setProfileData({ ...profileData, name: e.target.value })
								}
								placeholder="Enter your name"
							/>
						</div>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">Email</Label>
							<Input
								value={profileData.email}
								onChange={(e) =>
									setProfileData({ ...profileData, email: e.target.value })
								}
								placeholder="Enter your email"
								type="email"
							/>
						</div>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">Organization</Label>
							<Input
								value={profileData.organization}
								onChange={(e) =>
									setProfileData({
										...profileData,
										organization: e.target.value,
									})
								}
								placeholder="Enter your organization"
							/>
						</div>
					</div>

					<div className="flex px-4 py-3 justify-start">
						<Button>Update Profile</Button>
					</div>

					{/* Password & 2FA Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Password & 2FA
					</h2>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">Current Password</Label>
							<Input
								type="password"
								value={passwordData.currentPassword}
								onChange={(e) =>
									setPasswordData({
										...passwordData,
										currentPassword: e.target.value,
									})
								}
								placeholder="Enter current password"
							/>
						</div>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">New Password</Label>
							<Input
								type="password"
								value={passwordData.newPassword}
								onChange={(e) =>
									setPasswordData({
										...passwordData,
										newPassword: e.target.value,
									})
								}
								placeholder="Enter new password"
							/>
						</div>
					</div>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">Confirm New Password</Label>
							<Input
								type="password"
								value={passwordData.confirmPassword}
								onChange={(e) =>
									setPasswordData({
										...passwordData,
										confirmPassword: e.target.value,
									})
								}
								placeholder="Confirm new password"
							/>
						</div>
					</div>

					<div className="flex px-4 py-3 justify-start">
						<Button>Change Password</Button>
					</div>

					<div className="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-14 justify-between">
						<p className="text-[#1b0e0e] text-base font-normal leading-normal flex-1 truncate">
							Two-Factor Authentication (2FA)
						</p>
						<div className="shrink-0">
							<ToggleSwitch
								checked={twoFactorEnabled}
								onChange={toggleSwitch(setTwoFactorEnabled)}
							/>
						</div>
					</div>

					{/* Language Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Language
					</h2>

					<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
						<div className="flex flex-col min-w-40 flex-1">
							<Label className="pb-2">Select Language</Label>
							<Select value={language} onValueChange={setLanguage}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a language" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="english">English</SelectItem>
									<SelectItem value="spanish">Español</SelectItem>
									<SelectItem value="french">Français</SelectItem>
									<SelectItem value="german">Deutsch</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Notifications Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Notifications
					</h2>

					<div className="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-14 justify-between">
						<p className="text-[#1b0e0e] text-base font-normal leading-normal flex-1 truncate">
							Email Notifications
						</p>
						<div className="shrink-0">
							<ToggleSwitch
								checked={emailNotifications}
								onChange={toggleSwitch(setEmailNotifications)}
							/>
						</div>
					</div>

					<div className="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-14 justify-between">
						<p className="text-[#1b0e0e] text-base font-normal leading-normal flex-1 truncate">
							In-App Notifications
						</p>
						<div className="shrink-0">
							<ToggleSwitch
								checked={inAppNotifications}
								onChange={toggleSwitch(setInAppNotifications)}
							/>
						</div>
					</div>

					{/* Accessibility Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Accessibility
					</h2>

					<div className="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-14 justify-between">
						<p className="text-[#1b0e0e] text-base font-normal leading-normal flex-1 truncate">
							High Contrast Mode
						</p>
						<div className="shrink-0">
							<ToggleSwitch
								checked={highContrastMode}
								onChange={toggleSwitch(setHighContrastMode)}
							/>
						</div>
					</div>

					<div className="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-14 justify-between">
						<p className="text-[#1b0e0e] text-base font-normal leading-normal flex-1 truncate">
							Increase Font Size
						</p>
						<div className="shrink-0">
							<ToggleSwitch
								checked={increaseFontSize}
								onChange={toggleSwitch(setIncreaseFontSize)}
							/>
						</div>
					</div>

					{/* Saved Filters Section */}
					<h2 className="text-[#1b0e0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
						Saved Filters
					</h2>

					{savedFilters.map((filter) => (
						<div
							key={filter.id}
							className="flex items-center gap-4 bg-[#fcf8f8] px-4 min-h-14 justify-between"
						>
							<p className="text-[#1b0e0e] text-base font-normal leading-normal flex-1 truncate">
								Filter {filter.id}: {filter.name}
							</p>
							<div className="shrink-0">
								<button className="text-[#1b0e0e] flex size-7 items-center justify-center hover:text-[#994d51] transition-colors">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										fill="currentColor"
										viewBox="0 0 256 256"
									>
										<path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" />
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</PageLayout>
	);
};

export default ProfilePreferencesPage;
