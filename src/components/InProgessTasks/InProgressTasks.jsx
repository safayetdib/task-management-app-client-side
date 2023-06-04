import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const InProgressTasks = () => {
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const { updated, filteredTasks } = useContext(FetchContext);

	useEffect(() => {
		filteredTasks('In Progress').then((data) => {
			setInProgressTasks(data);
		});
	}, [updated]);

	return (
		<div className="mt-6 flex w-full flex-col items-center justify-center px-4">
			<h3 className="text-xl font-bold">In Progress..</h3>
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
