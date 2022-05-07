import * as Fa from 'react-icons/fa';
import type { IconType } from 'react-icons/lib/cjs';

interface IContent {
	stats: {
		icon: IconType;
		title: string;
		value: string;
	}[];
	faqs: {
		question: string;
		answer: string;
	}[];
	team: {
		name: string;
		logo: string;
	}[];
	projects: {
		title: string;
		description: string;
		image: string;
	}[];
	navigation: {
		title: string;
		url: string;
	}[];
}

const Content: IContent = {
	// Icon MUST be a valid FontAwesome icon name
	stats: [
		{
			icon: Fa['FaUser'],
			title: 'Users',
			value: '50,000+',
		},
		{
			icon: Fa['FaMoneyBillWave'],
			title: 'Transactions',
			value: '10,000+',
		},
		{
			icon: Fa['FaTag'],
			title: 'Customers',
			value: '7,000+',
		},
	],
	faqs: [
		{
			question: 'What is the purpose of this website?',
			answer: 'lorum ipsum',
		},
		{
			question: 'How do I get started?',
			answer: 'lorum ipsum',
		},
		{
			question: 'How do I get started?',
			answer: 'lorum ipsum',
		},
		{
			question: 'How do I get started?',
			answer: 'lorum ipsum',
		},
	],
	team: [
		{
			name: 'Team 1',
			logo: '/logo-white.png',
		},
		{
			name: 'Team 2',
			logo: '/logo-white.png',
		},
		{
			name: 'Team 3',
			logo: '/logo-white.png',
		},
		{
			name: 'Team 4',
			logo: '/logo-white.png',
		},
	],
	projects: [
		{
			title: 'Project 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nulla eu nisi lobortis elementum. Nulla facilisi. Nulla facilisi.',
			image: '/client.png',
		},
		{
			title: 'Project 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nulla eu nisi lobortis elementum. Nulla facilisi. Nulla facilisi.',
			image: '/client.png',
		},
		{
			title: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nulla eu nisi lobortis elementum. Nulla facilisi. Nulla facilisi.',
			image: '/client.png',
		},
	],
	navigation: [
		{
			title: 'Projects',
			url: '/#projects',
		},
		{
			title: 'Team',
			url: '/#team',
		},
		{
			title: 'FAQs',
			url: '/#faqs',
		},
	],
};

export default Content;
