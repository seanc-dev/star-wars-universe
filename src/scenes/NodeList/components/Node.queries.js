import { gql } from "apollo-boost";

const queries = {
  Person: gql`
    query {
      allPersons {
        id
        name
        species {
          id
          name
        }
        gender
        birthYear
        homeworld {
          id
          name
        }
        films {
          id
          title
        }
      }
    }
  `,
  Film: gql`
    query {
      allFilms {
        title
        director
        releaseDate
        episodeId
      }
    }
  `,
  Planet: gql`
    query {
      allPlanets {
        id
        name
        population
        terrain
        surfaceWater
        rotationPeriod
        orbitalPeriod
      }
    }
  `,
  Species: gql`
    query {
      allSpecies {
        id
        name
        classification
        designation
        averageLifespan
        language
      }
    }
  `,
  Starship: gql`
    query {
      allStarships {
        id
        name
        class
        manufacturer
        maxAtmospheringSpeed
        crew
        passengers
        cargoCapacity
      }
    }
  `,
  Vehicle: gql`
    query {
      allVehicles {
        id
        name
        model
        manufacturer
        maxAtmospheringSpeed
        crew
        passengers
        cargoCapacity
      }
    }
  `,
};

export default queries;
