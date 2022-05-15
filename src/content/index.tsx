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
		description: string;
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
			question: 'How can I contact you?',
			answer: 'Please contact us on our company email contact@crystaldev.co',
		},
		{
			question: 'How do I get to your Discord server(s)?',
			answer:
				'You can join our <a href="https://discord.gg/AY2EwDTGyQ" style="color:skyblue">Cannon Network</a> & our <a href="https://discord.gg/5BEr7HaS4r" style="color:skyblue">Development Discord</a>',
		},
		{
			question: 'How do I join your Cannon Network?',
			answer:
				'You must purchase a whitelist on our <a href="https://store.crystaldev.co" style="color:skyblue">Store</a> in order to join',
		},
	],
	team: [
		{
			name: 'Fifa12fcb',
			logo: '/patrick.jpg',
			description: 'Ceo of the company.',
		},
		{
			name: 'BestBearr',
			logo: '/bestbear.jpg',
			description: 'Head developer of the company.',
		},
		{
			name: 'CodingGuineaPig',
			logo: '/coding.png',
			description: 'Behind-the-scenes developer of the company.',
		},
		{
			name: 'unworried1',
			logo: '/unworried.png',
			description: 'No clue what he does lol',
		},
	],
	projects: [
		{
			title: 'Factions Bot',
			description:
				'Now-defunct Discord bot containing many features relating to the Minecraft Factions gamemode, including an in-game bot. The bot was the #1 most used bot from March 2019 to September 2021 (when the product was discontinued).',
			image: '/discordbot.png',
		},
		{
			title: 'Cannon Network',
			description:
				'Created & currently managing the Crystal Cannon Network, which is the #1 Cannon Network based on player count and user experience.',
			image: '/network.png',
		},
		{
			title: 'Crystal Factions Client',
			description:
				'Created & Managed Crystal Factions Client, which was the most popular Factions Client. This project was sold as of 30th of March 2022.',
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
			title: 'FAQ',
			url: '/#faqs',
		},
	],
};

export default Content;
