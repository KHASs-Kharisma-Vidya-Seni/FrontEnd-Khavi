import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const navlists = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
	];
	return (
		<nav className="py-6">
			<ul className="flex space-x-4">
				{navlists.map((navlist, index) => (
					<li key={index}>
						<NavLink
							to={navlist.link}
							className={({ isActive }) => {
								return isActive ? 'text-red-500' : 'text-black';
							}}>
							{navlist.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
