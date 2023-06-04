import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FetchContext } from '../../Context/fetchProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddNewTask = () => {
	const { addNewTask } = useContext(FetchContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		addNewTask(data).then((data) => {
			console.log(data);
			if (data.insertedId) {
				Swal.fire({
					icon: 'success',
					title: 'Successfully added!',
					text: '',
					confirmButtonColor: '#202020',
				});

				navigate('/');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong! Please try again later.',
					confirmButtonColor: '#202020',
				});
			}
		});

		reset();
	};

	console.log(errors?.title?.type);

	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="mx-auto w-full max-w-lg rounded-md border bg-white p-4 shadow-lg">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
					Add new task
				</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* title */}
					<div>
						<label className="font-medium text-gray-500">Title*</label>
						<input
							type="text"
							{...register('title', { required: true })}
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
						/>
					</div>
					{/* description */}
					<div className="my-4">
						<label className="font-medium text-gray-500">Description*</label>
						<textarea
							name="description"
							{...register('description', { required: true })}
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"></textarea>
					</div>
					{/* status */}
					<div>
						<label className="font-medium text-gray-500">Status</label>
						<select
							{...register('status', { required: true })}
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600">
							<option name="new" value="Pending">
								New
							</option>
							<option name="progress">In Progress</option>
							<option name="completed">Completed</option>
						</select>
					</div>

					{/* add task button */}
					<button className="mt-8 w-full rounded-lg border bg-gray-700 p-3 text-sm font-bold uppercase text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddNewTask;
