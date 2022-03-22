let carros = ["fusca", "gol", "opala", "chevette"];

// let novosCarros = [];

// let n = carros.length / 2;
// let interate = carros.length;
// for (let i = 0; i < n; i++) {
//   idx = Math.floor(Math.random() * interate);
//   novosCarros.push(carros.splice(idx, 1)[0]);
//   interate--;
// }
// // console.log(carros);
// // console.log(novosCarros);

// const arr = ['css', 'js', 'ts'];

// const fromIndex = arr.indexOf('css'); // 👉️ 0
// const toIndex = 2;

// const element = arr.splice(0, 1);
// console.log(element); // ['css']

// arr.splice(toIndex, 0, element);

// console.log(arr); // 👉️ ['js', 'ts', 'css']

let novosCarros = [];

let n = 3;
novosCarros = carros.splice(0, n);
console.log(novosCarros)
