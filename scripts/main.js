// menu hamburguer
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
hamburguer.addEventListener("click",()=>nav.classList.toggle("active"));
// testeeeeee
const container = document.getElementById("main")
const img =document.getElementById("disney")
let oldDiv =document.getElementById("mudar_img")
let Div =document.getElementById("mudar_double")

if(window.innerWidth>= 760){
    oldDiv.removeChild(img)
    Div.appendChild(img)
}
const elenco = document.getElementById("elenco");
const remove = document.getElementById("remove");
const amy = document.getElementById("amy");
const dona = document.getElementById("dona");
if(window.innerWidth>= 760){
    elenco.removeChild(remove)
    elenco.appendChild(amy)
    elenco.appendChild(dona)
}