import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface FilterButtonProps {
	label: string;
	onClick?: () => void;
	className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
	label,
	onClick,
	className = "",
}) => {
	return (
		<Button
			onClick={onClick}
			variant="secondary"
			size="sm"
			className={`h-8 gap-x-2 ${className}`}
		>
			<span className="text-sm font-medium">{label}</span>
			<ChevronDown className="h-4 w-4" />
		</Button>
	);
};

export default FilterButton;
