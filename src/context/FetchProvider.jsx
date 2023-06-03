import { createContext, useState } from 'react';

export const FetchContext = createContext(null);

const FetchProvider = ({ children }) => {
	const BASE_URL = 'http://localhost:5000';

	const [updated, setUpdated] = useState(false);

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

	// get all tasks data
	const getAllTasks = async () => {
		return fetch(`${BASE_URL}/all-tasks`).then((res) => res.json());
	};

	// get tasks by category
	const filteredTasks = async (category) => {
		return fetch(`${BASE_URL}/tasks?filter=${category}`).then((res) =>
			res.json()
		);
	};

	const fetchInfo = {
		BASE_URL,
		updated,
		setUpdated,
		addNewTask,
		getAllTasks,
		filteredTasks,
	};

	return (
		<FetchContext.Provider value={fetchInfo}>{children}</FetchContext.Provider>
	);
};

export default FetchProvider;
