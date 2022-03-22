let cards = [
  {
    a1: {
      name: "HOMEM DE FERRO",
      image: "./images/cards/a1.jpg",
      attribute: {
        força: 5,
        velocidade: 6,
        habilidade: 2,
        equipamento: 5,
        inteligência: 6,
      },
    },
  },
  {
    a2: {
      name: "CAPITÃO AMÉRICA",
      image: "./images/cards/a2.jpg",
      attribute: {
        força: 3,
        velocidade: 2,
        habilidade: 6,
        equipamento: 2,
        inteligência: 3,
      },
    },
  },
  {
    a3: {
      name: "THOR",
      image: "./images/cards/a3.jpg",
      attribute: {
        força: 6,
        velocidade: 5,
        habilidade: 3,
        equipamento: 3,
        inteligência: 2,
      },
    },
  },
  {
    a4: {
      name: "HULK",
      image: "./images/cards/a4.jpg",
      attribute: {
        força: 6,
        velocidade: 5,
        habilidade: 4,
        equipamento: 1,
        inteligência: 1,
      },
    },
  },
  {
    a5: {
      name: "NICK FURY",
      image: "./images/cards/a5.jpg",
      attribute: {
        força: 1,
        velocidade: 2,
        habilidade: 4,
        equipamento: 6,
        inteligência: 3,
      },
    },
  },
  {
    a6: {
      name: "VIÚVA NEGRA",
      image: "./images/cards/a6.jpg",
      attribute: {
        força: 1,
        velocidade: 2,
        habilidade: 6,
        equipamento: 4,
        inteligência: 3,
      },
    },
  },
];

let divCardPlayer = document.getElementById("cardPlayer");
let divCardMachine = document.getElementById("cardMachine");
let divOptions = document.getElementById("options");
let btnNextCard = document.getElementById("btnNextCard");
let btnViewCards = document.getElementById("viewCards");
let btnGiveCards = document.getElementById("giveCards");
let btnRestart = document.getElementById("restart");
let btnPlay = document.getElementById("play");
let divResults = document.getElementById("results");
let imgCardMachine;
let cardsPlayer = [];
let cardsMachine = [...cards];
let cardPlayer;
let cardMachine;
let givenCards = false;

function giveCards() {
  if (!givenCards) {
    contentHTML = "";
    results.innerHTML = "";
    let n = cards.length / 2;
    let interate = cards.length;
    for (i = 0; i < n; i++) {
      let idx = Math.floor(Math.random() * interate);
      cardsPlayer.push(cardsMachine.splice(idx, 1)[0]);
      interate--;
    }
    results.setAttribute("class", "");
    results.innerHTML = "Cartas distribuídas. Vamos jogar!";
    btnGiveCards.style.display = "none";
    btnViewCards.style.display = "block";

    givenCards = true;
  } else {
    alert("Cartas já foram distribuídas!");
  }
}

function getCardPlayer() {
  // let index = parseInt(Math.random() * cardsPlayer.length);
  index = 0;
  cardPlayer = cardsPlayer[index];
  return cardPlayer;
}

function getCardMachine() {
  // let index = parseInt(Math.random() * cardsMachine.length);
  index = 0;
  cardMachine = cardsMachine[index];
  return cardMachine;
}

function nextCardPlayer() {
  cardPlayer = getCardPlayer();

  contentHTML = "";
  optionsHTML = "";
  results.innerHTML = "";
  results.setAttribute("class", "");
  for (let element in cardPlayer) {
    data = cardPlayer[element];

    contentHTML += `
      <img src="${data.image}" id="imgCardPlayer">
      `;
    optionsHTML = `
      <h2>Escolha seu power!</h2>
      `;
    for (let attribute in data.attribute) {
      optionsHTML += `<p class="attribute">
        <input type="radio" id="${attribute}" name="atributo" value="${attribute}"><label for="${attribute}">${attribute} - ${data.attribute[attribute]}</label>
        </p>
        `;
    }
  }
  divCardPlayer.innerHTML = contentHTML;
  divOptions.innerHTML = optionsHTML;
  btnNextCard.style.display = "none";
  btnPlay.style.display = "block";
  viewCardMachine();
}

function viewCardMachine() {
  let contentHTML;
  cardMachine = getCardMachine();

  for (let element in cardMachine) {
    data = cardMachine[element];

    contentHTML = `
      <img src="${data.image}" class="blured" id="imgCardMachine">
      `;
  }
  divCardMachine.innerHTML = contentHTML;
}

function viewCards() {
  if (!givenCards) {
    alert("Primeiro distribua as cartas");
  } else {
    nextCardPlayer();
    viewCardMachine();
    btnPlay.style.display = "block";
    btnViewCards.style.display = "none";
  }
}

function play() {
  results.setAttribute("class", "");
  let powerPlayer;
  let powerMachine;
  let attribute;
  let status;
  let cardMachine = getCardMachine();
  input = document.getElementsByName("atributo");
  input.forEach((element) => {
    if (element.checked) {
      attribute = element.value;
    }
  });
  if (!attribute) {
    alert("Escolha seu poder!");
  } else {
    for (let attrib in cardPlayer) {
      powerPlayer = cardPlayer[attrib].attribute[attribute];
    }

    for (let attrib in cardMachine) {
      powerMachine = cardMachine[attrib].attribute[attribute];
    }

    if (powerPlayer > powerMachine) {
      status = "Você ganhou!";
      results.classList.add("wonMatch");

      const element = cardsPlayer.splice(0, 1)[0];

      cardsPlayer.splice(cardsPlayer.length, 0, element);

      cardsPlayer.push(cardsMachine.splice(0, 1)[0]);
    } else if (powerPlayer < powerMachine) {
      status = "Você perdeu!";
      results.classList.add("loseMatch");

      const element = cardsMachine.splice(0, 1)[0];

      cardsMachine.splice(cardsMachine.length, 0, element);

      cardsMachine.push(cardsPlayer.splice(0, 1)[0]);
    } else {
      status = "Empatou!";
      results.classList.add("tiedMatch");

      const elem = cardsPlayer.splice(0, 1)[0];
      cardsPlayer.splice(cardsPlayer.length, 0, elem);

      const element = cardsMachine.splice(0, 1)[0];
      cardsMachine.splice(cardsMachine.length, 0, element);
    }
    imgCardMachine = document.getElementById("imgCardMachine");
    imgCardMachine.classList.remove("blured");
    btnPlay.style.display = "none";
    if (cardsPlayer.length == 0) {
      status = "Você perdeu a partida!";
      divOptions.style.display = "none";
      document.getElementById("middle").style.justifyContent = "center";
      results.classList.add("loseMatch");
      btnRestart.style.display = "block";
    } else if (cardsMachine.length == 0) {
      status = "Parabéns, você venceu a partida!";
      divOptions.style.display = "none";
      document.getElementById("middle").style.justifyContent = "center";
      results.classList.add("wonMatch");
      btnRestart.style.display = "block";
    } else {
      btnNextCard.style.display = "block";
    }

    divResults.innerHTML = status;
  }
}
