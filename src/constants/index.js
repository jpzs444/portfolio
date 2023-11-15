import { facebook, github2, linkedin, x } from "../assets/icons";
import { countries, fylo, grid, jpvi, linked, pod, splitter } from "../assets/images";

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
		href: './static/Indiongco_JosePaolo_Resume.pdf',
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
				skills: [
					"HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "SASS", "REST APIs", "Vite", "Git", "GitHub", "Figma", "Canva", "Microsoft Excel", "Google Sheets", "Microsoft Word", "Google Docs", "Google Forms", "Trello", "Jira"
				]
			},
			{
				label: "Soft Skills",
				skills: [
					"Communication Skills", "Work Ethic", "Attention to Detail", "Teamwork", "Problem-Solving Skills", "Analytical Skills", "Critical Thinking", "Flexibility", "Decision Making", "Time Management", "Growth Mindset"]
			}
		]
	},
	{
		id: 'info-4',
		title: 'Interests',
		content: [
			"Music", "Books", "Fitness", "Volleyball", "Sudoku", "Art", "Video Games", "Photography", "Playing Guitar"
		],
	}
];

export const projects = [
	{
		id: 'project-1',
		title: 'Where in the World?',
		tags: ['React', 'Tailwind CSS', 'REST API'],
		content: 'A web application involving the integration of the REST Countries API and a color theme switcher—this project is a challenge by Frontend Mentor and was built mobile-first using React and Tailwind CSS.',
		websiteLink: 'https://react-countries-app-psi.vercel.app/',
		githubLink: 'https://github.com/jpzs444/react-countries-app',
		imgLink: countries,
	},
	{
		id: 'project-2',
		title: 'JPVI',
		tags: ['React', 'Tailwind CSS', 'Figma'],
		content: 'My personal and portfolio website designed on Figma and built with React and Tailwind CSS.',
		websiteLink: 'https://josepaoloindiongco.vercel.app/',
		githubLink: 'https://github.com/jpzs444/portfolio',
		imgLink: jpvi,
	},
	{
		id: 'project-3',
		title: 'Fylo',
		tags: ['HTML', 'CSS', 'JavaScript'],
		content: 'A dark-themed landing page challenge by Frontend Mentor built through a mobile-first workflow—this project served as a practice for applying CSS Grid and Flexbox.',
		websiteLink: 'https://jpzs444.github.io/fylo-dark-theme-landing-page/',
		githubLink: 'https://github.com/jpzs444/fylo-dark-theme-landing-page',
		imgLink: fylo,
	},
	{
		id: 'project-4',
		title: 'Pod',
		tags: ['HTML', 'CSS', 'Sass', 'JavaScript'],
		content: 'An early access landing page with custom form validation using HTML, CSS, Sass, and JavaScript; challenge by Frontend Mentor.',
		websiteLink: 'https://jpzs444.github.io/pod-landing-page',
		githubLink: 'https://github.com/jpzs444/pod-landing-page',
		imgLink: pod,
	},
	{
		id: 'project-5',
		title: 'Linked',
		tags: ['HTML', 'CSS', 'JavaScript'],
		content: 'A custom Chrome extension for bookmarking webpages; built with HTML, CSS, and JavaScript.',
		websiteLink: '',
		githubLink: 'https://github.com/jpzs444/linked-chrome-extension',
		imgLink: linked,
	},
	{
		id: 'project-6',
		title: 'Splitter',
		tags: ['HTML', 'CSS', 'JavaScript'],
		content: 'A tip calculator app built with HTML, CSS, and JavaScript, achieving all the functionalities, design layouts, and hover states provided by Frontend Mentor.',
		websiteLink: 'https://jpzs444.github.io/tip-calculator-app',
		githubLink: 'https://github.com/jpzs444/tip-calculator-app',
		imgLink: splitter,
	},
	{
		id: 'project-7',
		title: 'Testimonials Grid Section',
		tags: ['HTML', 'CSS', 'JavaScript'],
		content: 'A responsive grid section challenge by Frontend Mentor; built with HTML, CSS, and JavaScript.',
		websiteLink: 'https://jpzs444.github.io/testimonials-grid-section/',
		githubLink: 'https://github.com/jpzs444/testimonials-grid-section',
		imgLink: grid,
	},
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