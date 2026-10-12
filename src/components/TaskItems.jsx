const TaskItems = ({task, onToggle, onDelete}) => {
    return(
        <li className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md">
                <button
                    onClick={() => {onToggle(task.id)}}
                    type="button"
                    aria-pressed={task.completed}
                    className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-4 ${
                        task.completed
                            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:ring-emerald-500/20"
                            : "bg-amber-100 text-amber-700 hover:bg-amber-200 focus:ring-amber-500/20"
                    }`}
                >
                    {task.completed ? 'Completed' : 'Not Completed'}
                </button>

                <div className="min-w-0 flex-1">
                    <p className={`truncate font-medium ${task.completed ? "text-slate-400 line-through" : "text-slate-900"}`}>
                        {task.title}
                    </p>
                    <span className="mt-1 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                        {task.category}
                    </span>
                </div>

                <button
                    onClick={() => {onDelete(task.id)}}
                    type="button"
                    className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50 hover:text-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-500/20"
                >
                    Delete
                </button>
        </li>
    );

}

export default TaskItems;