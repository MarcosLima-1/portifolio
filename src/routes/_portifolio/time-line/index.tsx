import { createFileRoute } from "@tanstack/react-router";
import { AwardIcon, BriefcaseIcon, GraduationCapIcon, type LucideIcon } from "lucide-react";
import { dayjs } from "@/lib/dayjs";
import { TitlePage } from "@/modules/portifolio/components/title-page";
import { EventCard } from "@/modules/portifolio/pages/time-line/components/event-card";
import { timelineEvents } from "@/modules/portifolio/pages/time-line/constants/timeline";
import type { EventType } from "@/types/timeline-event";

// Mapeamento de propriedades do evento
export type EventPropsMap = {
	[key in EventType]: {
		icon: LucideIcon;
		label: string;
		colorClasses: {
			marker: string;
			badge: string;
		};
	};
};

export const eventPropsMap: EventPropsMap = {
	achievement: {
		icon: AwardIcon,
		label: "Conquista",
		colorClasses: {
			marker: "bg-yellow-500 border-yellow-600",
			badge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
		},
	},
	education: {
		icon: GraduationCapIcon,
		label: "Educação",
		colorClasses: {
			marker: "bg-blue-500 border-blue-600",
			badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
		},
	},
	workExperience: {
		icon: BriefcaseIcon,
		label: "Experiência",
		colorClasses: {
			marker: "bg-green-500 border-green-600",
			badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
		},
	},
};

export const Route = createFileRoute("/_portifolio/time-line/")({
	component: RouteComponent,
});

function RouteComponent() {
	const sortedEvents = [...timelineEvents].sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());

	return (
		<div className="space-y-16">
			<TitlePage title="Linha do tempo" />

			<div className="relative">
				<div className="max-lg:-translate-x-1/2 absolute top-0 bottom-0 left-8 w-0.5 bg-border max-lg:left-1/2" />

				<div className="space-y-8">
					{sortedEvents.map((event) => {
						const { date, type } = event;
						const eventDate = dayjs(date);
						const isRecent = dayjs().diff(eventDate, "months") < 6;

						const props = eventPropsMap[type];

						return <EventCard key={event.id} event={event} propsMap={props} eventDate={eventDate} isRecent={isRecent} />;
					})}
				</div>

				<div className="relative mt-8 flex items-center justify-center">
					<div className="absolute left-8 h-8 w-0.5 bg-gradient-to-b from-border to-transparent max-lg:hidden" />
					<div className="flex items-center gap-2 text-muted-foreground text-sm lg:ml-8">
						<div className="size-2 rounded-full bg-muted-foreground/50" />
						<span>Início da jornada</span>
					</div>
				</div>
			</div>
		</div>
	);
}
