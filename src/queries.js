import { gql } from "apollo-boost";

const queries = {
  person: id => {
    return gql`
    {
      Person(id: "${id}") {
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
  `;
  },
  film: id => {
    return gql`
    Film (id: "cj0nxmy3fga5s01148gf8iy3c") {
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
    }`;
  },
  planet: id => {
    gql`
    Planet (id: ${id}) {
      id
      name
      population
      climate
      terrain
      surfaceWater
      gravity
      diameter
      orbitalPeriod
      rotationPeriod
      films {
        id
        name
      }
      residents {
        id
        name
      }
    }`;
  }
  // getSpeciesById: (id) => {
  //   gql`
  //   Species (id: ${id} {

  //   })`
  // }
};

export default queries;
