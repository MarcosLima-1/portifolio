import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

interface TitlePageProps extends ComponentProps<"div"> {
	title: string;
}

export function TitlePage({ title, className, ...props }: TitlePageProps) {
	return (
		<div className={cn("w-fit", className)} {...props}>
			<h1 className="mb-4 font-bold text-4xl">{title}</h1>
			<div className="h-1 w-[70%] rounded-md bg-gradient-to-tr from-primary to-secondary" />
		</div>
	);
}
