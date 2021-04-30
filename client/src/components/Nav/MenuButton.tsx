import React from "react";
import Menu from "../icons/Menu";

interface Props {
	className: string;
	onClick: () => void;
}

export default function MenuButton({ className, onClick }: Props) {
	return <div className={`absolute top-2 left-2 z-20 ${className}`} children={<Menu />} onClick={onClick} />;
}
