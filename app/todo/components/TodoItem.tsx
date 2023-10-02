"use client"

import { ITodo } from "../interfaces/todo.interfaces"
import { FiTrash2 } from 'react-icons/fi'
import { FaSpinner } from 'react-icons/fa'
import { useTransition } from 'react'
import { removeTodo } from "../actions/todo.actions"
import toast from "react-hot-toast"

interface TodoItemProps {
  todo: ITodo
}

const TodoItem = ({ todo }: TodoItemProps) => {

  /* Para poder usar los ServerActions en el formulario lo hicimos a traves del 'action'
    Para poder usarlos en un boton debemos usar el 'startTransition' de useTransition */
  const [isPending, startTransition] = useTransition()

  const handleClickRemove = async (id: string) => {
    const res = await removeTodo(id)
    if (res.error) {
      toast.error(res.error)
    } else {
      toast.success("Todo remove")
    }
  }

  return (
    <div className="border border-gray-400 rounded mb-2 p-2 flex justify-between items-center">
      <span>{todo.title}</span>
      <button
        /* Para usar el startTransition debemos hacerlo a traves de una arrow function
          Ademas startTransition contiene una arrow function en su interior  */
        onClick={() => startTransition(() => handleClickRemove(todo.id))}
      >
        {
          isPending ? (
            <span className='block animate-spin'>
              <FaSpinner className='transform rotate-90' />
            </span>
          ) : (
            <FiTrash2 />
          )
        }
      </button>
    </div>
  )
}

export default TodoItem