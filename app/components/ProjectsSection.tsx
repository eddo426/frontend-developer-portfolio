'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Social Media Dashboard',
		description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
		image: '/social-media-dashboard.png',
		tags: ['React', 'JavaScript', 'HTML', 'Tailwind CSS', 'Vite'],
		page: 'https://social-media-dashboard-eddo426.netlify.app/',
	},
	{
		title: 'Intro Section With Dropdown Navigation',
		description: 'A responsive landing page example with dropdow navigation.',
		image: '/intro-section-with-dropdown-navigation-main.png',
		tags: ['JavaScript', 'CSS', 'HTML'],
		page: 'https://intro-section-with-dropdown-navigation-main-eddo426.netlify.app/',
	},
	{
		title: 'Notifications Page',
		description: 'A notifications panel example.',
		image: '/notifications-page.png',
		tags: ['CSS, HTML'],
		page: 'https://notification-page-eddo426.netlify.app/',
	},
	{
		title: 'Tic-Tac-Toe',
		description: 'A tic-tac-toe game to have fun with.',
		image: '/tic-tac-toe.png',
		tags: ['React', 'JavaScript', 'CSS', 'HTML'],
		page: 'https://tic-tac-toe-eddo426.netlify.app/',
	},
	{
		title: 'DnD Dice Roller',
		description: 'A multi-dice roller ready to be used in your next D&D adventure! Built with HTML, CSS and JavaScript.',
		image: '/dnd-dice-roller.png',
		tags: ['JavaScript', 'CSS', 'HTML'],
		page: 'https://dnd-dice-roller-eddo426.netlify.app/',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.a
							key={index}
							href={project.page}
							target="_blank"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}
