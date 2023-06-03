import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/routes.jsx';
import FetchProvider from './Context/fetchProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FetchProvider>
			<RouterProvider router={router} />
		</FetchProvider>
	</React.StrictMode>
);
