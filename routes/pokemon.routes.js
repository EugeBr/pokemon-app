const router = require("express").Router();
const Pokemon = require('../models/Pokemon.model');

//C(R)UD -> retrieve all the information
router.get("/", async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        console.log(pokemons);
        res.render('./pokemons/pokemons-list', { pokemons });
    } catch (error) {
        console.error(error);
    }
});

//C(R)UD -> retrieve one document
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        //*same as const id = req.params.id;
        const pokemon = await Pokemon.findById(id);

        res.render('./pokemons/pokemons-details', { pokemon });
        //*if we put {pokemon} ==> in the view we have to put: {{pokemon.name}}, {{pokemon.image}}, ..
        //*if we put pokemon ==> in the view we have to put: {{name}}, {{image}}, ..
        //!both ways are correct for sending JUST ONE element.
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;