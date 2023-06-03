import { NavLink } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<div>
			<div className="flex items-center justify-center gap-2 bg-gray-100 p-4 text-xl font-bold text-gray-800">
				<FaTasks />
				<h2>React Task Manager</h2>
			</div>

			<nav className="mt-8">
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? 'bg-sky-300' : '')}>
							All Tasks
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/pending"
							className={({ isActive }) => (isActive ? 'bg-sky-300' : '')}>
							Pending Tasks
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/completed"
							className={({ isActive }) => (isActive ? 'bg-sky-300' : '')}>
							Completed Tasks
						</NavLink>
					</li>

					<li className="mt-4">
						<NavLink
							to="/add-task"
							className={({ isActive }) => (isActive ? 'bg-sky-300' : '')}>
							Add New Task
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
