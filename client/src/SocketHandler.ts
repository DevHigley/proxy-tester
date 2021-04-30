const io = require("socket.io-client");
const socket = io(process.env.NODE_ENV === "development" ? "http://localhost:5000" : location.origin);

export default class SocketHandler {
	proxies: ProxyType[];
	setProxies: (parsedProxies: ProxyType[]) => void;

	constructor(proxies: ProxyType[], setProxies: (parsedProxies: ProxyType[]) => void) {
		this.proxies = proxies;
		this.setProxies = setProxies;
	}

	attach() {
		socket.on("parse", this.import);
		socket.on("startedTesting", this.startedTesting);
		socket.on("finishedTesting", this.finishedTesting);
	}

	detach() {
		socket.off("parse", this.import);
		socket.off("startedTesting", this.startedTesting);
		socket.off("finishedTesting", this.finishedTesting);
	}

	parse = async () => socket.emit("parse", await navigator.clipboard.readText());
	import = (parsedProxies: ProxyType[]) => this.setProxies(parsedProxies);
	test = () => socket.emit("test", this.proxies);

	startedTesting = (proxy: ProxyType) => {
		const temp = this.proxies.slice();
		temp.forEach((tempProxy) => tempProxy.host === proxy.host && Object.assign(tempProxy, { testing: true }));
		this.setProxies(temp);
	};

	finishedTesting = (result: TestResult) => {
		const temp = this.proxies.slice();
		temp.forEach((tempProxy) => tempProxy.host === result.host && Object.assign(tempProxy, result, { testing: false }));
		this.setProxies(temp);
	};
}
