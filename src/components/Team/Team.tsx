export type TeamProps = {
	name: string;
	logo: string;
};

const Team: React.FC<TeamProps> = ({ name, logo }) => {
	return (
		<div className='bg-secondary offset-shadow-sm p-5 flex flex-col items-center justify-center h-64'>
			<img src={logo} height={128} width={128} />
			<p className='text-white text-xl mt-5'>{name}</p>
		</div>
	);
};

export default Team;
