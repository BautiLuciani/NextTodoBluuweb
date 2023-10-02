import { ITodo } from "../interfaces/todo.interfaces"
import TodoItem from "./TodoItem"

interface TodoListProps {
    todos: ITodo[]
}

const TodoList = ({ todos }: TodoListProps) => {

    if (!todos.length) return (<div className="text-center text-2xl">No hay tareas</div>)

    return (
        <div>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodoList