# CLERK
# Vamos a usar clerk para la autenticacion de usuarios
1. Agregamos un usuario al scheme de los Todo ► `prisma/schema.prisma`
2. Actualizamos la base de datos de prisma ► npx prisma db push
3. Instalamos clerk
4. Agregamos las variables de entorno que nos brinda clerk al crear una nueva aplicacion ► `.env`
5. Envolvemos toda la aplicacion en el ClerkProvider ► `layout.tsx`
6. Creamos el archivo `middleware.ts`
7. Creamos el login ► `app/(auth)`
8. Creamos el register ► `app/(auth)`
9. Creamos el AuthLayout ► `(auth)/layout`
10. Configuramos las variables de entorno para el login y el register ► `.env`
11. Activamos el Username en el dashboard de clerk ► User & Authentication → Email, Phone, Username
12. Agregamos el userId al metodo para crear nuevos todos ► `todo/actions/todo.actions.ts`
13. Filtramos los todos para que solo se muestren los que le pertenecen a ese usuario ► `page.tsx`
14. Creamos el boton para cerrar sesion ► `page.tsx`