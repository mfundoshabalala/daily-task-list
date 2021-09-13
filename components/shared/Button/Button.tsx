import classNames from 'classnames';

interface ButtonProps {
	title?: string;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	icon?: string;
	optionalIcon?: string;
	optionalCriteria?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { title, onClick, className, icon, optionalIcon, optionalCriteria } = props;
	return (
		<button
			type="button"
			onClick={onClick}
			className={classNames(
				className,
				'px-2 py-1 border rounded drop-shadow-md active:drop-shadow-sm'
			)}
		>
			{title}
			<svg className="w-6 h-6 transition-all duration-300 hover:scale-105 currentColor">
				{!optionalCriteria && <use xlinkHref={`/sprite.svg#${icon}`} />}
				{optionalCriteria && <use xlinkHref={`/sprite.svg#${optionalIcon}`} />}
			</svg>
		</button>
	);
};

export default Button;
