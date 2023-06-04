import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const InProgressTasks = () => {
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const { isLoading, setIsLoading, updated, filteredTasks } =
		useContext(FetchContext);

	useEffect(() => {
		filteredTasks('In Progress').then((data) => {
			setInProgressTasks(data);
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
		<div className="flex w-full flex-col items-center justify-center px-4">
			<h3 className="border-b py-6 text-xl font-bold">In Progress..</h3>
			{inProgressTasks.length ? (
				<ul className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2  md:flex-row lg:grid-cols-3">
					{inProgressTasks.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</ul>
			) : (
				<div className="mt-8 text-center text-xl">
					<h4>You have no task in progress!</h4>
				</div>
			)}
		</div>
	);
};

export default InProgressTasks;
