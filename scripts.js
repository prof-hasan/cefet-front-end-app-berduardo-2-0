let bolasEl = {
    bola1: "imgs/bolas/bola1.png",
    bola2: "imgs/bolas/bola2.png",
    bola3: "imgs/bolas/bola3.png",
    bola4: "imgs/bolas/bola4.png",
    bola5: "imgs/bolas/bola5.png",
    bola6: "imgs/bolas/bola6.png",
    bola7: "imgs/bolas/bola7.png",
}

let timesEl = {
    time1: "imgs/times/time1.png",
    time2: "imgs/times/time2.png",
    time3: "imgs/times/time3.png",
    time4: "imgs/times/time4.png",
    time5: "imgs/times/time5.png",
    time6: "imgs/times/time6.png",
    time7: "imgs/times/time7.png",
}

let chuteirasEl = {
    chuteira1: "imgs/chuteiras/chuteira1.png",
    chuteira2: "imgs/chuteiras/chuteira2.png",
    chuteira3: "imgs/chuteiras/chuteira3.png",
    chuteira4: "imgs/chuteiras/chuteira4.png",
    chuteira5: "imgs/chuteiras/chuteira5.png",
    chuteira6: "imgs/chuteiras/chuteira6.png",
    chuteira7: "imgs/chuteiras/chuteira7.png",
}

let camposEl = {
    campo1: "imgs/campos/campo1.jpg",
    campo2: "imgs/campos/campo2.jpg",
    campo3: "imgs/campos/campo3.jpg",
    campo4: "imgs/campos/campo4.jpg",
    campo5: "imgs/campos/campo5.jpg",
    campo6: "imgs/campos/campo6.jpg",
    campo7: "imgs/campos/campo7.jpg",
}

let btnBolaEl = document.querySelector("#bola");
let mostradorEl = document.querySelector("#mostrador");
let golsPorClique = 50;
let bolaNivel = 1;
let totalGols = 0;

let btnComprarBolaEl = document.querySelector("#comprar-bola");
let nivelBolaEl = document.querySelector("#nivel-bola");
let custoBolaEl = document.querySelector("#custo-bola");
let valorBolaEl = 50;

let btnComprarChuteiraEl = document.querySelector("#comprar-chuteira");
let btnComprarTimeEl = document.querySelector("#comprar-time");
let btnComprarCampoEl = document.querySelector("#comprar-campo");

btnBolaEl.addEventListener("click", () => {
    totalGols += golsPorClique;
    mostradorEl.innerHTML = totalGols + " Gols";
});

btnComprarBolaEl.addEventListener("click", () => {
    if (totalGols >= valorBolaEl && bolaNivel < 7) {
        totalGols -= valorBolaEl;
        bolaNivel += 1;
        if (bolaNivel > 7) {
            bolaNivel = 7;
        }

        golsPorClique++;
        nivelBolaEl.innerHTML = "Nível: " + bolaNivel;
        valorBolaEl *= 3;
        custoBolaEl.innerHTML = "Custo: " + (valorBolaEl) + " Gols";
        

        btnBolaEl.src = bolasEl["bola" + bolaNivel];
        mostradorEl.innerHTML = totalGols + " Gols";
    }
});