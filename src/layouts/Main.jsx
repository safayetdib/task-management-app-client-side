import { Link, NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { FaBars, FaTasks } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Main = () => {
	const navLinks = [
		{
			title: 'All Tasks',
			path: '/',
		},
		{
			title: 'Pending',
			path: '/pending',
		},
		{
			title: 'In Progress',
			path: '/in-progress',
		},
		{
			title: 'Completed',
			path: '/completed',
		},
	];

	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="flex min-h-screen">
			{/* sidebar */}
			<div className="hidden w-96 border-r border-gray-300 md:inline-block">
				<Sidebar navLinks={navLinks} />
			</div>
			<div className="w-full">
				{/* hamburger menu */}
				<div className="flex items-center justify-between bg-gray-100 md:hidden">
					<div className="flex items-center justify-center gap-2 p-4 text-base font-bold text-gray-800 sm:text-xl">
						<FaTasks />
						<h2>React Task Manager</h2>
					</div>
					<div className="mr-4">
						<button
							onClick={() => setShowMenu(true)}
							className="rounded-md bg-gray-50 p-2 hover:bg-gray-200">
							<FaBars />
						</button>

						{showMenu ? (
							<div className="fixed inset-0 z-10 overflow-y-auto">
								<div
									className="fixed inset-0 h-full w-full"
									onClick={() => setShowMenu(false)}></div>
								<div className="flex min-h-screen items-center px-4 py-8">
									<div className=" mx-auto w-full max-w-lg">
										<div className="absolute right-4 top-14 rounded-lg bg-white p-2 pt-6 shadow-xl">
											<ul className="w-32 space-y-1">
												{navLinks.map((item, index) => (
													<li key={index}>
														<Link
															to={item.path}
															onClick={() => setShowMenu(false)}
															className="block rounded-md px-4 py-2 hover:bg-gray-50">
															{item.title}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						) : (
							''
						)}
					</div>
				</div>

				<NavLink
					to="/add-task"
					className={({ isActive }) =>
						`${
							isActive ? 'hidden' : `mx-4 bg-gray-500`
						}  mt-4 flex items-center justify-center gap-4 px-4 py-2 text-lg uppercase text-gray-100 shadow-lg md:hidden`
					}>
					<AiOutlinePlusCircle className="text-3xl" /> Add New Task
				</NavLink>

				{/* outlet */}
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
