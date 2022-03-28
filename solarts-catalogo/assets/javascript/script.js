const produtos = [
  {
    name: "Ábaco aberto com 50 argolas",
    image: "./assets/images/001.jpg",
    measure: "",
    price: "34,00",
  },
  {
    name: "Ábaco fechado com 40 argolas",
    image: "./assets/images/002.jpg",
    measure: "",
    price: "39,00",
  },
  {
    name: "Alfabeto móvel com 40 letras para pintura",
    image: "./assets/images/015.jpg",
    measure: "",
    price: "35,00",
  },
  {
    name: "Alinhavo Números",
    image: "./assets/images/014.jpg",
    measure: "",
    price: "49,00",
  },
  {
    name: "Alinhavo Vogais",
    image: "./assets/images/013.jpg",
    measure: "",
    price: "35,00",
  },
  {
    name: "Caixa Cubo formas geométricas",
    image: "./assets/images/011.jpg",
    measure: "",
    price: "69,00",
  },
  {
    name: "Caixa encaixe formas geométricas",
    image: "./assets/images/010.jpg",
    measure: "",
    price: "42,00",
  },
  {
    name: "Encaixe de 9 formas",
    image: "./assets/images/021.jpg",
    measure: "",
    price: "34,00",
  },
  {
    name: "Encaixe de 6 formas",
    image: "./assets/images/025.jpg",
    measure: "",
    price: "30,00",
  },
  {
    name: "Encaixe de 3 formas (quadrado ou círculo)",
    image: "./assets/images/024.jpg",
    measure: "",
    price: "22,00",
  },
  {
    name: "Escada pedagógica colorida",
    image: "./assets/images/029.jpg",
    measure: "",
    price: "38,00",
  },
  {
    name: "Jogo da Velha (Diversas cores)",
    image: "./assets/images/009.jpg",
    measure: "",
    price: "25,00",
  },
  {
    name: "Jogo Resta Um",
    image: "./assets/images/019.jpg",
    measure: "",
    price: "35,00",
  },
  {
    name: "Pareamento de cores e tamanho",
    image: "./assets/images/026.jpg",
    measure: "",
    price: "29,00",
  },
  {
    name: "Prancha de Seleção",
    image: "./assets/images/020.jpg",
    measure: "",
    price: "40,00",
  },
  {
    name: "Quebra-cabeça puzzle colorido",
    image: "./assets/images/027.jpg",
    measure: "",
    price: "42,00",
  },
  {
    name: "Tabuleiro alfabeto de encaixe",
    image: "./assets/images/005.jpg",
    measure: "",
    price: "44,00",
  },
  {
    name: "Tabuleiro animais de encaixe",
    image: "./assets/images/016.jpg",
    measure: "",
    price: "40,00",
  },
  {
    name: "Tabuleiro educativo montessoriano (alfabeto, números com 55 argolas coloridas)",
    image: "./assets/images/007.jpg",
    measure: "",
    price: "115,00",
  },
  {
    name: "Tabuleiro educativo montessoriano (alfabeto e números)",
    image: "./assets/images/008.jpg",
    measure: "",
    price: "75,00",
  },
  {
    name: "Tabuleiro Números com argolas",
    image: "./assets/images/006.jpg",
    measure: "",
    price: "69,00",
  },
  {
    name: "Tabuleiro Numeral 1 a 5 gravado com argolas",
    image: "./assets/images/012.jpg",
    measure: "",
    price: "32,00",
  },
  {
    name: "Tabuleiro Números",
    image: "./assets/images/003.jpg",
    measure: "",
    price: "28,00",
  },
  {
    name: "Tabuleiro Vogais",
    image: "./assets/images/004.jpg",
    measure: "",
    price: "25,00",
  },
  {
    name: "Tabuleiro Jogo Tetris de montagem quebra-cabeça",
    image: "./assets/images/028.jpg",
    measure: "",
    price: "75,00",
  },
  {
    name: "Tangram",
    image: "./assets/images/018.jpg",
    measure: "",
    price: "32,00",
  },
  {
    name: "Torre de encaixe quadrada",
    image: "./assets/images/030.jpg",
    measure: "",
    price: "20,00",
  },
  {
    name: "Torre de encaixe redonda",
    image: "./assets/images/031.jpg",
    measure: "",
    price: "20,00",
  },
  {
    name: "Torre de Hanoi",
    image: "./assets/images/017.jpg",
    measure: "",
    price: "35,00",
  },
  {
    name: "Tabuleiro encaixe de formas",
    image: "./assets/images/023.jpg",
    measure: "",
    price: "30,00",
  },
  {
    name: "Tabuleiro encaixe de formas diversas",
    image: "./assets/images/022.jpg",
    measure: "",
    price: "38,00",
  },
];

let contentHTML = "";
const tableTr = document.querySelector("#table tr.product-item-total");

for (let produto of produtos) {
  contentHTML += `
  <tr class="product-item">
    <td colspan="2" class="product-item-product">
      <div>
        <img src="${produto.image}" alt="">
        <div class="product-item-product-description">
          <p class="product-item-product-description-title">${produto.name}</p>
          <p>Medidas:${produto.measure}</p>
        </div>
        </div>
    </td>
    <td class="product-item-price"><span>${produto.price}</span></td>
    <td class="product-item-amount"><input class="product-item-amount-input" type="number" min="0" placeholder="0" id="amount"></td>
    <td class="product-item-subtotal"><span class="subtotal" id="subtotal">0,00</span></td>
   </tr>
    `;
}

tableTr.insertAdjacentHTML("beforebegin", contentHTML);

const items = document.querySelectorAll(".product-item");
let cart = document.querySelector("#cart > span");

items.forEach((e) => {
  e.childNodes[5].childNodes[0].addEventListener("change", () => {
    let subtotal = e.childNodes[7].childNodes[0];
    let total = document.getElementById("total");
    let price = e.childNodes[3];
    let amount = e.childNodes[5].childNodes[0];
    let sum = 0;

    subtotal.textContent = (price.textContent.replace(",", ".") * amount.value)
      .toFixed(2)
      .replace(".", ",");

    let subtotals = document.querySelectorAll(".subtotal");
    subtotals.forEach((elem) => {
      sum += parseFloat(elem.textContent.replace(",", "."));
    });
    total.textContent = parseFloat(sum).toFixed(2).replace(".", ",");
    cart.textContent = parseFloat(sum).toFixed(2).replace(".", ",");
  });
});
