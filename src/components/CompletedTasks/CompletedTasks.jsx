import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const CompletedTasks = () => {
	const [completedTasks, setCompletedTasks] = useState([]);
	const { updated, filteredTasks } = useContext(FetchContext);

	useEffect(() => {
		filteredTasks('Completed').then((data) => {
			setCompletedTasks(data);
		});
	}, [updated]);

	return (
		<div className="mt-6 flex w-full flex-col items-center justify-center px-4">
			<h3 className="text-xl font-bold">Completed Tasks</h3>
			{completedTasks.length ? (
				<ul className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2  md:flex-row lg:grid-cols-3">
					{completedTasks.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</ul>
			) : (
				<div className="mt-8 text-center text-xl">
					<h4>You have no completed task!</h4>
				</div>
			)}
		</div>
	);
};

export default CompletedTasks;
