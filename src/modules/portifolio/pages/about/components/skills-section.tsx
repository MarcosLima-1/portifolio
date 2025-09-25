import { useState } from "react";
import { Image } from "@/components/misc/Image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type Categories, categories, categoriesInfo } from "@/modules/portifolio/pages/about/constants/categories";
import { skills } from "@/modules/portifolio/pages/about/constants/skills";

export function SkillsSection() {
	const [currentCategory, setCurrentCategory] = useState<Categories>("all");
	const filteredSkills = currentCategory === "all" ? skills : skills.filter((skill) => skill.category.includes(currentCategory));

	return (
		<section className="w-full space-y-8">
			<h2 className="text-center font-bold text-2xl">Minhas Habilidades</h2>

			<div className="space-y-8">
				<div className="flex w-fit max-w-full gap-2 overflow-x-auto rounded-md border p-2">
					{categories.map((category) => {
						const isActive = category === currentCategory;
						const displayName = categoriesInfo[category].displayName;

						return (
							<Button variant={isActive ? "default" : "ghost"} key={category} onClick={() => setCurrentCategory(category)}>
								{displayName}
							</Button>
						);
					})}
				</div>

				<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap">
					{filteredSkills.map(({ icon, name }) => {
						return (
							<Card key={name} className="w-full lg:size-[150px]">
								<CardContent className="flex h-full flex-col items-center justify-center gap-2 text-center">
									<Image alt={name} height={50} width={50} src={`/skills-icons/${icon}.webp`} />
									<h3 className="font-bold text-sm">{name}</h3>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
