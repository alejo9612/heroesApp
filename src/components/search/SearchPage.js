import React, { useMemo } from 'react';
import queryString  from 'query-string';
//import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchPage = ({history}) => {

    const location = useLocation();
    //comprobamos lo que nos almacena el paquete de node
    //console.log(queryString.parse(location.search));
    const {q = ''} = queryString.parse(location.search);

    const [FormValues, handleInputChange] = useForm({
        BuscarText: q
    });

    const {BuscarText} = FormValues;

    //const heroesFiltrados = heroes;
    //const heroesFiltrados = useMemo(() => getHeroesByName(BuscarText), [BuscarText]);
    const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${BuscarText}`)

        // console.log(BuscarText)
    }

    return (
        <div>
            <h1>Buscar Heroe</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form className="d-grid gap-2"
                          onSubmit={handleSubmit}
                    >
                        <input className="form-control"
                               placeholder="Buscar Heroe"
                               type="text"
                               name="BuscarText"
                               autoComplete="off"
                               value={BuscarText}
                               onChange={handleInputChange}
                        />
                        <button className="btn m-1 btn-outline-primary"
                            type="submit"
                        >
                            Buscar..
                    </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '') &&
                        <div className="alert alert-info">
                            Busca un heroe por favor!!
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltrados.length === 0 ) &&
                        <div className="alert alert-danger">
                            El nombre "{q}" no es un superheroe!!
                        </div>
                    }

                    {
                        heroesFiltrados.map(heroe => (
                            <HeroeCard key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
