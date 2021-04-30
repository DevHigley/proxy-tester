import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Repository from "./Repository";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

interface Props {
	routes: { path: string; title: string }[];
}

export default function MobileNav({ routes }: Props) {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const hideMenu = () => setMenuOpen(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);
	const renderRoutes = () =>
		routes.map((route, index) => (
			<NavLink
				exact
				key={index}
				to={route.path}
				children={route.title}
				className="flex p-4 font-semibold"
				activeClassName="bg-dark dark:bg-lighter text-lightest dark:text-dark"
				onClick={hideMenu}
			/>
		));

	return (
		<div>
			<MenuButton className={`transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`} onClick={toggleMenu} />
			<div
				className={`flex flex-col justify-between absolute inset-y-0 w-1/2 
				bg-lighter dark:bg-dark dark:text-lighter shadow-2xl z-10 pt-14 
				transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div>{renderRoutes()}</div>
				<div>
					<Repository className="flex p-4 font-semibold" />
					<ThemeToggle className="flex p-4 font-semibold w-full" />
				</div>
			</div>
			<button
				onClick={hideMenu}
				className={`absolute inset-0 w-full h-full bg-black 
				transform transition-opacity duration-300 ${menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
			/>
		</div>
	);
}

/* {menuOpen && <button onClick={hideMenu} className="absolute inset-0 w-full h-full bg-black opacity-50 transform transition-opacity duration-300" />} */
