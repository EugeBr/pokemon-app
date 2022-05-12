const pokemons = require('../data/pokemons'); //*require data
const Pokemon = require('../models/Pokemon.model'); //*require model
require('../db'); //*require db

const pokemonSeed = async () => {
    try {
        await Pokemon.create(pokemons);
        console.log(`${pokemons.length} pokemons created`)
    }catch(err){
        console.error(err);
    }
}

pokemonSeed();