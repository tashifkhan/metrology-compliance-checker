import * as React from "react";

import { cn } from "@/lib/utils";

// Use a type alias that extends React's input attributes to avoid the
// `@typescript-eslint/no-empty-object-type` rule which flags empty interfaces.
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-14 w-full rounded-lg border border-[#e7d0d1] bg-[#fcf8f8] px-4 py-2 text-base text-[#1b0e0e] placeholder:text-[#994d51] focus:outline-none focus:ring-0 focus:border-[#e7d0d1] disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
