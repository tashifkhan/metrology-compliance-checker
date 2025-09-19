import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta-sans",
	subsets: ["latin"],
	weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
	title: "Metrology Compliance Checker",
	description:
		"Administrative dashboard for compliance monitoring and management",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${plusJakartaSans.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
