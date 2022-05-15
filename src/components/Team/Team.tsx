export type TeamProps = {
	name: string;
	logo: string;
	description: string;
};

const Team: React.FC<TeamProps> = ({ name, logo, description }) => {
	return (
		<div className='bg-secondary offset-shadow-sm p-5 flex flex-col items-center justify-center min-h-64'>
			<img
				src={logo}
				alt='Team Picture'
				className=' align-middle rounded-full w-32 h-32 object-cover'
			/>
			<p className='text-white text-xl my-5 font-semibold'>{name}</p>
			<p className='text-white text-center'>{description}</p>
		</div>
	);
};

export default Team;
