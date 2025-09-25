import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/modules/theme/context/theme-provider";

interface ThemeToggleProps {
	className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
	const { changeTheme, currentTheme } = useThemeContext();

	function toggleTheme() {
		if (currentTheme === "dark") {
			changeTheme("light");
		} else if (currentTheme === "light") {
			changeTheme("dark");
		}
	}

	return (
		<Button variant="ghost" className={className} onClick={toggleTheme}>
			{currentTheme === "dark" ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
}
