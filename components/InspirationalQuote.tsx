import useFetchData from 'hooks/useFetchData';

const InspirationalQuote: React.FC = () => {
	const { data, error } = useFetchData();

	const quote = data?.contents.quotes[0].quote;
	const author = data?.contents.quotes[0].author;

	console.log(error);

	return (
		<>
			{error && <div>Error!</div>}
			{!error && (
				<q className="text-sm italic text-center text-gray-600 font-product-sans drop-shadow">
					{quote} - {author}
				</q>
			)}
		</>
	);
};

export default InspirationalQuote;
