import React from "react";
import Repository from "./Repository";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";

interface Props {
	routes: { path: string; title: string }[];
}

export default function BrowserNav({ routes }: Props) {
	const renderRoutes = () =>
		routes.map((route, index) => (
			<NavLink
				exact
				key={index}
				to={route.path}
				children={route.title}
				className=" flex items-center px-8 py-4 font-semibold"
				activeClassName="bg-dark dark:bg-lighter text-lightest dark:text-dark"
			/>
		));

	return (
		<div className="flex flex-row justify-between w-screen">
			<ThemeToggle className="m-4 w-10 h-10 flex" />
			<div className="flex flex-row " children={renderRoutes()} />
			<Repository className="m-4 w-10 h-10 flex" />
		</div>
	);
}
