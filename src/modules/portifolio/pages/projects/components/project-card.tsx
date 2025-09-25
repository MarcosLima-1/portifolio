import { Image } from "@/components/misc/Image";
import type { Project } from "@/types/project";
import { cn } from "@/utils/cn";

interface ProjectCardProps extends React.ComponentProps<"div"> {
	project: Project;
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
	return (
		<div
			className={cn(
				"group/card motion-preset-blink-fade motion-scale-out-102 max-w-[350px] cursor-pointer space-y-4 rounded-md hover:bg-accent/30",
				className,
			)}
			{...props}
		>
			<div className="relative flex aspect-video w-full items-center overflow-hidden rounded-md">
				<Image alt={project.title} height={100} width={100} src={project.images[0]} className="w-full object-cover" />
				<div className="absolute z-10 hidden size-full items-center justify-center rounded-md bg-black/30 font-bold group-hover/card:flex">
					Ver Mais
				</div>
			</div>
			<div className="flex flex-col gap-4 p-2">
				<h3 className="font-bold text-primary max-md:text-sm">{project.title}</h3>
				<p className="line-clamp-3 w-full overflow-ellipsis whitespace-pre-line break-words text-muted-foreground text-xs">
					{project.description}
				</p>
				<div className="flex flex-wrap gap-1 text-muted-foreground text-xs">
					{project.platforms.map((plataform) => {
						return (
							<div key={plataform} className="rounded-full bg-accent p-1">
								#{plataform}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
