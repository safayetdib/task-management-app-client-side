import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const Home = () => {
	const [pendingTasks, setPendingTasks] = useState([]);
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const { updated, getAllTasks } = useContext(FetchContext);

	useEffect(() => {
		getAllTasks().then((data) => {
			console.log(data);
			setPendingTasks(data.filter((task) => task.status === 'Pending'));
			setInProgressTasks(data.filter((task) => task.status === 'In Progress'));
			setCompletedTasks(data.filter((task) => task.status === 'Completed'));
		});
	}, [updated]);

	return (
		<div className="flex flex-col justify-between gap-4 px-4 lg:flex-row">
			{/* pending tasks */}
			<div className="mt-6 w-full">
				<h3 className="text-xl font-bold">Pending</h3>
				<ul className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{pendingTasks.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</ul>
			</div>

			{/* in progress tasks */}
			<div className="mt-6 w-full">
				<h3 className="text-xl font-bold">In Progress</h3>
				<ul className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{inProgressTasks.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</ul>
			</div>

			{/* completed tasks */}
			<div className="mt-6 w-full">
				<h3 className="text-xl font-bold">Completed</h3>
				<ul className="mt-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
					{completedTasks.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
