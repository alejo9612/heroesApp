import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcPage = (publisher) => {

   const app = 'DC Comics'

    return (
        <div>
            <h1>DC</h1>
            <hr/>
            
            <HeroeList publisher={app}/>

        </div>
    )
}
