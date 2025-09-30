import type { Dayjs } from "dayjs";
import { EventIcon } from "@/modules/portifolio/pages/time-line/components/event-icon";
import type { EventPropsMap } from "@/routes/_portifolio/time-line";
import type { TimelineEvent } from "@/types/timeline-event";
import { cn } from "@/utils/cn";

type EventCardProps = {
	event: TimelineEvent;
	propsMap: EventPropsMap["achievement"];
	eventDate: Dayjs;
	isRecent: boolean;
};

export function EventCard({ event, propsMap, eventDate, isRecent }: EventCardProps) {
	const { title, description } = event;
	const { icon: Icon, label, colorClasses } = propsMap;

	return (
		<div key={event.id} className="relative flex items-center gap-6 max-lg:flex-col-reverse">
			<EventIcon Icon={Icon} colorClass={colorClasses.marker} />

			<div
				className={cn("w-full flex-1 rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md", {
					"ring-2 ring-primary/20": isRecent,
				})}
			>
				<div className="mb-3 flex items-start justify-between gap-4 max-md:flex-col-reverse">
					<div className="flex-1">
						<h3 className="mb-2 w-full font-semibold text-card-foreground md:text-xl">{title}</h3>

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

					<span className={cn("rounded-full px-3 py-1 font-medium text-xs", colorClasses.badge)}>{label}</span>
				</div>

				<p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
			</div>
		</div>
	);
}
