import type { TimelineEvent } from "@/types/timeline-event";

export const timelineEvents: TimelineEvent[] = [
	{
		id: "1",
		title: "Medalha de Bronze - OBMEP",
		description: "Conquista de medalha de bronze na Olimpíada Brasileira de Matemática das Escolas Públicas.",
		date: "2017-08-01",
		type: "achievement",
	},
	{
		id: "2",
		title: "Início da Graduação em Engenharia de Software",
		description:
			"Início do curso de Engenharia de Software na Cruzeiro do Sul. Atualmente no 6º semestre, com previsão de conclusão em 2027.",
		date: "2023-02-17",
		type: "education",
	},
	{
		id: "3",
		title: "Sócio e Desenvolvedor no ComedyHub",
		description: "Iniciei como sócio e desenvolvedor, participando ativamente da criação da plataforma desde o início.",
		date: "2024-10-1",
		type: "workExperience",
	},
	{
		id: "4",
		title: "Lançamento do Aplicativo ComedyHub",
		description: "Lançamento da versão mobile da rede social de memes, expandindo a plataforma para dispositivos móveis.",
		date: "2025-02-1",
		type: "workExperience",
	},
	{
		id: "5",
		title: "Lançamento da Versão Web do ComedyHub",
		description: "Lançamento da plataforma web, permitindo que os usuários acessem, postem e interajam com memes através do navegador.",
		date: "2025-03-1",
		type: "workExperience",
	},
];
