import { createFileRoute } from "@tanstack/react-router";
import { AwardIcon, BriefcaseIcon, Calendar1Icon, GraduationCapIcon, type LucideIcon } from "lucide-react";
import { dayjs } from "@/lib/dayjs";
import { TitlePage } from "@/modules/portifolio/components/title-page";
import { timelineEvents } from "@/modules/portifolio/pages/time-line/constants/timeline";
import type { EventType } from "@/types/timeline-event";

export const Route = createFileRoute("/_portifolio/time-line/")({
	component: RouteComponent,
});

const getEventTypeColor = (type: EventType) => {
	switch (type) {
		case "achievement":
			return "bg-yellow-500 border-yellow-600";
		case "education":
			return "bg-blue-500 border-blue-600";
		case "workExperience":
			return "bg-green-500 border-green-600";
		default:
			return "bg-gray-500 border-gray-600";
	}
};

const getEventTypeBadgeColor = (type: EventType) => {
	switch (type) {
		case "achievement":
			return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
		case "education":
			return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
		case "workExperience":
			return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
		default:
			return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
	}
};

const getEventTypeLabel = (type: EventType) => {
	switch (type) {
		case "achievement":
			return "Conquista";
		case "education":
			return "Educação";
		case "workExperience":
			return "Experiência";
		default:
			return "Evento";
	}
};

const getEventTypeIcon = (type: EventType): LucideIcon => {
	switch (type) {
		case "achievement":
			return AwardIcon;
		case "education":
			return GraduationCapIcon;
		case "workExperience":
			return BriefcaseIcon;
		default:
			return Calendar1Icon;
	}
};

function RouteComponent() {
	const sortedEvents = [...timelineEvents].sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());

	return (
		<div className="space-y-16">
			<TitlePage title="Linha do tempo" />

			<div className="relative">
				<div className="max-lg:-translate-x-1/2 absolute top-0 bottom-0 left-8 w-0.5 bg-border max-lg:left-1/2" />

				<div className="space-y-8">
					{sortedEvents.map(({ date, description, title, type, id }) => {
						const eventDate = dayjs(date);
						const isRecent = dayjs().diff(eventDate, "months") < 6;
						const Icon = getEventTypeIcon(type);

						return (
							<div key={id} className="relative flex items-center gap-6 max-lg:flex-col-reverse">
								<div
									className={`relative z-10 flex size-16 items-center justify-center rounded-full border-4 ${getEventTypeColor(type)} shadow-lg`}
								>
									<Icon className="size-6 text-white" />
								</div>

								<div
									className={`w-full flex-1 rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md ${isRecent ? "ring-2 ring-primary/20" : ""}`}
								>
									<div className="mb-3 flex items-start justify-between gap-4">
										<div className="flex-1">
											<h3 className="mb-2 font-semibold text-card-foreground md:text-xl">{title}</h3>
											<div className="flex items-center gap-3 text-muted-foreground text-sm">
												<span className="font-medium">{eventDate.format("DD [de] MMMM [de] YYYY")}</span>
												<span className="text-xs">•</span>
												<span>{eventDate.fromNow()}</span>
												{isRecent && (
													<>
														<span className="text-xs">•</span>
														<span className="font-medium text-primary">Recente</span>
													</>
												)}
											</div>
										</div>
										<span className={`rounded-full px-3 py-1 font-medium text-xs ${getEventTypeBadgeColor(type)}`}>
											{getEventTypeLabel(type)}
										</span>
									</div>

									<p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
								</div>
							</div>
						);
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
