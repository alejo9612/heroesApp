import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroesById } from '../../selectors/getHeroesById';
//import batman from '../../assets/heroes/dc-batman';

//const heroImagenes = require.context('../../assets/heroes',true); declaración de weepack

export const HeroesPage = ({history}) => {

    const {heroeId} = useParams();

    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId])
    //const heroe = getHeroesById(heroeId);

    if (!heroe) {
        return <Redirect to="/"/>
    }

    const handleReturn = () =>{

        if (history.length <=2) {
            history.push('/');
        }else{
            history.goBack(); //me redirecciona al menu en el que este
        }
    }

    const {superhero, alter_ego, first_appearance, characters, publisher} = heroe;

    // console.log(history);
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} //con la imagenes en la carpeta Public assets
                     //src={batman} con la importacción de batman del asset dentro de src
                     //src={heroImagenes(`./${heroeId}.jpg`)} //importación propia del weepack
                     alt={superhero}
                     className="img-thumbnail animate__animated animate__fadeInUp"
                />
            </div>
            <div className="col-8">
                <h5>{superhero}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-primary"
                        onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
            
        </div>
    )
}
