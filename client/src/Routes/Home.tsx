import React from "react";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

export default function Home() {
	const history = useHistory();

	const gotoImport = () => history.push("/import");

	return (
		<div className="flex flex-col items-center mt-20 space-y-16">
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-extrabold">Proxy Tester</h1>
				<p className="mt-2">
					Tests a list of up to 100 http(s) proxies in <b>IP:PORT</b> format with a 10 second connection timeout.
				</p>
			</div>
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-extrabold">Features</h1>
				<ul className="mt-2 list-inside list-disc">
					<li>detects proxy protocol</li>
					<li>checks proxy latency</li>
					<li>checks proxy anonymity</li>
					<li>tests all proxies simultaneously</li>
					<li>exports only working proxies</li>
				</ul>
			</div>
			<Button text="Get Started" primary={true} onClick={gotoImport} />
		</div>
	);
}
