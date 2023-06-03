import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const PendingTasks = () => {
	const [pendingTasks, setPendingTasks] = useState([]);
	const { updated, filteredTasks } = useContext(FetchContext);

	useEffect(() => {
		filteredTasks('Pending').then((data) => {
			setPendingTasks(data);
		});
	}, [updated]);

	return (
		<div className="mt-6 flex w-full flex-col items-center justify-center px-4">
			<h3 className="text-xl font-bold">Pending</h3>
			{pendingTasks.length ? (
				<ul className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2  md:flex-row lg:grid-cols-3">
					{pendingTasks.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</ul>
			) : (
				<div className="mt-8 text-center text-xl">
					<h4>You have no pending task!</h4>
				</div>
			)}
		</div>
	);
};

export default PendingTasks;
