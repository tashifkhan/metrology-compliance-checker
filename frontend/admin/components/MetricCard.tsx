import React from "react";

interface MetricCardProps {
	title: string;
	value: string | number;
	className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
	title,
	value,
	className = "",
}) => {
	return (
		<div
			className={`flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f3e7e8] ${className}`}
		>
			<p className="text-[#1b0e0e] text-base font-medium leading-normal">
				{title}
			</p>
			<p className="text-[#1b0e0e] tracking-light text-2xl font-bold leading-tight">
				{value}
			</p>
		</div>
	);
};

export default MetricCard;
