import { heroes } from "../data/heroes";

export const getHeroesById = (id) => {
    
    //Recorremos los id y localizamos el que necesitamos de manera idonea
    return heroes.find(heroe => heroe.id === id);
}


