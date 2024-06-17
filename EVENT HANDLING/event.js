// EVENT HANDLING

// ON CLICK
let btnClick = document.getElementById("btn-click");
let demoPara = document.getElementById("demo");

btnClick.addEventListener("click", () => {
  demoPara.innerHTML = "click event triggered!!!";
});


// ON CHANGE
let onchangeSelect = document.getElementById("onchange-select");
let onchangeText = document.getElementById("onchange-text");

onchangeSelect.addEventListener("change", () => {
  let selectedValue = onchangeSelect.value;
  onchangeText.innerHTML =  '(onchange fn used) the selected option is : ' + selectedValue;
});


// ON MOUSE OVER AND MOUSE OUT 
let mouseOnText = document.getElementById('mouse-on-text');

mouseOnText.addEventListener('mouseover', mouse_over_fn);
mouseOnText.addEventListener('mouseout', mouse_out_fn);

function mouse_over_fn(){
    mouseOnText.style.color = 'red';
}

function mouse_out_fn(){
    mouseOnText.style.color = 'black';
}

// ON JEY UP & ON KEY DOWN
let onKeyInput = document.getElementById('on-key-input');

onKeyInput.addEventListener('keydown', () => {
    onKeyInput.style.backgroundColor = 'red';
});

onKeyInput.addEventListener('keyup', () =>{
    onKeyInput.style.backgroundColor = 'purple';
});


// ON LOAD
function onPageLoad(){
    alert('the page is loaded');
}








