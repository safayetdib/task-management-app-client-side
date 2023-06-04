import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { FaBars, FaTasks } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

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
			<div className="hidden w-96 border-r border-gray-300 md:inline-block">
				<Sidebar navLinks={navLinks} />
			</div>
			<div className="w-full">
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

				<Outlet />
			</div>
		</div>
	);
};

export default Main;
