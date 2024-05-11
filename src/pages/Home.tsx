import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimationPage from '../components/AnimationPage';
import { motion } from 'framer-motion';

const data = [
	{ name: 'React + Vite', link: 'https://tailwindcss.com/' },
	{ name: 'TailwindCSS', link: 'https://tailwindcss.com/' },
	{
		name: 'React Router',
		link: 'https://reactrouter.com/en/main/start/overview',
	},
	{
		name: 'Framer Motion',
		link: 'https://www.framer.com/motion/introduction/',
	},
	{ name: 'Sonners', link: 'https://sonner.emilkowal.ski/' },
	{ name: 'React Hook Form', link: 'https://react-hook-form.com/get-started' },
	{
		name: 'Axios & SWR',
		link: 'https://axios-http.com/docs/intro',
		secondLink: 'https://swr.vercel.app/docs/getting-started',
	},
];

export default function Home() {
	const [hoveredItem, setHoveredItem] = useState<number | null>(null);

	// Define animation variants for staggered animation
	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<AnimationPage>
			<div className="">
				<ul className="space-y-3 py-2">
					{data.map((item, index: number) => (
						<motion.li
							key={index}
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							transition={{ delay: index * 0.1 }}>
							<Link
								to={item.link}
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
								className={`hover:underline ${
									hoveredItem === index ? 'text-red-500' : 'text-black'
								}`}>
								{item.name}
							</Link>
							{item.secondLink && (
								<React.Fragment>
									{' & '}
									<Link
										to={item.secondLink}
										onMouseEnter={() => setHoveredItem(index)}
										onMouseLeave={() => setHoveredItem(null)}
										className={`hover:underline ${
											hoveredItem === index ? 'text-red-500' : 'text-black'
										}`}>
                    SWR
									</Link>
								</React.Fragment>
							)}
						</motion.li>
					))}
				</ul>
			</div>
		</AnimationPage>
	);
}
