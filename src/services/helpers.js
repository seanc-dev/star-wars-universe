const nullDataStr = "No data";

const helpers = {
  capitaliseEachWord: function (str) {
    if (!str) return nullDataStr;
    str = str.toLowerCase();
    return str.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  },
  numberWithCommas: function (x) {
    if (!x) return nullDataStr;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};

const fn = {
  nameInObject: (obj) => {
    if (!obj || !obj.name) return nullDataStr;
    return obj.name;
  },
  nameInObjectInArray: (arr) => {
    if (!arr || !arr[0] || !arr[0].name) return nullDataStr;
    return arr[0].name;
  },
  countArrayElements: (arr) => {
    if (!arr) return nullDataStr;
    return arr.length;
  },
  toDateStr: (dt) => {
    if (!dt) return nullDataStr;
    let date = new Date(dt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },
  numberWithCommas: helpers.numberWithCommas,
  concatArray: function (arr) {
    if (!arr) return nullDataStr;
    return helpers.capitaliseEachWord(arr.join(", "));
  },
  appendPercentage: function (num) {
    if (!num) return nullDataStr;
    return `${num}%`;
  },
  appendCentimeters: function (num) {
    if (!num) return nullDataStr;
    return `${num}cm`;
  },
  appendKilograms: function (num) {
    if (!num) return nullDataStr;
    return `${num}kg`;
  },
  appendYears: function (num) {
    if (!num) return nullDataStr;
    return `${num} years`;
  },
  capitaliseEachWord: helpers.capitaliseEachWord,
  speedInKPH: function (num) {
    if (!num) return nullDataStr;
    return `${helpers.numberWithCommas(num)} kph`;
  },
  printOpeningCrawl: function (text) {
    if (!text) return nullDataStr;
    const div = document.createElement("div");
    const textNode = document.createTextNode(text);
    return div.appendChild(textNode);
  },
};

export default fn;
