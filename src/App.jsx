import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskItems from './components/TaskItems'
import initialTasks from './Data/FirstTasks'

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  const completedCount = tasks.filter((task) => task.completed).length
  const activeCount = tasks.length - completedCount

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed

    return true
  })

  function handleAddTask(newTask) {
    setTasks((currentTasks) => [
      {
        id: crypto.randomUUID(),
        ...newTask,
        completed: false,
      },
      ...currentTasks,
    ])
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    )
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    )
  }

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ]

  const stats = [
    { label: 'Total tasks', value: tasks.length },
    { label: 'Remaining', value: activeCount },
    { label: 'Completed', value: completedCount },
  ]

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-indigo-600">STUDYFLOW</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              Your study dashboard
            </h1>
            <p className="mt-2 text-slate-500">
              Organize your work and make progress every day.
            </p>
          </div>

          <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
            <p className="text-sm text-slate-500">Completion rate</p>
            <p className="text-xl font-bold">
              {tasks.length === 0
                ? 0
                : Math.round((completedCount / tasks.length) * 100)}
              %
            </p>
          </div>
        </header>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <TaskForm onAddTask={handleAddTask} />

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">My tasks</h2>

              <div className="flex gap-2">
                {filters.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFilter(item.value)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${
                      filter === item.value
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {filteredTasks.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
                <p className="font-medium">No tasks found</p>
                <p className="mt-1 text-sm text-slate-500">
                  Add a task or select another filter.
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {filteredTasks.map((task) => (
                  <TaskItems
                    key={task.id}
                    task={task}
                    onToggle={handleToggleTask}
                    onDelete={handleDeleteTask}
                  />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App