import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { MobileView, BrowserView } from "react-device-detect";

interface Props {
	className?: string;
}

export default function ThemeToggle({ className }: Props) {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<>
			<BrowserView children={<button className={className} onClick={toggleTheme} children={theme === "light" ? <Moon /> : <Sun />} />} />
			<MobileView children={<button className={className} onClick={toggleTheme} children={theme === "light" ? "Dark theme" : "Light theme"} />} />
		</>
	);
}

/*
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import React, { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { MobileView, BrowserView } from "react-device-detect";

interface Props {
	className: string;
}

export default function ThemeToggle({ className }: Props) {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className={className}>
			<button onClick={toggleTheme}>{theme === "light" ? <Moon /> : <Sun />}</button>
		</div>
	);
}

*/
