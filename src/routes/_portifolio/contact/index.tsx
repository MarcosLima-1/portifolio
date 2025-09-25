import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { contacts, socialMedias } from "@/core/contacts";
import { TitlePage } from "@/modules/portifolio/components/title-page";
import { ContactForm } from "@/modules/portifolio/pages/contact/components/contact-form";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

export const Route = createFileRoute("/_portifolio/contact/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="space-y-14">
			<TitlePage title="Contatos" />
			<div className="flex w-full flex-row-reverse max-xl:flex-col">
				<Card className="flex-1 border-0">
					<h2 className="font-bold text-2xl">Contatos</h2>
					<div className="space-y-4">
						{contacts.map(({ icon: Icon, label, value }) => {
							return (
								<button
									type="button"
									onClick={() => copyToClipboard({ value: value, message: `${label} Copiado(a)!` })}
									className="flex cursor-pointer items-center gap-2 text-left"
									key={value}
								>
									<div className="rounded-md border p-4">
										<Icon className="text-primary" />
									</div>
									<div>
										<p className="font-bold text-muted-foreground">{label}</p>
										<p className="text-sm">{value}</p>
									</div>
								</button>
							);
						})}
					</div>
					<h2 className="font-bold text-2xl">Redes sociais</h2>
					<div className="flex gap-4">
						{socialMedias.map(({ icon: Icon, label, href }) => {
							return (
								<a href={href} title={label} key={href} target="_blank" rel="noreferrer">
									<Badge className="bg-none capitalize">
										<Icon className="size-6 stroke-primary" /> {label}
									</Badge>
								</a>
							);
						})}
					</div>
				</Card>
				<Card className="flex-2 border-0">
					<h2 className="font-bold text-2xl">Entre em contato</h2>
					<ContactForm />
				</Card>
			</div>
		</div>
	);
}
