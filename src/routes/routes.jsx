import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import AddNewTask from '../components/AddNewTask/AddNewTask';
import PendingTasks from '../components/PendingTasks/PendingTasks';
import CompletedTasks from '../components/CompletedTasks/CompletedTasks';
import InProgressTasks from '../components/InProgessTasks/InProgressTasks';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/add-task',
				element: <AddNewTask />,
			},
			{
				path: '/pending',
				element: <PendingTasks />,
			},
			{
				path: '/in-progress',
				element: <InProgressTasks />,
			},
			{
				path: '/completed',
				element: <CompletedTasks />,
			},
		],
	},
]);

export default router;
