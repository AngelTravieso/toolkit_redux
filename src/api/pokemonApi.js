import axios from 'axios';

// Crea una configuracion estandar para no repetir codigo
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})