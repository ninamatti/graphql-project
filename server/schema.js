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

  type Query {
    Pokemons: [Pokemon]
    Pokemon(name: String!): Pokemon
  }
`;

module.exports = typeDefs;
