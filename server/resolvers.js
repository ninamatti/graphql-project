// The data below is mocked.
const { pokemon } = require("./data");
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
    getAttacksByType: (parent, args) => {
      if (args.type === "fast") {
        return data.attacks.fast;
      } else {
        return data.attacks.special;
      }
    },
    getPokemonByType: (parent, args) => {
      return data.pokemon.filter((pokemon) =>
        pokemon.types.includes(args.typeName)
      );
    },
    getPokemonByAttack: (parent, args) => {
      console.log("args: ", args.attackName);
      let result = [];
      for (let pokemon of data.pokemon) {
        if (pokemon.attacks !== undefined) {
          for (let attack of pokemon.attacks.fast) {
            if (attack.name === args.attackName) {
              result.push(pokemon);
            }
          }
          for (let attack of pokemon.attacks.special) {
            if (attack.name === args.attackName) {
              result.push(pokemon);
            }
          }
        }
      }
      return result;
    },
  },
  Mutation: {
    addPokemon: (parent, args) => {
      console.log("args: ", args);
      data.pokemon.push(args.input);
      return `Successfully added ${args.input.name}`;
    },
  },
};
