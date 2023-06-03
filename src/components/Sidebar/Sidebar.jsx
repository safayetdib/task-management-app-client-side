import { NavLink } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

const Sidebar = () => {
	const active =
		'block bg-gray-700 text-gray-100 py-2 px-4 rounded-l-lg shadow-lg';
	const pending = 'block bg-gray-100 text-gray-700 py-2 px-4 rounded-l-lg';

	return (
		<div>
			<div className="flex items-center justify-center gap-2 bg-gray-100 p-4 text-xl font-bold text-gray-800">
				<FaTasks />
				<h2>React Task Manager</h2>
			</div>

			<nav className="mt-8">
				<ul className="ml-4 space-y-4">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? active : pending)}>
							All Tasks
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/pending"
							className={({ isActive }) => (isActive ? active : pending)}>
							Pending
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/in-progress"
							className={({ isActive }) => (isActive ? active : pending)}>
							In Progress
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/completed"
							className={({ isActive }) => (isActive ? active : pending)}>
							Completed
						</NavLink>
					</li>

					<li className="mt-4">
						<NavLink
							to="/add-task"
							className={({ isActive }) => (isActive ? active : pending)}>
							Add New Task
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
