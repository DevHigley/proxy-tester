import React from "react";
import Proxy from "../components/Proxy";
import Button from "../components/Button";

interface Props {
	proxies: ProxyType[];
	testProxies: () => void;
	clearProxies: () => void;
}

export default function View({ proxies, testProxies, clearProxies }: Props) {
	const renderProxies = () => proxies.map((proxy, index) => <Proxy proxy={proxy} key={index} />);

	if (proxies.length <= 0) return null;

	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-row justify-end space-x-8 md:justify-between mb-8">
				<Button text="Clear" primary={false} onClick={clearProxies} />
				<Button text="Test" primary={true} onClick={testProxies} />
			</div>
			<div className="space-y-2" children={renderProxies()} />
		</div>
	);
}
