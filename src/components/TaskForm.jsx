import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Learning');
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim()) return;

        onAddTask({ title: title.trim(), category });

        setTitle('');
        setCategory('Learning');
    } 
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Add a Task</h2>
                <p className="text-sm text-slate-500">Add a task and choose a category.</p>
            </div>

            <div className="space-y-2">
                <label htmlFor="task-title" className="block text-sm font-medium text-slate-700">Task Name</label>
                <input
                    type="text"
                    id="task-title"
                    placeholder="Enter a task"
                    value={title}
                    onChange={(event) => {setTitle(event.target.value)}}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/15"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="task-category" className="block text-sm font-medium text-slate-700">Category</label>
                <select
                    id="task-category"
                    value={category}
                    onChange={(event) => {setCategory(event.target.value)}}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/15"
                >
                    <option value="Learning">Learning</option>
                    <option value="Coding">Coding</option>
                    <option value="Assignment">Assignment</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-red-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/30 active:bg-red-800"
            >
                    Add a Task
            </button>
        </form>
    );
}

export default TaskForm;