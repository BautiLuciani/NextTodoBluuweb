import { z } from "zod";

/* Con z.object creamos el schema. z debe venir de zod. */
export const TodoZodSchema = z.object({
    /* Creamos las validaciones de los Todo, en este caso solo necesitamos el title */
    title: z
        .string()
        .trim()
        .min(3, { message: "Todo min 3 carácteres" })
        .max(50, { message: "Todo max 50 carácteres" })
        .nonempty({ message: "Todo no puede estar vacío" })
})

