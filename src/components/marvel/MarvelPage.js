import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const MarvelPage = (publisher) => {

    const app = 'Marvel Comics'

    return (
        <div>
            <h1>Marvel</h1>
            <hr/>

            <HeroeList publisher={app}/>

        </div>
    )
}
