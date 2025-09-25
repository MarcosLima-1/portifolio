import type { Categories } from "@/modules/portifolio/pages/about/constants/categories";

interface skills {
	icon: string;
	name: string;
	category: Categories[];
}

export const skills: skills[] = [
	{
		icon: "typescript_icon",
		name: "TypeScript",
		category: ["frontend", "backend"],
	},
	{
		icon: "react_icon",
		name: "React",
		category: ["frontend"],
	},
	{
		icon: "tanstack_icon",
		name: "TanStack Libs",
		category: ["frontend"],
	},
	{
		icon: "nextjs_icon",
		name: "Nextjs",
		category: ["frontend"],
	},
	{
		icon: "elysia_icon",
		name: "Elysia",
		category: ["backend"],
	},
	{
		icon: "bun_icon",
		name: "Bun",
		category: ["backend"],
	},
	{
		icon: "node_icon",
		name: "Node.js",
		category: ["backend"],
	},
	{
		icon: "postgres_icon",
		name: "PostgreSQL",
		category: ["backend"],
	},
	{
		icon: "redis_icon",
		name: "Redis",
		category: ["backend"],
	},
	{
		icon: "docker_icon",
		name: "Docker",
		category: ["devops"],
	},
	{
		icon: "kubernetes_icon",
		name: "Kubernetes",
		category: ["devops"],
	},
	{
		icon: "nginx_icon",
		name: "Nginx",
		category: ["devops"],
	},
	{
		icon: "jenkins_icon",
		name: "Jenkins",
		category: ["devops"],
	},
	{
		icon: "github_actions_icon",
		name: "GitHub Actions",
		category: ["devops"],
	},
	{
		icon: "grafana_icon",
		name: "Grafana",
		category: ["devops"],
	},
	{
		icon: "prometheus_icon",
		name: "Prometheus",
		category: ["devops"],
	},
	{
		icon: "loki_icon",
		name: "Loki",
		category: ["devops"],
	},
	{
		icon: "vitest_icon",
		name: "Vitest",
		category: ["frontend", "backend"],
	},
	{
		icon: "zustand_icon",
		name: "Zustand",
		category: ["frontend"],
	},
	{
		icon: "tailwind_icon",
		name: "Tailwind CSS",
		category: ["frontend"],
	},
];
