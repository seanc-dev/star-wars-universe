import react from "react";
import fn from "../../../services/helpers";

const schema = {
  Person: {
    displayFieldName: "name",
    details: [
      {
        detailDimensionDisplayName: "Identity",
        detailsArray: [
          {
            detailFieldName: "birthYear",
            detailDisplayName: "Birth Year",
          },
          {
            detailFieldName: "gender",
            detailDisplayName: "Gender",
            accessFn: fn.capitaliseEachWord,
          },
        ],
      },
      {
        detailDimensionDisplayName: "Demographic Info",
        detailsArray: [
          {
            detailFieldName: "height",
            detailDisplayName: "Height",
            accessFn: fn.appendCentimeters,
          },
          {
            detailFieldName: "mass",
            detailDisplayName: "Mass",
            accessFn: fn.appendKilograms,
          },
          {
            detailFieldName: "hair_color",
            detailDisplayName: "Hair Color",
            accessFn: fn.concatArray,
          },
          {
            detailFieldName: "skin_color",
            detailDisplayName: "Skin Color",
            accessFn: fn.concatArray,
          },
          {
            detailFieldName: "eye_color",
            detailDisplayName: "Eye Color",
            accessFn: fn.concatArray,
          },
        ],
      },
    ],
    connectionsArray: [6, 2, 3, 4, 5],
  },
  Species: {
    displayFieldName: "name",
    details: [
      {
        detailDimensionDisplayName: "Species Demographics",
        detailsArray: [
          {
            detailFieldName: "average_height",
            detailDisplayName: "Average Height",
            accessFn: fn.appendCentimeters,
          },
          {
            detailFieldName: "skin_colors",
            detailDisplayName: "Skin Colors",
            accessFn: fn.concatArray,
          },
          {
            detailFieldName: "hair_colors",
            detailDisplayName: "Hair Colors",
            accessFn: fn.concatArray,
          },
          {
            detailFieldName: "eye_colors",
            detailDisplayName: "Eye Colors",
            accessFn: fn.concatArray,
          },
          {
            detailFieldName: "average_lifespan",
            detailDisplayName: "Average Lifespan",
            accessFn: fn.appendYears,
          },
        ],
      },
      {
        detailDimensionDisplayName: "Other Information",
        detailsArray: [
          {
            detailFieldName: "classification",
            detailDisplayName: "Classification",
            accessFn: fn.capitaliseEachWord,
          },
          {
            detailFieldName: "designation",
            detailDisplayName: "Designation",
            accessFn: fn.capitaliseEachWord,
          },
          {
            detailFieldName: "language",
            detailDisplayName: "Language",
            accessFn: fn.capitaliseEachWord,
          },
        ],
      },
    ],
    connectionsArray: [2, 6, 7],
  },
  Film: {
    displayFieldName: "title",
    detailsDimensions: [
      {
        detailDimensionDisplayName: "Details",
        detailsArray: [
          {
            detailFieldName: "title",
            detailDisplayName: "Title",
            accessFn: fn.capitaliseEachWord,
          },
          {
            detailFieldName: "director",
            detailDisplayName: "Director",
            accessFn: fn.capitaliseEachWord,
          },
          {
            detailFieldName: "releaseDate",
            detailDisplayName: "Release Date",
          },
          {
            detailFieldName: "openingCrawl",
            detailDisplayName: "Opening Crawl",
            accessFn: fn.printOpeningCrawl,
          },
        ],
      },
    ],
    connections: [0, 1, 3, 4, 5],
  },
};

export default schema;
