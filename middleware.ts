/* En caso de tener la carpeta src el middleware debe estar ubicado ahi dentro
Como en este caso no tenemos esa carpeta el middleware debe estar ubicado en la raiz del proyecto
Utilizamos la siguiente configuracion que viene de la pagina oficial de clerk */

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
