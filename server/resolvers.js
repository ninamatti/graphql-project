// The data below is mocked.
const data = require("./data");

module.exports = {
  Query: {
    Pokemons: () => {
      return data.pokemon;
    },
    Pokemon: (parent, args) => {
      if (isNaN(Number(args.id))) {
        return data.pokemon.find((pokemon) => pokemon.name === args.name);
      } else {
        return data.pokemon.find((pokemon) => pokemon.id === args.id);
      }
    },
    Types: (parent, args) => {
      return data.types;
    },
    FastAttacks: (parent, args) => {
      return data.attacks.fast;
    },
    Attacks: (parent, args) => {
      return data.attacks;
    },
  },
};
