"use client"

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FaSpinner } from 'react-icons/fa'

const FormButton = () => {

    /* Para usar el pending de esta libreria si o si debemos estar en un componente aparte */
    const { pending } = useFormStatus()

    return (
        <button 
            type="submit" 
            className="border border-gray-400 rounded w-28 p-2 grid place-items-center"
            disabled={ pending }
        >
            {
                pending ? (
                /* Utilizamos el icono de react-icons y las animaciones de tailwind para crear un spinner
                Para utilizar los iconos debemos instalar la libreria react-icons ► yarn add react-icons */
                <span className='block animate-spin'>
                    <FaSpinner className='transform rotate-90'/>
                </span> 
                ) : (
                    'Add'
                )
            }
        </button>
    )
}

export default FormButton