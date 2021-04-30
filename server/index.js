const path = require("path");
const express = require("express");
const Server = require("socket.io").Server;
const createServer = require("http").createServer;
const testProxy = require("@devhigley/test-proxy");
const parseProxy = require("@devhigley/parse-proxy");

const app = express();
const server = createServer(app);
const port = process.env.PORT || 5000;
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "build")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "build", "index.html")));

io.on("connection", (socket) => {
	socket.on("parse", (proxyString) => {
		try {
			socket.emit("parse", parseProxy(proxyString).slice(0, 100));
		} catch (e) {}
	});

	socket.on("test", (proxies) => {
		proxies.forEach(async (proxy) => {
			try {
				socket.emit("startedTesting", proxy);
				const result = await testProxy(proxy, { timeout: 10000 });
				socket.emit("finishedTesting", { ok: true, host: proxy.host, ...result });
			} catch (e) {
				socket.emit("finishedTesting", { ok: false, host: proxy.host });
			}
		});
	});

	socket.on("disconnect", (reason) => {});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
