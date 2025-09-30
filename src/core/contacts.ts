import { GithubIcon, LinkedinIcon, MailIcon, MapPin, PhoneIcon } from "lucide-react";
import { info } from "@/core/info";

export const contacts = [
	{
		icon: MailIcon,
		label: "Email",
		value: info.mail,
	},
	{
		icon: MapPin,
		label: "Localização",
		value: "Pernambuco - Brasil",
	},
	{
		icon: PhoneIcon,
		label: "Telefone",
		value: info.phone,
	},
];

export const socialMedias = [
	{
		icon: GithubIcon,
		label: "github",
		href: "https://github.com/MarcosLima-1",
	},
	{
		icon: LinkedinIcon,
		label: "linkedin",
		href: "https://www.linkedin.com/in/marcos-lima-56072734b",
	},
];
