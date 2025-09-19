"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignInPage: React.FC = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		emailOrUsername: "",
		password: "",
		twoFactorCode: "",
	});
	const [showTwoFactor, setShowTwoFactor] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		if (error) setError(""); // Clear error when user starts typing
	};

	const handleSignIn = async () => {
		if (!formData.emailOrUsername || !formData.password) {
			setError("Please enter both email/username and password");
			return;
		}

		setLoading(true);
		// Simulate API call
		setTimeout(() => {
			setLoading(false);
			setShowTwoFactor(true);
		}, 1000);
	};

	const handleSSOSignIn = () => {
		setLoading(true);
		// Simulate SSO redirect
		setTimeout(() => {
			setLoading(false);
			setShowTwoFactor(true);
		}, 1000);
	};

	const handleTwoFactorSubmit = () => {
		if (!formData.twoFactorCode) {
			setError("Please enter your 2FA code");
			return;
		}

		setLoading(true);
		// Simulate 2FA verification
		setTimeout(() => {
			setLoading(false);
			// Redirect to dashboard after successful authentication
			router.push("/dashboard");
		}, 1000);
	};

	const handleResendCode = () => {
		// Simulate resending 2FA code
		setError("");
		// Show success message briefly
		setTimeout(() => {
			setError("");
		}, 3000);
	};

	return (
		<div
			className="relative flex size-full min-h-screen flex-col bg-[#fcf8f8] group/design-root overflow-x-hidden"
			style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
		>
			<div className="layout-container flex h-full grow flex-col">
				<div className="px-40 flex flex-1 justify-center py-5">
					<div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
						{/* Logo/Brand Section */}
						<div className="flex items-center justify-center gap-4 text-[#1b0e0e] mb-8">
							<div className="size-8">
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
							<h1 className="text-[#1b0e0e] text-2xl font-bold leading-tight tracking-[-0.015em]">
								Compliance Checker
							</h1>
						</div>

						<h2 className="text-[#1b0e0e] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
							Sign in to your account
						</h2>

						{/* Email/Username Input */}
						<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
							<div className="flex flex-col min-w-40 flex-1">
								<Input
									placeholder="Email or username"
									value={formData.emailOrUsername}
									onChange={(e) =>
										handleInputChange("emailOrUsername", e.target.value)
									}
									disabled={showTwoFactor}
								/>
							</div>
						</div>

						{/* Password Input */}
						<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
							<div className="flex flex-col min-w-40 flex-1">
								<Input
									type="password"
									placeholder="Password"
									value={formData.password}
									onChange={(e) =>
										handleInputChange("password", e.target.value)
									}
									disabled={showTwoFactor}
								/>
							</div>
						</div>

						{/* Sign In Button */}
						{!showTwoFactor && (
							<>
								<div className="flex px-4 py-3">
									<Button
										onClick={handleSignIn}
										disabled={loading}
										className="flex-1"
									>
										{loading ? "Signing in..." : "Sign in"}
									</Button>
								</div>

								{/* SSO Button */}
								<div className="flex px-4 py-3">
									<Button
										onClick={handleSSOSignIn}
										disabled={loading}
										variant="secondary"
										className="flex-1"
									>
										{loading ? "Redirecting..." : "Sign in with SSO"}
									</Button>
								</div>
							</>
						)}

						{/* 2FA Section */}
						{showTwoFactor && (
							<>
								<div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
									<div className="flex flex-col min-w-40 flex-1">
										<Input
											placeholder="2FA Code"
											value={formData.twoFactorCode}
											onChange={(e) =>
												handleInputChange("twoFactorCode", e.target.value)
											}
											maxLength={6}
										/>
									</div>
								</div>

								<div className="flex px-4 py-3">
									<Button
										onClick={handleTwoFactorSubmit}
										disabled={loading}
										className="flex-1"
									>
										{loading ? "Verifying..." : "Verify & Sign In"}
									</Button>
								</div>

								<Button
									onClick={handleResendCode}
									variant="link"
									className="text-[#994d51] hover:text-[#1b0e0e]"
								>
									Resend code
								</Button>
							</>
						)}

						{/* Error Message */}
						{error && (
							<p className="text-[#ea2a33] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
								{error}
							</p>
						)}

						{/* Footer Information */}
						<div className="mt-8 border-t border-[#e7d0d1] pt-6">
							<p className="text-[#994d51] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
								By signing in, you agree to our Terms of Service and Privacy
								Policy
							</p>
							<p className="text-[#994d51] text-xs font-normal leading-normal px-4 text-center">
								© 2025 Compliance Checker. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
