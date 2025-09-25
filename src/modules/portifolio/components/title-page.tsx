interface TitlePageProps {
	title: string;
}

export function TitlePage({ title }: TitlePageProps) {
	return (
		<div className="w-fit">
			<h1 className="mb-4 font-bold text-4xl">{title}</h1>
			<div className="h-1 w-[70%] rounded-md bg-gradient-to-tr from-primary to-secondary" />
		</div>
	);
}
