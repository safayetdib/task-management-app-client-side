import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import TaskCard from '../TaskCard/TaskCard';

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [pendingTasks, setPendingTasks] = useState([]);
	const [inProgressTasks, setInProgressTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const { getAllTasks } = useContext(FetchContext);

	useEffect(() => {
		getAllTasks().then((data) => {
			console.log(data);
			setTasks(data);
		});
	}, []);

	return (
		<div className="px-4">
			<ul className="mt-16 grid gap-8">
				{tasks.map((task) => (
					<TaskCard key={task._id} task={task} />
				))}
			</ul>
		</div>
	);
};

export default Home;
