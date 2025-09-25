import { createFileRoute } from "@tanstack/react-router";
import { RoundedIcon } from "@/components/misc/rounded-icon";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { TitlePage } from "@/modules/portifolio/components/title-page";
import { SkillsSection } from "@/modules/portifolio/pages/about/components/skills-section";
import { areas } from "@/modules/portifolio/pages/about/constants/categories";
import { resume } from "@/modules/portifolio/pages/about/constants/resume";

export const Route = createFileRoute("/_portifolio/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-16">
			<TitlePage title="Sobre Mim" />
			<p className="w-full whitespace-pre-line break-words font-medium text-lg text-muted-foreground">{resume}</p>
			<section className="space-y-6">
				<h2 className="font-bold text-2xl max-lg:text-center">Áreas de Atuação</h2>
				<div className="flex flex-wrap gap-4 max-lg:justify-center">
					{areas.map(({ description, icon: Icon, name }) => {
						return (
							<Card className="max-w-sm" key={name}>
								<CardHeader className="flex-row items-center gap-4">
									<RoundedIcon>
										<Icon className="text-primary" />
									</RoundedIcon>
									<h3 className="font-bold">{name}</h3>
								</CardHeader>
								<CardContent>
									<CardDescription>{description}</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</section>
			<SkillsSection />
		</div>
	);
}
