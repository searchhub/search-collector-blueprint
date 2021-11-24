import {Collector, DefaultWriter, InstantSearchQueryCollector} from "search-collector";
import {queryResolver, sessionResolver} from "./my-resolver";

const writer = new DefaultWriter({
	channel: "my-channel",
	debug: true,
	endpoint: "http://localhost:8080",
	resolver: {
		queryResolver,
		sessionResolver
	}
});

const collector = new Collector({
	writer
});

collector.add(new InstantSearchQueryCollector("#searchbox"))

collector.start();