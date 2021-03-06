import parse from 'html-react-parser';
import { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { IoMdRemove } from 'react-icons/io';

export type FaqProps = {
	question: string;
	answer: string;
};

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
	const [expanded, setExpanded] = useState(false);

	const onClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='my-5 text-white border border-secondary p-6'>
			<div className='w-full flex justify-between items-center cursor-pointer' onClick={onClick}>
				<p className='text-xl font-medium'>{question}</p>
				<span className='bg-secondary p-2 rounded-full'>
					{expanded ? <IoMdRemove size={30} /> : <IoIosAdd size={30} />}
				</span>
			</div>

			{expanded && (
				<div>
					<p>{parse(answer)}</p>
				</div>
			)}
		</div>
	);
};

export default Faq;
