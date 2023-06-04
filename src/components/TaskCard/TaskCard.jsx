import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FetchContext } from '../../Context/fetchProvider';
import UpdateTask from '../UpdateTask/UpdateTask';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

const TaskCard = ({ task }) => {
	const { updated, setUpdated, updateTask, deleteTask } =
		useContext(FetchContext);

	const [isOpen, setIsOpen] = useState(false);

	const markAsCompleted = (data) => {
		const updatedData = {
			title: data.title,
			description: data.description,
			status: 'Completed',
		};
		updateTask(data._id, updatedData).then((res) => {
			console.log(res);
			if (res.acknowledged) {
				Swal.fire({
					icon: 'success',
					title: 'Awesome!',
					text: 'You have completed a task!',
					confirmButtonColor: '#202020',
				});
				setUpdated(!updated);
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong! Please try again later.',
					confirmButtonColor: '#202020',
				});
			}
		});
	};

	const handleUpdate = () => {
		setIsOpen(true);
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#202020',
			cancelButtonColor: '#505050',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteTask(id).then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						Swal.fire({
							icon: 'success',
							title: 'Deleted!',
							text: 'Your task has been deleted.',
							confirmButtonColor: '#202020',
						});
						setUpdated(!updated);
					}
				});
			}
		});
	};

	return (
		<li className="max-w-lg rounded-lg border">
			<div className="flex items-start justify-between p-2">
				<div className="space-y-2">
					<h4 className="font-semibold text-gray-800">{task.title}</h4>
					<p className="text-sm text-gray-600">{task.description}</p>
				</div>
				<button
					onClick={() => markAsCompleted(task)}
					disabled={task.status === 'Completed' ? true : false}
					className={`rounded-lg  bg-gray-100 px-2 py-1 text-xs text-gray-800 duration-150  ${
						task.status === 'Completed'
							? ''
							: 'border hover:bg-gray-50 active:bg-gray-200'
					}`}>
					{task.status === 'Completed' ? (
						<span className="flex items-center gap-1">
							<IoCheckmarkDoneOutline /> Completed
						</span>
					) : (
						'Mark as Completed'
					)}
				</button>
			</div>
			<div className="flex items-center justify-end gap-4 border-t bg-gray-100 p-2">
				<button
					onClick={() => handleUpdate()}
					className="w-full rounded-lg border bg-gray-700 px-3 py-2 text-sm text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
					Edit
				</button>
				<button
					onClick={() => handleDelete(task._id)}
					className="w-full rounded-lg border bg-gray-700 px-3 py-2 text-sm text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
					Delete
				</button>
			</div>

			{isOpen && <UpdateTask setIsOpen={setIsOpen} task={task} />}
		</li>
	);
};

export default TaskCard;
