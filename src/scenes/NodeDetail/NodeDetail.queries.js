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
  `,
  Planet: gql`
    query Planet($id: ID!) {
      Planet(id: $id) {
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
      }
    }
  `,
  Species: gql`
    query Species($id: ID!) {
      Species(id: $id) {
        averageHeight
        averageLifespan
        classification
        designation
        eyeColor
        films {
          id
          title
        }
        hairColor
        id
        language
        name
        people {
          id
          name
        }
        skinColor
      }
    }
  `,
  Startship: gql`
    query Starship($id: ID!) {
      Startship(id: $id) {
        cargoCapacity
        class
        consumables
        costInCredits
        crew
        films {
          id
          title
        }
        hyperdriveRating
        id
        length
        manufacturer
        maxAtmospheringSpeed
        mglt
        name
        passengers {
          id
          name
        }
        pilots {
          id
          name
        }
      }
    }
  `,
  Vehicle: gql`
    query Vehicle($id: ID!) {
      Vehicle(id: $id) {
        cargoCapacity
        class
        consumables
        costInCredits
        crew
        films {
          id
          title
        }
        id
        length
        manufacturer
        maxAtmospheringSpeed
        model
        name
        passengers {
          id
          name
        }
        pilots {
          id
          name
        }
      }
    }
  `
};

export default queries;
