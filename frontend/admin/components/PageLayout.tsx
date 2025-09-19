import React from "react";

interface PageLayoutProps {
	children: React.ReactNode;
	currentPage?: string;
	title?: string;
	subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
	children,
	currentPage = "Dashboard",
	title,
	subtitle,
}) => {
	return (
		<div className="relative flex size-full min-h-screen flex-col bg-[#fcf8f8] group/design-root overflow-x-hidden">
			<div className="layout-container flex h-full grow flex-col">
				{children}
			</div>
		</div>
	);
};

export default PageLayout;
