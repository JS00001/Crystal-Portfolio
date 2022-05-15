import Content from '@/content';
import Button from '../Button';

const Navbar: React.FC = () => {
	return (
		<div className='border-b border-secondary p-6'>
			<div className='container mx-auto'>
				<div className='flex justify-between'>
					<div>
						<img src='/logo.png' />
					</div>
					<div className='flex gap-x-12 text-lg items-center'>
						{Content.navigation.map((item, key) => (
							<NavItem key={key} {...item} />
						))}
						<Button size='sm'>Contact</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

const NavItem: React.FC<{ title: string; url: string }> = ({ title, url }) => {
	return (
		<a className='text-white cursor-pointer hover:text-gray-300 hidden md:block' href={url}>
			{title}
		</a>
	);
};

export default Navbar;
