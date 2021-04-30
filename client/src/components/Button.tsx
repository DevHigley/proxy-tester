import React from "react";

interface Props {
	text: string;
	primary: boolean;
	onClick?: () => void;
}

export default function Button({ text, primary, onClick }: Props) {
	return (
		<button
			className={`${primary ? "text-white dark:text-dark bg-dark dark:bg-lighter" : "text-dark dark:text-lightest border border-gray"}
			px-8 md:px-16 py-2 rounded-lg shadow-md font-semibold `}
			onClick={onClick}
			children={text}
		/>
	);
}
