import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {}
});

interface ThemeProviderProps {
	children: JSX.Element;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const root = window.document.documentElement;
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		root.classList.add("light");
		localStorage.setItem("theme", "light");
	});

	const toggleTheme = () => {
		const isDark = theme === "dark";
		localStorage.setItem("theme", isDark ? "light" : "dark");
		root.classList.remove(isDark ? "dark" : "light");
		root.classList.add(isDark ? "light" : "dark");
		setTheme(isDark ? "light" : "dark");
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }} children={children} />;
}

export default ThemeContext;
