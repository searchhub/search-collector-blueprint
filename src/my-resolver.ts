import {cookieSessionResolver, Query} from "search-collector";

export const queryResolver = () => {
	const queryParams = new URLSearchParams(window.location.search);

	const query = new Query();
	query.setSearch(queryParams.get("searchTerm"));

	return query;
}

export const sessionResolver = () => {
	return cookieSessionResolver();
}