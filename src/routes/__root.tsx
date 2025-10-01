import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { checkEnv } from "@/lib/envs";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
	head: () => ({
		meta: [
			// Padrão (para o navegador)
			{ title: "Marcos Markin | Desenvolvedor Full-stack & Web" },
			{
				name: "description",
				content: "Desenvolvedor de software focado em desenvolvimento web (React, APIs, DevOps). Conheça meu portfólio de projetos.",
			},

			// Open Graph (OG) - Para Facebook, LinkedIn, etc.
			{ name: "og:title", content: "Marcos Markin | Portfólio de Desenvolvimento Web" },
			{
				name: "og:description",
				content:
					"Olá! Meu nome é Marcos, sou um desenvolvedor de software com foco em desenvolvimento web. Minhas habilidades se concentram no Front-end com React, Back-end (APIs robustas) e DevOps. Estou sempre em busca de novos desafios e feliz em contribuir com a sua equipe.",
			},
			{ name: "og:url", content: location.href },
			{ name: "og:image", content: "/opengraph.png" },
			{ name: "og:type", content: "website" },

			// Twitter Cards - Para X (antigo Twitter)
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: "Marcos Markin | Portfólio de Desenvolvimento Web" },
			{
				name: "twitter:description",
				content:
					"Desenvolvedor full-stack (React, APIs, DevOps) com foco em colaboração e trabalho em equipe. Conheça o portfólio do Marcos e seus projetos web.",
			},
			{ name: "twitter:image", content: "/opengraph.png" },
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	checkEnv();
	return (
		<>
			<HeadContent />
			<Outlet />
			<Toaster position="bottom-left" richColors duration={5000} />
		</>
	);
}
