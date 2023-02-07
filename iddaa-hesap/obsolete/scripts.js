

/** ELEMENTS */
const win = document.querySelector("#galibiyet");
const draw = document.querySelector("#beraberlik");
const bet = document.querySelector("#yatan-para");
const form = document.querySelector("form");
const winBet = document.querySelector("#yatan-para-1");
const drawBet = document.querySelector("#yatan-para-0");
const winning = document.querySelector("#olasi-kazanc");

/** FUNCTIONS */
function setTwoNumberDecimal() {
  this.value = parseFloat(this.value).toFixed(2);
}

// function calculateDrawBet(drawOdd, betAmount) {
//   return betAmount / drawOdd;
// };

// function calculateDrawBet() {};

function handleSubmit(event) {
  event.preventDefault();
  const winOdd = event.target.galibiyet.value;
  const drawOdd = event.target.beraberlik.value;
  const betAmount = event.target.yatan_para.value;
  const drawBetAmount = Math.round(betAmount / drawOdd);
  const winBetAmount = betAmount - drawBetAmount;
  const winningAmount = Math.round(winBetAmount * winOdd);
  // console.log(event.target);
  // console.log(event.target[0]);
  // console.log(event.target.beraberlik.value);

  const printObj = {
    "Winning odd": winOdd, 
    "Draw odd": drawOdd, 
    "Bet amount": betAmount
  };

  console.log(printObj);

  // console.log(winOdd, drawOdd, betAmount, drawBetAmount, winBetAmount, winningAmount);
  winBet.innerText = `${winBetAmount} TL`;
  drawBet.innerText = `${drawBetAmount} TL`;
  winning.innerText = `${winningAmount} TL`;
}

/** EVENT LISTENERS */
win.addEventListener("blur", setTwoNumberDecimal);
draw.addEventListener("blur", setTwoNumberDecimal);
form.addEventListener("submit", handleSubmit);
