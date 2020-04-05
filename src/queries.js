import { gql } from "apollo-boost";

const queries = {
  person: gql`
    query Person($id: ID!) {
      Person(id: $id) {
        id
        name
        hairColor
        eyeColor
        skinColor
        gender
        mass
        height
        birthYear

        homeworld {
          id
          name
        }
        films {
          id
          title
        }
        species {
          id
          name
        }
        starships {
          id
          name
        }
        vehicles {
          id
          name
        }
      }
    }
  `,
  film: gql`
    query Film($id: ID!) {
      Film(id: $id) {
        id
        title
        director
        openingCrawl
        releaseDate
        characters {
          name
          id
        }
        planets {
          name
          id
        }
        species {
          name
          id
        }
        starships {
          name
          id
        }
        vehicles {
          name
          id
        }
      }
    }
  `
  // planet: gql`{
  //   Planet ($id: ID!) {
  //     id
  //     name
  //     population
  //     climate
  //     terrain
  //     surfaceWater
  //     gravity
  //     diameter
  //     orbitalPeriod
  //     rotationPeriod
  //     films {
  //       id
  //       name
  //     }
  //     residents {
  //       id
  //       name
  //     }
  //   }}`
  // getSpeciesById: (id) => {
  //   gql`
  //   Species (id: ${id} {

  //   })`
  // }
};

export default queries;
