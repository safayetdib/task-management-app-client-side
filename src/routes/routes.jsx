import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import AddNewTask from '../components/AddNewTask/AddNewTask';

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
		],
	},
]);

export default router;
