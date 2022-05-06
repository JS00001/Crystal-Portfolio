import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Scroll: React.FC = () => {
	return (
		<div className='w-full flex justify-center'>
			<span className='p-3 rounded-full bg-primary absolute bottom-10'>
				<FiChevronDown color='#fff' size={24} />
			</span>
		</div>
	);
};

export default Scroll;
