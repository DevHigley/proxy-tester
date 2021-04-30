import Home from "./Routes/Home";
import View from "./Routes/View";
import Nav from "./components/Nav";
import Import from "./Routes/Import";
import Export from "./Routes/Export";
import SocketHandler from "./SocketHandler";
import Container from "./components/Container";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	const [proxies, setProxies] = useState<ProxyType[]>([]);
	const socketHandler = new SocketHandler(proxies, setProxies);

	const importProxies = async () => socketHandler.parse();
	const testProxies = async () => socketHandler.test();
	const clearProxies = () => setProxies([]);

	useEffect(() => {
		console.log("App useEffect");
		socketHandler.attach();
		return () => socketHandler.detach();
	}, [proxies]);

	return (
		<Router>
			<Nav
				routes={[
					{ path: "/", title: "Home" },
					{ path: "/import", title: "Import" },
					{ path: "/view", title: "View" },
					{ path: "/export", title: "Export" }
				]}
			/>
			<Container>
				<Switch>
					<Route path="/Import" children={<Import importProxies={importProxies} />} />
					<Route path="/View" children={<View proxies={proxies} testProxies={testProxies} clearProxies={clearProxies} />} />
					<Route path="/Export" children={<Export proxies={proxies} />} />
					<Route path="/" children={<Home />} />
				</Switch>
			</Container>
		</Router>
	);
}
