import { Image } from "@/components/misc/Image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { contacts, socialMedias } from "@/core/contacts";
import { areas } from "@/modules/portifolio/pages/about/constants/categories";
import { cn } from "@/utils/cn";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

interface InfoCardProps {
	className?: string;
}

export function InfoCard({ className }: InfoCardProps) {
	return (
		<Card
			className={cn(
				"sticky top-0 h-full w-[350px] shrink-0 items-center",
				"max-lg:static max-lg:mt-20 max-lg:h-[300px] max-lg:w-full",
				className,
			)}
		>
			<CardHeader className="relative w-full items-center gap-4">
				<div className="size-32 overflow-hidden rounded-lg border bg-accent p-2">
					<Image src="/eu.webp" alt="markin" height={100} width={100} className="size-full rounded-md object-cover" />
				</div>
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-2xl">Marcos</h1>
					<p className="text-muted-foreground text-xs">vulgos: Markin, Marvos</p>
				</div>
				<h2 className="flex flex-wrap items-center gap-1 p-2">
					{areas.map(({ name }) => {
						return (
							<div key={name} className="rounded-md border bg-accent p-2 font-bold text-xs">
								{name}
							</div>
						);
					})}
				</h2>
			</CardHeader>
			<CardContent className="flex flex-col gap-4 max-lg:hidden">
				<div className="h-[2px] w-[90%] bg-accent" />
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
			</CardContent>
			<CardFooter className="relative mt-auto w-full max-lg:hidden">
				<div className="mx-auto flex items-center gap-4 rounded-full border px-4 py-2">
					{socialMedias.map(({ icon: Icon, label, href }) => {
						return (
							<a href={href} title={label} key={href} target="_blank" rel="noreferrer">
								<Icon className="size-6 stroke-primary" />
							</a>
						);
					})}
				</div>
			</CardFooter>
		</Card>
	);
}
