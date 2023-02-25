let menu = document.querySelector(".info li:last-of-type");
let popup = document.querySelector(".popup");
let cross = document.querySelector(".popup img");
let button = document.querySelector(".popup button");
let tel = document.querySelector(`.popup input[type="tel"]`);
let checkbox = document.querySelector(`.popup input[type="checkbox"]`);
let container = document.querySelector('.container'); 
let res = document.querySelector('.popup .response');
let contacts = document.querySelector('.info li:nth-last-of-type(-n+2)');
let whatsapp = document.querySelector('.button-transparent');
let body = document.querySelector("body");

menu.onclick = function(){
    body.classList.toggle("open-menu");
}

button.onclick = function(){
    console.log(checkbox.value);
    if(tel == null || tel.value.length < 11){
        alert("Введите номер")
    }else if(checkbox.value == false){
        alert("Согласитесь с Политикой конфиденциальности")
    }
    else{
        res.style.display = 'flex';
    }
}
function call(){
    popup.style.display = "flex";
}

function close(){
    popup.style.display = "none";
}

contacts.addEventListener("click", call);
whatsapp.addEventListener("click", call);
cross.addEventListener("click", close);