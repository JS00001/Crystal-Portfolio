import type { IconType } from 'react-icons/lib/cjs';

export type StatProps = {
	icon: IconType;
	title: string;
	value: string;
};

const Stat: React.FC<StatProps> = ({ icon, title, value }) => {
	const Icon = icon;

	return (
		<div className='bg-secondary offset-shadow-md p-5'>
			<div className='flex items-center'>
				<span className='rounded-full bg-primary p-3'>
					<Icon color='white' size={22} />
				</span>
				<h2 className='ml-6 text-white font-semibold text-2xl'>{title}</h2>
			</div>
			<h1 className='p-5 text-white font-bold text-4xl'>{value}</h1>
		</div>
	);
};

export default Stat;
