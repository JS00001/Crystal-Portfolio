const sizeStyles = {
	sm: 'bg-secondary px-12 py-3 text-sm offset-shadow-sm text-white uppercase',
	lg: 'bg-secondary px-24 py-6 text-md offset-shadow-md text-white uppercase',
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	size?: keyof typeof sizeStyles;
	children: String;
};

const Button: React.FC<ButtonProps> = ({ size = 'lg', children, ...props }) => {
	const styles = sizeStyles[size];

	return (
		<button className={styles} {...props}>
			{children}
		</button>
	);
};

export default Button;
