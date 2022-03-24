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

// let novosCarros = [];

// let n = 3;
// novosCarros = carros.splice(0, n);
// console.log(novosCarros)

// let obj = {
//   a1: {
//     name: "CAPITÃO AMÉRICA",
//     image: "./images/cards/a2.jpg",
//     attribute: {
//       força: 3,
//       velocidade: 2,
//       habilidade: 6,
//       equipamento: 2,
//       inteligência: 3,
//     },
//   },
// };

// console.log(Object.keys(obj)[0] == 'a1');

// let arr = [1, 2, 3];

// [a, b, c] = arr;

// console.log(arr);


var items = [1, 2, 3, 4, 5];
var newItems = [];

for (var i = 0; i < 3; i++) {
  var idx = Math.floor(Math.random() * items.length);
  newItems.push(items[idx]);
  items.splice(idx, 1);
}

console.log(newItems);








