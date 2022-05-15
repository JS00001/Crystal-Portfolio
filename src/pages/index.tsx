import { Background, Scroll } from '@/components/Background';
import Button from '@/components/Button';
import Team from '@/components/Team';
import Faq from '@/components/Faq';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Project from '@/components/Project';
import Stat from '@/components/Stat';
import Content from '@/content';

import Link from 'next/link';
import Head from 'next/head';

const Index: React.FC = () => {
	return (
		<>
			<Head>
				<title>Crystal Development</title>
			</Head>

			<nav className='relative z-10'>
				<Navbar />
			</nav>

			<figure>
				<Background />
				<Scroll />
			</figure>

			<main className='relative z-10'>
				{/* Landing Hero */}
				<Section className='pb-72'>
					<h1 className='text-white font-extrabold text-center text-6xl md:text-7xl lg:text-9xl lg:text-left'>
						Crystal
					</h1>
					<h1 className='py-4 text-center font-extrabold text-outlined text-5xl sm:text-6xl md:text-7xl lg:ml-16 lg:text-9xl lg:text-left'>
						Development
					</h1>
					<div className='flex flex-col items-center lg:block'>
						<h2 className='text-white uppercase text-xl mt-14 mb-10'>We create software</h2>
						<Link href='/#projects'>
							<Button>View Projects</Button>
						</Link>
					</div>
				</Section>

				{/* Stats */}
				<Section id='#stats'>
					<h1 className='text-white text-4xl font-bold'>Stats</h1>
					<div className='grid gap-20 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
						{Content.stats.map((stat, index) => (
							<Stat key={index} {...stat} />
						))}
					</div>
				</Section>

				{/* Team */}
				<Section id='team'>
					<h1 className='text-white text-4xl font-bold'>Team</h1>
					<div className='grid gap-4 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
						{Content.team.map((member, index) => (
							<Team key={index} {...member} />
						))}
					</div>
				</Section>

				{/* Projects */}
				<Section id='projects'>
					<h1 className='text-white text-4xl font-bold'>Projects</h1>
					<div className='grid gap-6 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
						{Content.projects.map((project, index) => (
							<Project key={index} {...project} />
						))}
					</div>
				</Section>

				{/* FAQ */}
				<Section className='bg-main' id='faqs'>
					<h1 className='text-white text-4xl font-bold mb-10'>FAQ</h1>
					{Content.faqs.map((faq, index) => (
						<Faq key={index} {...faq} />
					))}
				</Section>
			</main>
		</>
	);
};

export default Index;
