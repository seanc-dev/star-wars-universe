const fn = {
  nameInObject: obj => {
    debugger;
    return obj.name;
  },
  nameInObjectInArray: arr => {
    return arr[0].name;
  },
  countArrayElements: arr => {
    return arr.length;
  },
  toDateStr: dt => {
    let date = new Date(dt);
    console.log(date);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
};

export default fn;
