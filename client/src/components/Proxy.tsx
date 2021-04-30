import React from "react";
import Spinner from "./icons/Spinner";

interface Props {
	proxy: ProxyType;
}

export default function Proxy({ proxy }: Props) {
	const renderLatency = () => proxy.latency !== undefined && `${proxy.latency}ms`;
	const renderAnonymity = () => proxy.anonymous !== undefined && (proxy.anonymous ? "Anon." : "Trans.");

	return (
		<div
			className={`flex flex-row p-4 space-x-2 font-semibold text-sm md:text-base container
			bg-lightest dark:bg-darker border border-gray dark:border-dark rounded-lg
			${proxy.ok !== undefined && (proxy.ok ? "text-green" : "text-red")}`}
		>
			<div className="w-1/6" children={proxy.testing ? <Spinner /> : proxy.type} />
			<div className="w-1/2" children={`${proxy.host}:${proxy.port}`} />
			<div className="w-1/6" children={renderLatency()} />
			<div className="w-1/6" children={renderAnonymity()} />
		</div>
	);
}
