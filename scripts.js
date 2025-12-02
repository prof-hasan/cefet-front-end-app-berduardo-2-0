let bolas = {

}

let times = {

}

let chuteiras = {

}

let campos = {

}

let btnBola = document.querySelector("#bola");
let qtdGols = document.querySelector("#qtd-gols");
let gol = 1;

btnBola.addEventListener("click", () =>{
    qtdGols.innerHTML = gol + " Gols";
});