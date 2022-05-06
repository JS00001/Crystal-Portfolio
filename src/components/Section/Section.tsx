import React from 'react';

export type SectionProps = {
	id?: string;
	className?: string;
	children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id = '', className, children }) => {
	return (
		<>
			<section className={`mx-auto py-36 px-4 lg:px-10 lg:container xl:px-20 ${className}`} id={id}>
				{children}
			</section>
			<hr className='border-secondary' />
		</>
	);
};

export default Section;
