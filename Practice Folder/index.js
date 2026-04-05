let name = {
  firstName: "Hisam",
  lastName: "C",
};

let printName = function (hometown, city) {
  console.log(this.firstName + " " + this.lastName, hometown, city);
};

// Normal Way
let bindFunction = printName.bind(name, "kalyan");
bindFunction("Mumhai");

// Implementation
Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

let myBindFunction = printName.myBind(name, "Thane");
myBindFunction("Mumbai");
