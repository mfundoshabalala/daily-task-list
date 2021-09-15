interface DailyQuote {
	success: Success;
	contents: Contents;
	baseurl: string;
	copyright: Copyright;
}

interface Contents {
	quotes: Quote[];
}

interface Quote {
	quote: string;
	length: string;
	author: string;
	tags: string[];
	category: string;
	language: string;
	date: Date;
	permalink: string;
	id: string;
	background: string;
	title: string;
}

interface Copyright {
	year: number;
	url: string;
}

interface Success {
	total: number;
}
