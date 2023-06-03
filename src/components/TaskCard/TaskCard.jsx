import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FetchContext } from '../../Context/fetchProvider';
import UpdateTask from '../UpdateTask/UpdateTask';

const TaskCard = ({ task }) => {
	const { updated, setUpdated, deleteTask } = useContext(FetchContext);

	const [isOpen, setIsOpen] = useState(false);

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
						setUpdated(!updated);
						Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
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
				<p className="rounded-lg border bg-gray-100 px-3 py-2 text-xs text-gray-800 duration-150">
					{task.status}
				</p>
			</div>
			<div className="flex items-center justify-end gap-4 border-t bg-gray-100 p-2">
				<button
					onClick={() => handleUpdate()}
					className="w-full rounded-lg border bg-gray-700 px-3 py-2 text-sm text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
					Update
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
