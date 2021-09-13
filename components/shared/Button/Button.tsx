interface ButtonProps {
	title: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className="px-2 py-1 text-sm font-light border rounded"
	>
		{title}
	</button>
);

export default Button;
