const birinci = document.querySelector(".birinciEded");
const ikinci = document.querySelector(".ikinciEded");
const hadise = document.getElementById("hadise");
const cavab = document.querySelector(".cavab");
const answer = document.querySelector(".answer");
cavab.addEventListener("click", () => {
  var alinanEded = 0;
  if (birinci.value == "") {
    alert("birinci ededi yazin");
  }
  if (ikinci.value == "") {
    alert(" ikinci ededi yazin");
  }
  switch (hadise.value) {
    case "operator":
      alert("operatoru secin");
      break;
    case "*":
      alinanEded = +birinci.value * +ikinci.value;
      answer.innerText = alinanEded;
      break;
    case "/":
      alinanEded = +birinci.value / +ikinci.value;
      answer.innerText = alinanEded;
      break;
    case "+":
      alinanEded = +birinci.value + +ikinci.value;
      answer.innerText = alinanEded;
      break;
    case "-":
      alinanEded = +birinci.value - +ikinci.value;
      answer.innerText = alinanEded;
      break;
  }
});
