import React from "react";

interface Props {
	children: JSX.Element;
}

export default function Container({ children }: Props) {
	return (
		<div className="flex flex-col flex-1 items-center">
			<div className="flex flex-col w-5/6 md:w-1/2 lg:w-2/5 2xl:w-1/3 h-full mt-16 mb-8 md:mb-16" children={children} />
		</div>
	);
}
