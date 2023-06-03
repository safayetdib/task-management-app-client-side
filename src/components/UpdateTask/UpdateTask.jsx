import { useContext, useState } from 'react';
import { FetchContext } from '../../Context/fetchProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateTask = ({ setIsOpen, task }) => {
	const [state, setState] = useState(true);
	console.log(task);

	const handleClick = () => {
		setState(false);
		setIsOpen(false);
	};

	const { updated, setUpdated, updateTask } = useContext(FetchContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		updateTask(task._id, data).then((res) => {
			console.log(res);
			if (res.modifiedCount > 0) {
				setUpdated(!updated);
				Swal.fire({
					icon: 'success',
					title: 'Successfully updated!',
					text: '',
					confirmButtonColor: '#202020',
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'You did not change any data!',
					confirmButtonColor: '#202020',
				});
			}
		});

		reset();
	};

	console.log(errors?.title?.type);

	return state ? (
		<div className="fixed inset-0 z-10 overflow-y-auto">
			<div
				className="fixed inset-0 h-full w-full bg-black opacity-40"
				onClick={() => handleClick()}></div>
			<div className="flex min-h-screen items-center px-4 py-8">
				<div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-lg">
					<h2 className="my-2 text-center text-xl font-semibold">
						Update Task
					</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						{/* title */}
						<div>
							<label className="font-medium text-gray-500">Title</label>
							<input
								type="text"
								defaultValue={task.title}
								{...register('title', { required: true, maxLength: 120 })}
								required
								className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
							/>
						</div>
						{/* description */}
						<div className="my-4">
							<label className="font-medium  text-gray-500">Description</label>
							<textarea
								name="description"
								defaultValue={task.description}
								{...register('description', { required: true })}
								className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"></textarea>
						</div>
						{/* status */}
						<div>
							<label className="font-medium  text-gray-500">Status</label>
							<select
								defaultValue={task.status}
								{...register('status', { required: true })}
								className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600">
								<option name="new" value="Pending">
									New
								</option>
								<option name="progress">In Progress</option>
								<option name="completed">Completed</option>
							</select>
						</div>

						<div className="mt-4 flex gap-4">
							{/* add task button */}
							<button
								onClick={() => setIsOpen(false)}
								className="mt-6 w-full rounded-lg border bg-gray-200 px-3 py-2 text-sm font-bold uppercase text-gray-700 duration-150 hover:bg-gray-100 active:bg-gray-300">
								Cancel
							</button>
							{/* add task button */}
							<button
								type="submit"
								className="mt-6 w-full rounded-lg border bg-gray-700 px-3 py-2 text-sm font-bold uppercase text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	) : (
		''
	);
};

export default UpdateTask;
