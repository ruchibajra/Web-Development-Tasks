// EVENT HANDLING

// ONCLICK
let btnClick = document.getElementById("btn-click");
let demoPara = document.getElementById("demo");

btnClick.addEventListener("click", () => {
  demoPara.innerHTML = "you did it girlllll!!!!";
});


// ONCHANGE
let onchangeSelect = document.getElementById("onchange-select");
let onchangeText = document.getElementById("onchange-text");

onchangeSelect.addEventListener("change", () => {
  let selectedValue = onchangeSelect.value;
  onchangeText.innerHTML =  'the selected option is : ' + selectedValue;
});






