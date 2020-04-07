import fn from "../NodeList.helperFuncs";

const schema = {
  displayFieldName: {
    allFilms: "title",
    allPersons: "name",
    allSpecies: "name",
    allPlanets: "name",
    allVehicles: "name",
    allStarships: "name",
  },
  additionalDetail: {
    allFilms: [
      {
        displayName: "Director:",
        fieldName: "director",
      },
      {
        displayName: "Release Date:",
        fieldName: "releaseDate",
        accessFn: fn.toDateStr,
      },
      {
        displayName: "Episode",
        fieldName: "episodeId",
      },
    ],
    allPersons: [
      {
        displayName: "Species:",
        fieldName: "species",
        accessFn: fn.nameInObjectInArray,
      },
      {
        displayName: "Homeworld:",
        fieldName: "homeworld",
        accessFn: fn.nameInObject,
      },
      {
        displayName: "Film Appearances:",
        fieldName: "films",
        accessFn: fn.countArrayElements,
      },
    ],
    allPlanets: [
      {
        displayName: "Population:",
        fieldName: "population",
        accessFn: fn.numberWithCommas,
      },
      {
        displayName: "Terrain Type:",
        fieldName: "terrain",
        accessFn: fn.concatArray,
      },
      {
        displayName: "Surface Water:",
        fieldName: "surfaceWater",
        accessFn: fn.appendPercentage,
      },
    ],
    allSpecies: [
      {
        displayName: "Average Lifespan",
        fieldName: "averageLifespan",
        accessFn: fn.numberWithCommas,
      },
      {
        displayName: "Classification",
        fieldName: "classification",
        accessFn: fn.capitaliseEachWord,
      },
      {
        displayName: "Language",
        fieldName: "language",
        accessFn: fn.capitaliseEachWord,
      },
    ],
    allVehicles: [
      {
        displayName: "Class",
        fieldName: "class",
        accessFn: fn.capitaliseEachWord,
      },
      {
        displayName: "Manufacturer/s",
        fieldName: "manufacturer",
        accessFn: fn.concatArray,
      },
      {
        displayName: "Max Speed",
        fieldName: "maxAtmospheringSpeed",
        accessFn: fn.speedInKPH,
      },
    ],
    allStarships: [
      {
        displayName: "Model",
        fieldName: "model",
        accessFn: fn.capitaliseEachWord,
      },
      {
        displayName: "Manufacturer",
        fieldName: "manufacturer",
        accessFn: fn.concatArray,
      },
      {
        displayName: "Max Atmospheric Speed",
        fieldName: "maxAtmospheringSpeed",
        accessFn: fn.speedInKPH,
      },
    ],
  },
  sortingFunctions: {
    allPersons: [
      {
        displayName: "Name",
        fn: function (a, b) {
          return a.name.localeCompare(b.name);
        },
      },
    ],
    allFilms: [
      {
        displayName: "Episode Number",
        fn: function (a, b) {
          return a.episodeId - b.episodeId;
        },
      },
      {
        displayName: "Release Date",
        fn: function (a, b) {
          return new Date(b.date) - new Date(a.date);
        },
      },
      {
        displayName: "Title",
        fn: function (a, b) {
          return a.title.localeCompare(b.title);
        },
      },
    ],
    allPlanets: [
      {
        displayName: "Name",
        fn: function (a, b) {
          return a.name.localeCompare(b.name);
        },
      },
      {
        displayName: "Most Populous",
        fn: function (a, b) {
          return b.population - a.population;
        },
      },
    ],
    allSpecies: [
      {
        displayName: "Name",
        fn: function (a, b) {
          return a.name.localeCompare(b.name);
        },
      },
      {
        displayName: "Classification",
        fn: function (a, b) {
          return a.classification.localeCompare(b.classification);
        },
      },
    ],
    allVehicles: [
      {
        displayName: "Name",
        fn: function (a, b) {
          return a.name.localeCompare(b.name);
        },
      },
      {
        displayName: "Model",
        fn: function (a, b) {
          return a.model.localeCompare(b.model);
        },
      },
    ],
    allStarships: [
      {
        displayName: "Name",
        fn: function (a, b) {
          return a.name.localeCompare(b.name);
        },
      },
      {
        displayName: "Class",
        fn: function (a, b) {
          return a.class.localeCompare(b.class);
        },
      },
    ],
  },
};

export default schema;
