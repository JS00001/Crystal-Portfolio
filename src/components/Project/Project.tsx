export type ProjectProps = {
	title: string;
	description: string;
	image: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
	return (
		<div className='bg-secondary offset-shadow-md p-5'>
			<img src={image} />
			<h1 className='py-2 text-xl font-bold text-white'>{title}</h1>
			<h2 className='text-white'>{description}</h2>
		</div>
	);
};

export default Project;
