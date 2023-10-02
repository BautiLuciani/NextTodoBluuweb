import { prisma } from "@/libs/prismadb"
import FormTodo from "./todo/components/FormTodo"
import TodoList from "./todo/components/TodoList"
import { User } from "@clerk/nextjs/api"
import { UserButton, currentUser } from "@clerk/nextjs"

const TodoPage = async () => {

    /* Obtenemos al usuario */
    const user: User | null = await currentUser()

    if (!user) {
        return <div>loading...</div>
    }

    /* Filtramos con el where para que solo traiga los todos que le pertenecen al usuario */
    const todos = await prisma.todo.findMany({
        where: {
            userId: user.id
        }
    })

    return (
        <div className="space-y-5">
            <div className="flex justify-center items-center">
                <h1 className="text-center text-3xl my-10">TodoPage: {user.username}</h1>
                <div className="ml-auto">
                    {/* Boton para cerrar sesion */}
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
            <FormTodo />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoPage