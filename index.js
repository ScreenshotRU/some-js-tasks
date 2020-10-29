//1 TASK: sum(2,3) == sum(2)(3) == 5

//First solution (unc if need to test)

// function sum(a, b) {
//   if (b) {
//     return a + b;
//   }

//   return function (c) {
//     return a + c;
//   };
// }

//Second solution (unc if need to test)

// function sum(...args) {
//   if (args.length === 2) {
//     return args[0] + args[1];
//   }
//   return function (b) {
//     return args[0] + b;
//   };
// }

//Unc if need to test:

// console.log(sum(2, 3));
// console.log(sum(2)(3));

//===========================================

//2 TASK

/*
const sum = (x,y) => x + y;
const plusTen = sum.bind2(undefined, 10);
plusTen(1) //11
plusTen(10); //20
*/

const sum = (x, y) => x + y;

Function.prototype.bind2 = function (context, ...args) {
  return (...args2) => {
    return this.apply(context, args.concat(args2));
  };
};

const plusTen = sum.bind2(undefined, 10);
console.log(plusTen(1)); //11
console.log(plusTen(10)); //20
