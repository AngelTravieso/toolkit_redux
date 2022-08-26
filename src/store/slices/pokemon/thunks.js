import { setPokemon, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar peticion http
        // data-pokemons

        // dispatch( setPokemon() );

    }

}