# SERVER ACTIONS + PRISMA + MONGODB + ZOD + CLERK

# FRONT END
1. Instalamos next ► yarn create next-app .
[a] TypeScript → Yes
[b] ESLint → No
[c] Tailwind CSS → Yes
[d] src → No (Por lo general siempre ponemos que si, pero esto es para probar algo nuevo)
[e] App Router → Yes
[f] alias → No
2. Como es una version alpha (Agosto 2023) de los Server Actions hay que activarlas, quizas mas adelante ya no sea necesario ► Agregamos el siguiente objeto en el archivo `next.config.js`
```s
experimental: {
    serverActions: true,
},
```
3. Levantamos la pagina con `yarn dev`

# BASE DE DATOS
En este caso vamos a usar Prisma y MongoDB como la base de datos
1. Instalamos Prisma ► yarn add prisma -DE
2. Inicializamos Prisma ► npx prisma init
3. Esto nos crea una variable de entorno en el archivo `.env` y nos crea la carpeta `prisma`
[a] Dentro del archivo `prisma/schema.prima` vamos a reemplazar el provider de la db con la base de datos que vamos a utilizar, en este caso MongoDB
[b] Vamos a MongoDB
[`b.1`] Creamos un nuevo proyecto
[`b.2`] Elegimos la opcion 'MongoDB for VS Code' para conectar la base de datos
[`b.3`] Copiamos la url y la pegamos en la variable de entorno que se creo en el archivo `.env`
[c] Creamos el primer schema para los Todo en el archivo `prisma/schema.prima`
4. Instalamos Prisma Client el cual nos va a dar los metodos para poder hacer modificaciones en la base de datos, por ejemplo agregar, modificar o elimiar un Todo ► yarn add @prisma/client
5. Instalamos el prisma generate ► npx prisma generate
6. Cada vez que se quiera hacer una modificacion a la base de datos hay que iniciaizar prisma. Para eso creamos el archivo `libs\prismadb.ts` en donde inicializamos primsma, entonces cada vez que querramos hacer una modificacion va a verificar si prisma ya esta inicializado, en caso de que lo este va a utilizar esa base de datos y en caso de que no la va a inicializar
