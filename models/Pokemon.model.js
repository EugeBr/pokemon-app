const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        default: 0
    },
    height: {
        type: Number,
        default: 0
    }
});

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;