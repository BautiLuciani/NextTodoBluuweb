"use client"

import { createTodo } from '../actions/todo.actions'
import { useRef } from 'react'
import FormButton from './FormButton'
import toast from "react-hot-toast"
import { TodoZodSchema } from '../schema/todoZod'
import { ZodError } from 'zod'

const FormTodo = () => {

    /* Usamos el useRef para limpiar el formulario */
    const formRef = useRef<HTMLFormElement>(null)

    const handleCreateTodo = async (data: FormData) => {
        /* Utilizamos el parametro 'data' de tipo FormData para obtener lo que el usuario ingreso en el input 
        Debemos definir el 'as string' para evitar errores, como en el archivo schema.prisma */
        const title = data.get('title') as string

        try {
            /* Validaciones del frontend con zod */
            TodoZodSchema.parse({ title })

            /* Enviamos la peticion para crear el Todo */
            const respuestaBackEnd = await createTodo(title)

            if(!respuestaBackEnd.success){
                return toast.error(respuestaBackEnd.message)
            }

            /* En caso de que todo salga bien mostramos un modal de exito */
            toast.success(respuestaBackEnd.message)
        } catch (error) {
            if (error instanceof ZodError) {
                return error.issues.map(issue => toast.error(issue.message))
            }
        } finally {
            /* Limpiamos el formulario */
            formRef.current?.reset()
        }
    }

    return (
        <form ref={formRef} action={handleCreateTodo} className='flex'>
            <input
                type="text"
                name="title"
                className="border border-gray-400 rounded p-2 mr-2 w-full"
            />
            <FormButton />
        </form>
    )
}

export default FormTodo