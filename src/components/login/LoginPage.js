import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin=()=>{

        const lastPath = localStorage.getItem('lastPath')||'/';

        //history.push('/'); me redirecciona
        dispatch({
            type: types.login,
            payload: {
                name:'Carnaval'
            }
        });

        history.replace(lastPath);
        //history.replace('/');//me redirecciona y elimina el historial anterior de la page
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button className="btn btn-success"
                    onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
