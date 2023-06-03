import { createContext } from 'react';

export const FetchContext = createContext(null);

const FetchProvider = ({ children }) => {
	const BASE_URL = 'http://localhost:5000';

	// add new task to db
	const addNewTask = (data) => {
		return fetch(`${BASE_URL}/new-task`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	};

	const fetchInfo = {
		BASE_URL,
		addNewTask,
	};

	return (
		<FetchContext.Provider value={fetchInfo}>{children}</FetchContext.Provider>
	);
};

export default FetchProvider;
