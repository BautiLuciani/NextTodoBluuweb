/* Es obligatorio definir el "use server" para avisarle a next que vamos a hacer una peticion a la base de datos */
"use server"

import { prisma } from "@/libs/prismadb"
import { revalidatePath } from "next/cache"
import { TodoZodSchema } from "../schema/todoZod"
import { ZodError } from 'zod';
import { auth } from "@clerk/nextjs";

interface TodoResponse {
    success: boolean
    message: string
}

/* Funcion para agregar un Todo a la base de datos
Como es una funcion asincrona hay que tiparlo como promesa con la interfaz dentro */
export const createTodo = async (title: string): Promise<TodoResponse> => {

    /* Podemos obtener la informacion del usuario tanto del lado del cliente como del lado del servidor
    En este caso lo vamos a hacer desde el lado del servidor con el metodo auth() */
    const { userId } : { userId: string | null } = auth()

    if(!userId){
        return {
            success: false,
            message: 'No user id (backend)'
        }
    }

    try {
        /* Validaciones del backend con zod */
        TodoZodSchema.parse({ title })

        /* Utilizamos el metodo de prisma para crear el Todo */
        await prisma.todo.create({
            data: {
                title,
                userId
            }
        })

        /* Usamos el revalidatePath para que al agregar un nuevo Todo se muestre instantaneamente en pantalla */
        revalidatePath('/todo')

        return {
            success: true,
            message: 'Todo creado correctamente'
        }
    } catch (error) {
        if (error instanceof ZodError) {
            return {
                success: false,
                message: `${error.issues[0].message} (backend)`
            }
        }

        return {
            success: false,
            message: "Prisma error (backend)"
        }
    }
}

/* Funcion para eliminar todos de la base de datos */
export const removeTodo = async (id: string) => {
    if (!id || !id.trim()) {
        return {
            error: "ID is required (backend)"
        }
    }

    try {
        await prisma.todo.delete({
            where: {
                id
            }
        })
        revalidatePath('/todo')
        return {
            success: true
        }
    } catch (error) {
        return {
            error: "Error removing todo (backend)"
        }
    }
}