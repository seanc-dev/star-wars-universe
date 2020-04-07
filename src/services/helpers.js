const helpers = {
  capitaliseEachWord: function (str) {
    return str.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  },
};
export default helpers;
