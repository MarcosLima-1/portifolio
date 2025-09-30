import { createFileRoute } from "@tanstack/react-router";
import { ArrowBigRightIcon, MailIcon, MessageCircleIcon, UserIcon } from "lucide-react";
import { RoundedIcon } from "@/components/misc/rounded-icon";
import { info } from "@/core/info";
import { TitlePage } from "@/modules/portifolio/components/title-page";

export const Route = createFileRoute("/_portifolio/links/")({
	component: RouteComponent,
});

const quickLinks = [
	{
		icon: UserIcon,
		label: "Portfólio",
		description: "Veja meus trabalhos",
		href: "/",
	},
	{
		icon: MailIcon,
		value: info.mail,
		label: "E-mail",
		description: "Envie uma mensagem",
		href: `mailto:${info.mail}`,
	},
	{
		icon: MessageCircleIcon,
		label: "WhatsApp",
		description: "Vamos conversar",
		value: info.phone,
		href: `https://api.whatsapp.com/send?phone=${info.phone}`,
	},
];

function RouteComponent() {
	return (
		<main className="flex min-h-[500px] items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
			<div className="w-full max-w-2xl space-y-16">
				<TitlePage title="Links Rápidos" />
				<div className="flex flex-col gap-4 sm:gap-5">
					{quickLinks.map(({ href, icon: Icon, label, description }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noreferrer"
							className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:scale-102 hover:border-primary hover:shadow-primary/10 hover:shadow-xl sm:p-8"
						>
							<div className="flex items-center gap-4 sm:gap-6">
								<RoundedIcon className="rounded-md transition-all group-hover:scale-105 group-hover:bg-primary">
									<Icon className="size-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground sm:h-8 sm:w-8" />
								</RoundedIcon>

								<div className="w-full">
									<h2 className="mb-1 font-semibold text-foreground text-xl transition-colors duration-300 group-hover:text-primary sm:text-2xl">
										{label}
									</h2>
									<p className="text-muted-foreground text-sm sm:text-base">{description}</p>
								</div>
								<div className="-translate-x-4 flex-shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
									<ArrowBigRightIcon className="text-primary" />
								</div>
							</div>

							<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						</a>
					))}
				</div>

				<div className="mt-12 text-center sm:mt-16">
					<p className="text-muted-foreground text-sm">Disponível para novos projetos e oportunidades</p>
				</div>
			</div>
		</main>
	);
}
