const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema goes here.
  # The schema should model the full data object available!

  type Weight {
    minimum: String
    maximum: String
  }

  type Height {
    minimum: String
    maximum: String
  }

  type PrevEvolutions {
    id: Int
    name: String
  }

  type evolRequirements {
    amount: Int
    name: String
  }

  type Evolutions {
    id: Int
    name: String
  }

  type fastAttacks {
    name: String
    type: String
    damage: Int
  }

  type specialAttacks {
    name: String
    type: String
    damage: Int
  }

  type Attacks {
    fast: [fastAttacks]
    special: [specialAttacks]
  }

  type Pokemon {
    id: String!
    name: String!
    classification: String
    types: [String]
    resistant: [String]
    weight: Weight
    height: Height
    fleeRate: Float
    previousEvolutions: [PrevEvolutions]
    evolutionRequirements: evolRequirements
    evolutions: [Evolutions]
    maxCP: Int
    maxHP: Int
    attacks: Attacks
  }

  input WeightInput {
    minimum: String
    maximum: String
  }

  input HeightInput {
    minimum: String
    maximum: String
  }

  input PrevEvolutionsInput {
    id: Int
    name: String
  }

  input evolRequirementsInput {
    amount: Int
    name: String
  }

  input EvolutionsInput {
    id: Int
    name: String
  }

  input fastAttacksInput {
    name: String
    type: String
    damage: Int
  }

  input specialAttacksInput {
    name: String
    type: String
    damage: Int
  }

  input AttacksInput {
    fast: [fastAttacksInput]
    special: [specialAttacksInput]
  }

  input PokemonInput {
    id: String!
    name: String!
    classification: String
    types: [String]
    resistant: [String]
    weight: WeightInput
    height: HeightInput
    fleeRate: Float
    previousEvolutions: [PrevEvolutionsInput]
    evolutionRequirements: evolRequirementsInput
    evolutions: [EvolutionsInput]
    maxCP: Int
    maxHP: Int
    attacks: AttacksInput
  }

  type Query {
    Pokemons: [Pokemon]
    Pokemon(name: String, id: String): Pokemon
    Types: [String]
    getAttacksByType(type: String): [fastAttacks]
    getPokemonByType(typeName: String): [Pokemon]
    getPokemonByAttack(attackName: String): [Pokemon]
  }

  type Mutation {
    addPokemon(input: PokemonInput): String
  }
`;

module.exports = typeDefs;
