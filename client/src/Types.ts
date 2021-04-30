interface ProxyType {
	ok?: boolean;
	host: string;
	port: number;
	type?: string;
	latency?: number;
	testing?: boolean;
	anonymous?: boolean;
}

interface TestResult {
	ok: boolean;
	host: string;
	type?: string;
	latency?: number;
	anonymous?: boolean;
}
