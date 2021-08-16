const Button: React.FC = (props) => {
	const { children } = props;
	return (
		<div
			data-testid="button"
			className="px-6 py-2 text-white bg-gray-600 rounded-none max-w-max whitespace-nowrap"
		>
			{children}
		</div>
	);
};

export default Button;
