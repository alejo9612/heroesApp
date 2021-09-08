import { useState } from "react";

//Creamos una función la cual nos va almacenar el hook que requerimos para poder visualizar en el FormWithCustomHook
export const useForm = (initialState={}) => {
    
    //dejamos un value como objeto vacio el cual se le dará valor en FormWithCustomHook
    const [Values, setValues] = useState(initialState)

    //Creamos el reset de la app de formulaio para que al ingresar los datos se elimine el dato
    const reset = () =>{
        setValues(initialState);
    }

    //creamos la función que luego llamaremos
    const handleInputChange = ({target}) =>{
        setValues({
            ...Values,
            [target.name]: target.value
        });
    }

    //retornamos tanto el objeto vacio como la función que creamos
    return [Values, handleInputChange, reset];
}