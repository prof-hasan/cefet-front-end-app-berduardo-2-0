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

let bolaEl = document.querySelector("#bola");
let mostradorEl = document.querySelector("#mostrador");
let golsPorClique = 1;
let golsPorSegundo = 0;
let multiplicador = 1;

let totalGols = 0;

let bolaLvl = 1;
let btnComprarBolaEl = document.querySelector("#comprar-bola");
let nivelBolaEl = document.querySelector("#nivel-bola");
let custoBolaEl = document.querySelector("#custo-bola");
let valorBolaEl = 50;

let chuteiraLvl = 1;
let chuteiraEl = document.querySelector("#chuteira-img");
let btnComprarChuteiraEl = document.querySelector("#comprar-chuteira");
let nivelChuteiraEl = document.querySelector("#nivel-chuteira");
let custoChuteiraEl = document.querySelector("#custo-chuteira");
let valorChuteiraEl = 1250;

let timeLvl = 1;
let timeEl = document.querySelector("#time-img");
let btnComprarTimeEl = document.querySelector("#comprar-time");
let nivelTimeEl = document.querySelector("#nivel-time");
let custoTimeEl = document.querySelector("#custo-time");
let valorTimeEl = 7500;


let btnComprarCampoEl = document.querySelector("#comprar-campo");
let nivelCampoEl = document.querySelector("#nivel-campo");
let custoCampoEl = document.querySelector("#custo-campo");
let valorCampoEl = 23150;
let campoLvl = 1;
let campoEl = document.querySelector("#centro");

bolaEl.addEventListener("click", () => {
    totalGols += golsPorClique * multiplicador;
    mostradorEl.innerHTML = totalGols + " Gols";
});

setInterval(() => {
    totalGols += golsPorSegundo;
    mostradorEl.innerHTML = totalGols + " Gols";
}, 1000);

btnComprarBolaEl.addEventListener("click", () => {
    if (totalGols >= valorBolaEl && bolaLvl < 7) {
        totalGols -= valorBolaEl;
        bolaLvl += 1;
        if (bolaLvl > 7) {
            bolaLvl = 7;
        }

        golsPorClique *= bolaLvl * (bolaLvl -1)
        nivelBolaEl.innerHTML = "Nível: " + bolaLvl;
        valorBolaEl = Math.round(valorBolaEl * 4.18);
        custoBolaEl.innerHTML = "Custo: " + (valorBolaEl) + " Gols";
        
        bolaEl.src = bolasEl["bola" + bolaLvl];
        mostradorEl.innerHTML = totalGols + " Gols";
    }
});

btnComprarChuteiraEl.addEventListener("click", () => {
    if (totalGols >= valorChuteiraEl && chuteiraLvl < 7) {
        totalGols -= valorChuteiraEl;
        chuteiraLvl += 1;
        if (chuteiraLvl > 7) {
            chuteiraLvl = 7;
        }
        
        multiplicador += 0.5;
        nivelChuteiraEl.innerHTML = "Nível: " + chuteiraLvl;
        valorChuteiraEl = Math.round(valorChuteiraEl * 2.71);
        custoChuteiraEl.innerHTML = "Custo: " + (valorChuteiraEl) + " Gols";
        
        chuteiraEl.src = chuteirasEl["chuteira" + chuteiraLvl];
        mostradorEl.innerHTML = totalGols + " Gols";
    }
});

btnComprarTimeEl.addEventListener("click", () => {
    if (totalGols >= valorTimeEl && timeLvl < 7) {
        totalGols -= valorTimeEl;
        timeLvl += 1;
        if (timeLvl > 7) {
            timeLvl = 7;
        }

        golsPorSegundo += Math.pow(5, timeLvl - 1);
        nivelTimeEl.innerHTML = "Nível: " + timeLvl;
        valorTimeEl = Math.round(valorTimeEl * 2.86);
        custoTimeEl.innerHTML = "Custo: " + (valorTimeEl) + " Gols";
        timeEl.src = timesEl["time" + timeLvl];
        mostradorEl.innerHTML = totalGols + " Gols";
    }
});

btnComprarCampoEl.addEventListener("click", () => {
    if (totalGols >= valorCampoEl && campoLvl < 7) {
        totalGols -= valorCampoEl;
        campoLvl += 1;
        if (campoLvl > 7) {
            campoLvl = 7;
        }
        
        multiplicador += campoLvl * 2;
        campoEl.style.backgroundImage = `url(${camposEl["campo" + campoLvl]})`;
        nivelCampoEl.innerHTML = "Nível: " + campoLvl;
        valorCampoEl = Math.round(valorCampoEl * 3.23);
        custoCampoEl.innerHTML = "Custo: " + (valorCampoEl) + " Gols";
        mostradorEl.innerHTML = totalGols + " Gols";
    }
});