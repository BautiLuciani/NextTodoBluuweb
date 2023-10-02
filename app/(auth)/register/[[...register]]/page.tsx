/* Vamos a utlizar el register que viene por defecto de clerk
Es importante mantener el orden de las carpetas → register/[[...register]]/page.tsx */

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}

