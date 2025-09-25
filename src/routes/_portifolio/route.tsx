import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Header } from "@/modules/portifolio/components/header/components/header";
import { InfoCard } from "@/modules/portifolio/components/side-card/components/info-card";

export const Route = createFileRoute("/_portifolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="relative flex h-svh w-svw gap-4 overflow-x-hidden overflow-y-scroll p-2 max-lg:flex-col lg:p-4">
			<Header />
			<InfoCard />
			<Card className="h-fit flex-1 p-4 lg:min-h-full lg:p-8">
				<Outlet />
			</Card>
		</div>
	);
}
