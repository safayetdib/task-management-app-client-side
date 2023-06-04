import { NavLink } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Sidebar = ({ navLinks }) => {
	const active =
		'block bg-gray-700 text-gray-100 py-2 px-4 rounded-l-lg shadow-lg';
	const pending = 'block bg-gray-100 text-gray-700 py-2 px-4 rounded-l-lg';

	return (
		<div>
			<div className="flex items-center gap-2 bg-gray-100 p-6 text-xl font-bold text-gray-800">
				<FaTasks />
				<h2 className="text-lg">React Task Manager</h2>
			</div>

			<div className="mt-8">
				<NavLink
					to="/add-task"
					className={({ isActive }) =>
						`${
							isActive ? 'ml-4 rounded-l-md bg-gray-700' : `mx-4 bg-gray-500`
						}  flex items-center justify-center gap-4 px-4 py-2 text-xl uppercase text-gray-100 shadow-lg`
					}>
					<AiOutlinePlusCircle className="text-3xl" /> Add New Task
				</NavLink>
			</div>

			<nav className="mt-8">
				<ul className="ml-4 space-y-4">
					{navLinks.map((item, index) => (
						<li key={index}>
							<NavLink
								to={item.path}
								className={({ isActive }) => (isActive ? active : pending)}>
								{item.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
