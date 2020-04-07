import fn from "../NodeList.helperFuncs";

const schema = {
  displayFieldName: {
    allFilms: "title",
    allPersons: "name",
    allSpecies: "name",
    allPlanets: "name",
    allVehicles: "name",
    allStarships: "name"
  },
  additionalDetail: {
    allFilms: [
      {
        displayName: "Directed by",
        fieldName: "director"
      },
      {
        displayName: "Released",
        fieldName: "releaseDate",
        accessFn: fn.toDateStr
      },
      {
        displayName: "Episode",
        fieldName: "episodeId"
      }
    ],
    allPersons: [
      {
        displayName: "Species",
        fieldName: "species",
        accessFn: fn.nameInObjectInArray
      },
      {
        displayName: "Homeworld",
        fieldName: "homeworld",
        accessFn: fn.nameInObject
      },
      {
        displayName: "Film Appearances",
        fieldName: "films",
        accessFn: fn.countArrayElements
      }
    ],
    allSpecies: [],
    allPlanets: [],
    allVehicles: [],
    allStarships: []
  },
  sortingFunctions: {
    allPersons: [
      {
        displayName: "Name",
        fn: function(a, b) {
          return a.name.localeCompare(b.name);
        }
      }
    ],
    allFilms: [
      {
        displayName: "Release Date",
        fn: function(a, b) {
          return new Date(b.date) - new Date(a.date);
        }
      },
      {
        displayName: "Title",
        fn: function(a, b) {
          return a.title.localeCompare(b.title);
        }
      }
    ],
    allPlanets: [
      {
        displayName: "Name",
        fn: function(a, b) {
          return a.name.localeCompare(b.name);
        }
      },
      {
        displayName: "Most Populous",
        fn: function(a, b) {
          return b.population - a.population;
        }
      }
    ],
    allSpecies: [
      {
        displayName: "Name",
        fn: function(a, b) {
          return a.name.localeCompare(b.name);
        }
      },
      {
        displayName: "Classification",
        fn: function(a, b) {
          return a.classification.localeCompare(b.classification);
        }
      }
    ],
    allVehicles: [
      {
        displayName: "Name",
        fn: function(a, b) {
          return a.name.localeCompare(b.name);
        }
      },
      {
        displayName: "Model",
        fn: function(a, b) {
          return a.model.localeCompare(b.model);
        }
      }
    ],
    allStarships: [
      {
        displayName: "Name",
        fn: function(a, b) {
          return a.name.localeCompare(b.name);
        }
      },
      {
        displayName: "Class",
        fn: function(a, b) {
          return a.class.localeCompare(b.class);
        }
      }
    ]
  }
};

export default schema;
