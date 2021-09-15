import useSWR from 'swr';
import fetcher from 'lib/fetcher';

const useFetchData = (): { data: DailyQuote | undefined; error: undefined } => {
	const { data, error } = useSWR<DailyQuote>(
		'https://quotes.rest/qod.json?category=inspire',
		fetcher
	);

	return { data, error };
};

export default useFetchData;
