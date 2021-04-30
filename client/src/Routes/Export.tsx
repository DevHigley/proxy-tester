import React from "react";

interface Props {
	proxies: ProxyType[];
}

export default function Export({ proxies }: Props) {
	const renderProxies = () =>
		proxies
			.filter((proxy) => proxy.ok)
			.map((proxy) => `${proxy.host}:${proxy.port}`)
			.join(`,\n`);

	return (
		<div className="flex flex-col h-full">
			<div
				className="bg-lightest dark:bg-darker text-dark dark:text-light border border-gray
				flex-1 p-4 mb-8 text-lg font-semibold resize-none rounded-2xl select-all whitespace-pre"
				children={renderProxies()}
			/>
		</div>
	);
}
