import React,{useMemo} from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

    //esto lo que hace es que me memorizará la función que necesito solo basandose de la función ya descrita y comenta
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    //const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map(heroe => (
                    <HeroeCard key={heroe.id}   
                        {...heroe}
                    >
                    </HeroeCard>
                ))
            }
        </div>
    )
}
