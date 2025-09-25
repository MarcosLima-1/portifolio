import { ChevronLeft, ChevronRight, ComputerIcon, ExternalLink, ExternalLinkIcon, GithubIcon, GlobeIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import { Image } from "@/components/misc/Image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DialogSimple } from "@/components/ui/dialog";
import type { Plataform, Project } from "@/types/project";
import { cn } from "@/utils/cn";

interface ProjectDialogProps {
	project: Project;
}

export function ProjectDialog({ project }: ProjectDialogProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
	};

	const getLinkIcon = (type: string) => {
		switch (type) {
			case "github":
				return <GithubIcon className="size-4" />;
			case "demo":
				return <GlobeIcon className="size-4" />;
			default:
				return <ExternalLinkIcon className="size-4" />;
		}
	};

	const getPlataformIcon = (platform: Plataform) => {
		switch (platform) {
			case "desktop":
				return <ComputerIcon className="size-4" />;
			case "web":
				return <GlobeIcon className="size-4" />;
			default:
				return <PhoneIcon className="size-4" />;
		}
	};
	const hasMoreThanOneImage = project.images.length > 1;

	return (
		<DialogSimple className="max-h-[90vh] max-w-6xl overflow-y-auto p-0">
			<div className="flex max-lg:flex-col">
				<div className="relative bg-muted/30 lg:col-span-2">
					<div className="relative flex h-full min-h-[200px] items-center lg:min-h-[600px]">
						<Image
							src={project.images[currentImageIndex] || "/placeholder.svg"}
							alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
							className="size-full object-contain"
							width={800}
							height={600}
						/>

						{hasMoreThanOneImage && (
							<div className="absolute top-0 left-0 z-40 flex size-full items-center">
								<button
									type="button"
									className="flex h-full flex-1 cursor-pointer items-center justify-start bg-gradient-to-r from-black/10 to-transparent"
									onClick={prevImage}
								>
									<ChevronLeft className="size-8 text-white" />
								</button>
								<button
									type="button"
									className="flex h-full flex-1 cursor-pointer items-center justify-end bg-gradient-to-r from-transparent to-black/10"
									onClick={nextImage}
								>
									<ChevronRight className="size-8 text-white" />
								</button>
							</div>
						)}
					</div>

					{hasMoreThanOneImage && (
						<div className="absolute right-4 bottom-4 left-4 z-50">
							<div className="custom-scrollbar flex justify-center gap-2 overflow-x-auto pb-2">
								{project.images.map((image, index) => (
									<button
										key={image}
										type="button"
										onClick={() => setCurrentImageIndex(index)}
										className={cn(
											"aspect-square size-16 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all",
											currentImageIndex === index ? "border-primary" : "border-transparent hover:border-muted-foreground/50",
										)}
									>
										<Image
											src={image || "/placeholder.svg"}
											alt={`Thumbnail ${index + 1}`}
											className="size-full object-cover"
											width={64}
											height={48}
										/>
									</button>
								))}
							</div>
						</div>
					)}
				</div>

				<div className="space-y-8 p-8">
					<div className="space-y-4">
						<h1 className="font-bold text-3xl text-foreground leading-tight">{project.title}</h1>
						<p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
					</div>

					<div className="space-y-3">
						<h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Tecnologias</h3>
						<div className="flex flex-wrap gap-2">
							{project.techs.map((tech) => (
								<Badge key={tech} className="font-medium text-xs">
									{tech}
								</Badge>
							))}
						</div>
					</div>

					<div className="space-y-3">
						<h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Plataformas</h3>
						<div className="flex flex-wrap gap-2">
							{project.platforms.map((platform) => {
								const Icon = getPlataformIcon(platform);

								return (
									<Badge key={platform} className="font-medium text-xs capitalize">
										{Icon}
										{platform}
									</Badge>
								);
							})}
						</div>
					</div>

					<div className="space-y-3">
						<h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Categorias</h3>
						<div className="flex flex-wrap gap-2">
							{project.categories.map((category) => (
								<Badge key={category} className="font-medium text-xs capitalize">
									{category}
								</Badge>
							))}
						</div>
					</div>

					{project.links.length > 0 && (
						<div className="space-y-4">
							<h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">Links</h3>
							<div className="space-y-2">
								{project.links.map(({ href, name, type }) => (
									<Button key={href} variant="outline" className="h-12 w-full justify-start gap-3 bg-transparent" asChild>
										<a href={href} target="_blank" rel="noreferrer">
											{getLinkIcon(type)}
											<span className="font-medium">{name}</span>
											<ExternalLink className="ml-auto h-3 w-3 opacity-50" />
										</a>
									</Button>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</DialogSimple>
	);
}
