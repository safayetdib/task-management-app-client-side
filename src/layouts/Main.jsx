import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const Main = () => {
	return (
		<div className="flex min-h-screen">
			<div className="w-60 border-r border-gray-500">
				<Sidebar />
			</div>
			<div className="w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
