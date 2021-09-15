function fetcher<T>(url: string, options: RequestInit = {}): Promise<T> {
	return fetch(url, options)
		.then((res) => res.json())
		.then((data) => data as T);
}

export default fetcher;
