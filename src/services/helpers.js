const fn = {
  capitaliseEachWord: function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase();
    });
  }
};
