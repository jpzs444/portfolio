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
		href: './static/resume.pdf',
		rel: 'noopener noreferrer',
		target: '_blank',
		label: 'Resume'
	}
];

export const info = [
	{
		id: 'info-1',
		title: 'Education',
		content: []
	},
	{
		id: 'info-2',
		title: 'Experience',
		content: []
	},
	{
		id: 'info-3',
		title: 'Skills',
		content: [
			{
				label: "Hard Skills",
				skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Sass", "Git", "GitHub", "Figma", "Canva", "Microsoft Excel", "Google Sheets", "Microsoft Word", "Google Docs", "Google Forms"]
			},
			{
				label: "Soft Skills",
				skills: ["Communication", "Work Ethic", "Attention to Detail", "Teamwork", "Organization", "Problem Solving", "Critical Thinking", "Adaptability", "Decision Making", "Time Management"]
			}
		]
	},
	{
		id: 'info-4',
		title: 'Hobbies',
		content: [
			"Reading", "Weight training", "Watching volleyball", "Playing guitar", "Drawing", "Sudoku", "Playing video games", "Photography", "Watching video game livestreams"
		],
	},
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