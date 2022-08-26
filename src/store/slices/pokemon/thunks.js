import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar peticion http
        // data-pokemons
        // const resp = fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }` );

        // const data = await (await resp).json();
        // console.log(data);

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        console.log(data);


        dispatch( setPokemon({ pokemons: data.results, page: page + 1 }) );

    }

}