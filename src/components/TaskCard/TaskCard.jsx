const TaskCard = ({ task }) => {
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
				<button className="w-full rounded-lg border bg-gray-700 px-3 py-2 text-sm text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
					Update
				</button>
				<button className="w-full rounded-lg border bg-gray-700 px-3 py-2 text-sm text-gray-100 duration-150 hover:bg-gray-600 active:bg-gray-800">
					Delete
				</button>
			</div>
		</li>
	);
};

export default TaskCard;
