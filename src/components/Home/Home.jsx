import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const Home = () => {
	const [pendingTasks, setPendingTasks] = useState([]);
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const { isLoading, setIsLoading, updated, getAllTasks } =
		useContext(FetchContext);

	useEffect(() => {
		getAllTasks().then((data) => {
			setPendingTasks(data.filter((task) => task.status === 'Pending'));
			setInProgressTasks(data.filter((task) => task.status === 'In Progress'));
			setCompletedTasks(data.filter((task) => task.status === 'Completed'));
			setIsLoading(false);
		});
	}, [updated]);

	if (isLoading) {
		return (
			<div className="flex h-screen items-center justify-center">
				<div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-gray-500"></div>
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-between gap-4 px-4 lg:flex-row">
			{/* pending tasks */}
			<div className="w-full">
				<h3 className="border-b p-6 text-xl font-bold">Pending</h3>
				<ul className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{pendingTasks.length ? (
						pendingTasks.map((task) => <TaskCard key={task._id} task={task} />)
					) : (
						<div className="px-6">
							<h4>No Pending Task Found!</h4>
						</div>
					)}
				</ul>
			</div>

			{/* in progress tasks */}
			<div className="w-full">
				<h3 className="border-b p-6 text-xl font-bold">In Progress</h3>
				<ul className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{inProgressTasks.length ? (
						inProgressTasks.map((task) => (
							<TaskCard key={task._id} task={task} />
						))
					) : (
						<div className="px-6">
							<h4>No Task In Progress Found!</h4>
						</div>
					)}
				</ul>
			</div>

			{/* completed tasks */}
			<div className="w-full">
				<h3 className="border-b p-6 text-xl font-bold">Completed</h3>
				<ul className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{completedTasks.length ? (
						completedTasks.map((task) => (
							<TaskCard key={task._id} task={task} />
						))
					) : (
						<div className="px-6">
							<h4>No Completed Task Found!</h4>
						</div>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
