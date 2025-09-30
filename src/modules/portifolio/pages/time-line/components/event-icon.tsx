import type { LucideIcon } from "lucide-react";
import type { EventPropsMap } from "@/routes/_portifolio/time-line";
import { cn } from "@/utils/cn";

type EventIconProps = {
	Icon: LucideIcon;
	colorClass: EventPropsMap["achievement"]["colorClasses"]["marker"];
};

export function EventIcon({ Icon, colorClass }: EventIconProps) {
	return (
		<div className={cn("relative z-10 flex size-16 items-center justify-center rounded-full border-4 shadow-lg", colorClass)}>
			<Icon className="size-6 text-white" />
		</div>
	);
}
