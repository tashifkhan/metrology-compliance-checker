import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FilterDropdownProps {
	label: string;
	options: string[];
	value?: string;
	onChange?: (value: string) => void;
	className?: string;
	placeholder?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
	label,
	options,
	value,
	onChange,
	className = "",
	placeholder,
}) => {
	return (
		<div className={`flex flex-col min-w-40 flex-1 ${className}`}>
			<Label className="pb-2">{label}</Label>
			<Select value={value || ""} onValueChange={onChange}>
				<SelectTrigger className="w-full">
					<SelectValue
						placeholder={placeholder || `Select ${label.toLowerCase()}`}
					/>
				</SelectTrigger>
				<SelectContent>
					{options.map((option, index) => (
						<SelectItem key={index} value={option}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default FilterDropdown;
