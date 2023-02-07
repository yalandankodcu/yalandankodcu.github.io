
/** ELEMENTS */
const form = document.querySelector("form");

const betAmount = document.querySelector("#bet_amount");
console.log(betAmount);
const odd1 = document.querySelector("#odd_1");
const odd2 = document.querySelector("#odd_2");
const odd3 = document.querySelector("#odd_3");
const genre1 = document.querySelector("#bet_genre_1");
const genre2 = document.querySelector("#bet_genre_2");
const genre3 = document.querySelector("#bet_genre_3");

const win = document.querySelector("#winning_amount");
const combinedOdd = document.querySelector("#combined_odd");
const bet1 = document.querySelector("#bet_amount_1");
const bet2 = document.querySelector("#bet_amount_2");
const bet3 = document.querySelector("#bet_amount_3");


/** FUNCTIONS */
function setTwoNumberDecimal() {
  this.value = parseFloat(this.value).toFixed(2);
}

function handleSubmit(event) {
  event.preventDefault();
  const betValue = +event.target.bet_amount.value;
  const oddValue1 = +event.target.odd_1.value;
  const oddValue2 = +event.target.odd_2.value;
  let oddValue3 = +event.target.odd_3.value;
  const genreValue2 = event.target.bet_genre_2.value;
  const genreValue3 = event.target.bet_genre_3.value;

  console.log({
    odd1: odd1,
    betValue: betValue
  })

  let a2, a3, b2, b3;

  if (genreValue2 === "win") {
    a2 = 0; b2 = 1;
  } else if (genreValue2 === "no_bet") {
    a2 = 1; b2 = 0;
  } else console.error("Bet #2 genre error!");

  if (genreValue3 === "win") {
    a3 = 0; b3 = 1;
  } else if (genreValue3 === "no_bet") {
    a3 = 1; b3 = 0;
  } else console.error("Bet #3 genre error!");

  if (oddValue3 <= 1) {
    a3 = 0; b3 = 0;
  }

  console.log({
    a2: a2,
    a3: a3,
    b2: b2, 
    b3: b3
  });

  oddValue3 = (oddValue3 > 1) ? oddValue3 : 1;
  console.log(oddValue3);

  const nominator = 1 - (a2 / oddValue2) - (a3 / oddValue3);
  console.log(nominator);
  
  const combinedOddValue = nominator / (1/oddValue1 + b2/oddValue2 + b3/oddValue3);
  console.log(combinedOddValue);

  const winValue = betValue * combinedOddValue;
  const betValue1 = winValue / oddValue1;
  const betValue2 = b2 ? winValue / oddValue2 : betValue / oddValue2;

  const printObj = {
    "Bet Amount": betValue, 
    winValue: winValue,
  };

  console.log(printObj);

  win.innerText = `${Math.round(winValue)}`;
  combinedOdd.innerText = `${Math.round(100 * combinedOddValue) / 100}`;
  bet1.innerText = `${Math.round(betValue1)}`;
  bet2.innerText = `${Math.round(betValue2)}`;
  
  if (oddValue3 > 1) {
    const betValue3 = b3 ? winValue / oddValue3 : betValue / oddValue3;
    bet3.innerText = `${Math.round(betValue3)}`;
  }
}

/** EVENT LISTENERS */
odd1.addEventListener("blur", setTwoNumberDecimal);
odd2.addEventListener("blur", setTwoNumberDecimal);
odd3.addEventListener("blur", setTwoNumberDecimal);
form.addEventListener("submit", handleSubmit);
