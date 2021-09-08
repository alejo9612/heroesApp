import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    //llamamos el useContext y lo desestructuramos, también desestructuramos lo que trae la primera desestructuracion
    const {user:{name}, dispatch} = useContext(AuthContext);
    //console.log(name)

    //Este es un hook del react ruter el cual nos provee la información que necesitamos del history cuando la requerimos
    const history= useHistory();

    const handlelogout = () =>{
        
        history.replace('/login');
        //me dispara de nuevo el state del reducer con los valores iniciales, deslogando a mi usuario
        dispatch({
            type: types.logout
            //name
        });

        
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src={`../assets/heroes/marvel-icono.png`} 
                     style={{maxWidth:100}}
                     alt="Marvel"
                />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        <b>Marvel</b>
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        <b>DC</b>
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Buscar"
                    >
                        <b>Buscar</b>
                    </NavLink>
                </div>
            </div>

            <div className="d-flex collapse order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-link text-info">
                        {name}
                    </span>

                    <button className="nav-link nav-link btn btn-outline-dark"
                            onClick={handlelogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}