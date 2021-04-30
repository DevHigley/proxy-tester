import React from "react";
import Github from "../icons/Github";
import { MobileView, BrowserView } from "react-device-detect";

interface Props {
	className?: string;
}

export default function Repository({ className }: Props) {
	return (
		<>
			<BrowserView
				children={<a className={className} href="https://github.com/DevHigley/proxy-tester" target="_blank" rel="noreferrer" children={<Github />} />}
			/>
			<MobileView
				children={<a className={className} href="https://github.com/DevHigley/proxy-tester" target="_blank" rel="noreferrer" children={"Repo"} />}
			/>
		</>
	);
}

/*
import React from "react";
import Github from "../icons/Github";
import { MobileView, BrowserView } from "react-device-detect";

interface Props {
	className: string;
}

export default function Repository({ className }: Props) {
	return (
		<div className={className}>
			<a href="https://github.com/DevHigley/proxy-tester" target="_blank" rel="noreferrer" children={<Github />} />
		</div>
	);
}

*/
