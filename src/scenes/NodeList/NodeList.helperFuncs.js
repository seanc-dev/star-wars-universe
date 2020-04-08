import helpers from "../../services/helpers";

const nullDataStr = "No data";

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
  numberWithCommas: function (x) {
    if (!x) return nullDataStr;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  concatArray: function (arr) {
    if (!arr) return nullDataStr;
    return helpers.capitaliseEachWord(arr.join(", "));
  },
  appendPercentage: function (num) {
    if (!num) return nullDataStr;
    return `${num}%`;
  },
  capitaliseEachWord: function (str) {
    if (!str) return nullDataStr;
    return str.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  },
  speedInKPH: function (num) {
    const numberWithCommas = function (x) {
      if (!x) return nullDataStr;
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    if (!num) return nullDataStr;
    return `${numberWithCommas(num)} kph`;
  },
};

export default fn;
