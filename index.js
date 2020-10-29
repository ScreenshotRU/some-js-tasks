// sum(2,3) == sum(2)(3) == 5

// function sum(a, b) {
//   if (b) {
//     return a + b;
//   }

//   return function (c) {
//     return a + c;
//   };
// }

function sum(...args) {
  if (args.length === 2) {
    return args[0] + args[1];
  }
  return function (b) {
    return args[0] + b;
  };
}

console.log(sum(2, 3));
console.log(sum(2)(3));
