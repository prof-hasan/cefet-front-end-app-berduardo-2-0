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
let allTimeGolsEl = 0;

function atualizaPlacar() {
    mostradorEl.innerHTML = totalGols + " Gols";
}

function proximoCusto(custo, fator) {
    return Math.round(custo * fator);
}

let bolaLvl = 1;
let btnComprarBolaEl = document.querySelector("#comprar-bola");
let nivelBolaEl = document.querySelector("#nivel-bola");
let custoBolaEl = document.querySelector("#custo-bola");
let valorBolaEl = 50;

let timeLvl = 1;
let timeEl = document.querySelector("#time-img");
let btnComprarTimeEl = document.querySelector("#comprar-time");
let nivelTimeEl = document.querySelector("#nivel-time");
let custoTimeEl = document.querySelector("#custo-time");
let valorTimeEl = 7500;

let chuteiraLvl = 1;
let chuteiraEl = document.querySelector("#chuteira-img");
let btnComprarChuteiraEl = document.querySelector("#comprar-chuteira");
let nivelChuteiraEl = document.querySelector("#nivel-chuteira");
let custoChuteiraEl = document.querySelector("#custo-chuteira");
let valorChuteiraEl = 1250;

let btnComprarCampoEl = document.querySelector("#comprar-campo");
let nivelCampoEl = document.querySelector("#nivel-campo");
let custoCampoEl = document.querySelector("#custo-campo");
let valorCampoEl = 23150;
let campoLvl = 1;
let campoEl = document.querySelector("#centro");

bolaEl.addEventListener("click", () => {
    totalGols += golsPorClique * multiplicador;
    allTimeGolsEl += golsPorClique * multiplicador;
    atualizaPlacar();
});

setInterval(() => {
    totalGols += golsPorSegundo;
    allTimeGolsEl += golsPorSegundo;
    atualizaPlacar();
}, 1000);

btnComprarBolaEl.addEventListener("click", () => {
    if (totalGols >= valorBolaEl && bolaLvl < 7) {
        totalGols -= valorBolaEl;
        bolaLvl += 1;
        if (bolaLvl > 7) {
            bolaLvl = 7;
        }

        golsPorClique *= 2;
        nivelBolaEl.innerHTML = "Nível: " + bolaLvl;
        valorBolaEl = proximoCusto(valorBolaEl, 4.18);
        custoBolaEl.innerHTML = "Custo: " + valorBolaEl + " Gols";
        
        bolaEl.src = bolasEl["bola" + bolaLvl];
        atualizaPlacar();
    }
});

btnComprarTimeEl.addEventListener("click", () => {
    if (totalGols >= valorTimeEl && timeLvl < 6) {
        totalGols -= valorTimeEl;
        timeLvl += 1;
        if (timeLvl > 6) {
            timeLvl = 6;
        }

        golsPorSegundo += Math.pow(5, timeLvl - 1);
        nivelTimeEl.innerHTML = "Nível: " + timeLvl;
        valorTimeEl = proximoCusto(valorTimeEl, 2.86);
        custoTimeEl.innerHTML = "Custo: " + valorTimeEl + " Gols";
        timeEl.src = timesEl["time" + timeLvl];
        atualizaPlacar();
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
        valorChuteiraEl = proximoCusto(valorChuteiraEl, 2.71);
        custoChuteiraEl.innerHTML = "Custo: " + valorChuteiraEl + " Gols";
        
        chuteiraEl.src = chuteirasEl["chuteira" + chuteiraLvl];
        atualizaPlacar();
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
        valorCampoEl = proximoCusto(valorCampoEl, 3.23);
        custoCampoEl.innerHTML = "Custo: " + valorCampoEl + " Gols";
        atualizaPlacar();
    }
});

let mostradorGpcEl = document.querySelector("#mostrador-gpc");
let mostradorGpsEl = document.querySelector("#mostrador-gps");
let mostradorMultiplicadorEl = document.querySelector("#mostrador-multiplicador");
let mostradorTotalEl = document.querySelector("#mostrador-total");

setInterval(() => {
    mostradorGpcEl.innerHTML = "Gols por clique: " + (golsPorClique * multiplicador);
    mostradorGpsEl.innerHTML = "Gols por segundo: " + golsPorSegundo;
    mostradorMultiplicadorEl.innerHTML = "Multiplicador: " + multiplicador.toFixed(1) + "x";
    mostradorTotalEl.innerHTML = "Gols totais: " + allTimeGolsEl;
}, 250);

function mostrarDescricao(areaSelecionada, descricaoSelecionada, X, Y) {
    const area = document.querySelector(areaSelecionada);
    const descricao = document.querySelector(descricaoSelecionada);

    area.addEventListener("mouseover", (e) => {
        descricao.style.display = "block";
        e.currentTarget.style.cursor = "help";
        descricao.style.left = e.pageX + "px";
        descricao.style.top = e.pageY + "px";
    });

    area.addEventListener("mousemove", (e) => {
        posicaoX = e.pageX + X;
        posicaoY = e.pageY + Y;
        
        
        descricao.style.left = posicaoX + "px";
        descricao.style.top = posicaoY + "px";
    });

    area.addEventListener("mouseout", () => {
        descricao.style.display = "none";
    });
}

mostrarDescricao("#upgrade-bola", "#descricao-bola", -170, -120);
mostrarDescricao("#upgrade-chuteira", "#descricao-chuteira", -150, -120);
mostrarDescricao("#upgrade-time", "#descricao-time", -170, -120);
mostrarDescricao("#upgrade-campo", "#descricao-campo", -170, -120);