import {CollectorModule, Context, DefaultWriter, Trail} from "search-collector";
import {queryResolver, sessionResolver} from "./my-resolver";


const trail = new Trail(queryResolver, sessionResolver);
const context = new Context(window, document);

const writer = new DefaultWriter({
	channel: "my-channel",
	endpoint: "http://localhost:8080",
	debug: true,
	sqs: true,
	trail,
	context,
	resolver: {
		queryResolver,
		sessionResolver
	}
});

const collector = new CollectorModule({
	writer,
	context
});

// Checkout out the demo at https://github.com/searchhub/search-collector/tree/master/demo and https://www.searchhub.io/search-collector/demo/ for collector implementation details

collector.start();
