import axios from "axios";

import schema from "../displaySchema.json";

const fn = {
  capitaliseEachWord: function(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
};

export default fn;
