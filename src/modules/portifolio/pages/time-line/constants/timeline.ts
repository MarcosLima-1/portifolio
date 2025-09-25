import type { TimelineEvent } from "@/types/timeline-event";

export const timelineEvents: TimelineEvent[] = [
	{
		id: "1",
		title: "Medalha de Bronze - OBMEP",
		description: "Conquista de medalha de bronze na Olimpíada Brasileira de Matemática das Escolas Públicas.",
		date: "2019-08-01",
		type: "achievement",
	},
	{
		id: "2",
		title: "Início da Graduação em Engenharia de Software",
		description: "Início do curso de Engenharia de Software em...",
		date: "2020-02-15",
		type: "education",
	},
	{
		id: "3",
		title: "Sócio e Desenvolvedor no ComedyHub",
		description: "Iniciei como sócio e desenvolvedor, participando ativamente da criação da plataforma desde o início.",
		date: "2023-01-10",
		type: "workExperience",
	},
	{
		id: "4",
		title: "Lançamento do Aplicativo ComedyHub",
		description: "Lançamento da versão mobile da rede social de memes, expandindo a plataforma para dispositivos móveis.",
		date: "2024-03-22",
		type: "workExperience",
	},
	{
		id: "5",
		title: "Lançamento da Versão Web do ComedyHub",
		description: "Lançamento da plataforma web, permitindo que os usuários acessem, postem e interajam com memes através do navegador.",
		date: "2024-06-15",
		type: "workExperience",
	},
];
