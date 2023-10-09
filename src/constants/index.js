import { facebook, github2, linkedin, x } from "../assets/icons";

export const navLinks = [
	{
		href: '#home',
		label: 'Home'
	},
	{
		href: '#about',
		label: 'About'
	},
	{
		href: '#projects',
		label: 'Projects'
	},
	{
		href: './resume.pdf',
		rel: 'noopener noreferrer',
		target: '_blank',
		label: 'Resume'
	}
];

export const info = [
	{
		id: 'info-1',
		title: 'Background',
		content: [
			"Background Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		],
	},
	{
		id: 'info-2',
		title: 'Education',
		content: [
			"Education Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		]
	},
	{
		id: 'info-3',
		title: 'Experience',
		content: [
			"Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		]
	},
	{
		id: 'info-4',
		title: 'Skills',
		content: [
			"Skills Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		]
	}
];

export const projects = [
	{
		id: 'project-1',
		title: 'Modern UI/UX Business App',
		tags: ['React', 'Tailwind CSS'],
		content: 'A modern business landing page from a 10-hour course featuring reusable components, call-to-action buttons, testimonials, and others.',
		websiteLink: '#',
		githubLink: '#',
	},
	{
		id: 'project-2',
		title: 'Dark Theme Landing Page',
		tags: ['HTML', 'CSS'],
		content: 'A dark-themed landing page challenge by Front-end Mentor built through a mobile-first workflow—this project served as a practice for applying CSS Grid and Flexbox.',
		websiteLink: '#',
		githubLink: '#',
	}
];

export const socials = [
	{
		id: 'social-1',
		title: 'Facebook',
		icon: facebook,
		link: 'https://www.facebook.com/jp.indiongco',
	},
	{
		id: 'social-2',
		title: 'X',
		icon: x,
		link: 'https://twitter.com/jpzs444',
	},
	{
		id: 'social-3',
		title: 'LinkedIn',
		icon: linkedin,
		link: 'https://www.linkedin.com/in/jpindiongco/',
	},
	{
		id: 'social-4',
		title: 'GitHub',
		icon: github2,
		link: 'https://github.com/jpzs444',
	}
];

export const footerLinks = [
	{
		title: 'footerLinks-1',
		links: [
			{
				name: 'Home',
				link: '',
			},
			{
				name: 'About',
				link: ''
			},
			{
				name: 'Projects',
				link: ''
			}
		]
	},
	{
		title: 'footerLinks-2',
		links: [
			{
				name: 'Curriculum Vitae',
				link: '',
			},
			{
				name: 'Contact',
				link: '',
			}
		]
	}
];

export const inputFields = [
	{
		label: 'Name',
		type: 'text',
		id: 'name',
		name: 'name',
		minLength: 2,
		required: true,
	},
	{
		label: 'Email Address',
		type: 'email',
		id: 'email',
		name: 'email',
		required: true,
	},
	{
		label: 'Subject',
		type: 'text',
		id: 'subject',
		name: 'subject',
		required: false,
	}
]