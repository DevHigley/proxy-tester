import React from "react";
import MobileNav from "./MobileNav";
import BrowserNav from "./BrowserNav";
import { MobileView, BrowserView } from "react-device-detect";

interface Props {
	routes: { path: string; title: string }[];
}

export default function Nav({ routes }: Props) {
	return (
		<>
			<MobileView children={<MobileNav routes={routes} />} />
			<BrowserView children={<BrowserNav routes={routes} />} />
		</>
	);
}

// return isMobile ? <MobileNav routes={routes} /> : <BrowserNav routes={routes} />;

/*
return (
	<>
		<MobileView children={<MobileNav routes={routes} />} />
		<BrowserView children={<BrowserNav routes={routes} />} />
	</>
);
*/
