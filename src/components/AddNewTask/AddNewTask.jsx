import { useForm } from 'react-hook-form';

const AddNewTask = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div>
			<div className="mx-auto mt-8 flex max-w-lg flex-col gap-4 rounded-md bg-gray-100 p-4">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
					Add new task
				</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* title */}
					<div>
						<label className="font-medium">Email</label>
						<input
							type="email"
							required
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
						/>
					</div>
					{/* description */}
					<div>
						<label className="font-medium">Description</label>
						<textarea
							name="description"
							className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"></textarea>
					</div>
					{/* status */}
					<div>
						<label className="font-medium">Status</label>
						<select className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600">
							<option name="new">New</option>
							<option name="progress">In Progress</option>
							<option name="completed">Completed</option>
						</select>
					</div>

					{/* add task button */}
					<button className="mt-8 w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium uppercase text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600">
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddNewTask;
