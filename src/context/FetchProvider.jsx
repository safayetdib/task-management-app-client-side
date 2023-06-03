import { createContext } from 'react';

export const FetchContext = createContext(null);

const FetchProvider = ({ children }) => {
	const BASE_URL = 'http://localhost:5000';

	// get all tasks data
	const getAllTasks = async () => {
		return fetch(`${BASE_URL}/all-tasks`).then((res) => res.json());
	};

	// add new task to db
	const addNewTask = async (data) => {
		return fetch(`${BASE_URL}/new-task`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => res.json());
	};

	const fetchInfo = {
		BASE_URL,
		getAllTasks,
		addNewTask,
	};

	return (
		<FetchContext.Provider value={fetchInfo}>{children}</FetchContext.Provider>
	);
};

export default FetchProvider;
