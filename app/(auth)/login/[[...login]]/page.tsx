/* Vamos a utlizar el login que viene por defecto de clerk
Es importante mantener el orden de las carpetas → login/[[...login]]/page.tsx */

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
