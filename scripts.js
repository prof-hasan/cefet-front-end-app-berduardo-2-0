const bolasEl = {
    bola1: "imgs/bolas/bola1.png",
    bola2: "imgs/bolas/bola2.png",
    bola3: "imgs/bolas/bola3.png",
    bola4: "imgs/bolas/bola4.png",
    bola5: "imgs/bolas/bola5.png",
    bola6: "imgs/bolas/bola6.png",
    bola7: "imgs/bolas/bola7.png"
};

const timesEl = {
    time1: "imgs/times/time1.png",
    time2: "imgs/times/time2.png",
    time3: "imgs/times/time3.png",
    time4: "imgs/times/time4.png",
    time5: "imgs/times/time5.png",
    time6: "imgs/times/time6.png"
};

const chuteirasEl = {
    chuteira1: "imgs/chuteiras/chuteira1.png",
    chuteira2: "imgs/chuteiras/chuteira2.png",
    chuteira3: "imgs/chuteiras/chuteira3.png",
    chuteira4: "imgs/chuteiras/chuteira4.png",
    chuteira5: "imgs/chuteiras/chuteira5.png",
    chuteira6: "imgs/chuteiras/chuteira6.png",
    chuteira7: "imgs/chuteiras/chuteira7.png"
};

const camposEl = {
    campo1: "imgs/campos/campo1.jpg",
    campo2: "imgs/campos/campo2.jpg",
    campo3: "imgs/campos/campo3.jpg",
    campo4: "imgs/campos/campo4.jpg",
    campo5: "imgs/campos/campo5.jpg",
    campo6: "imgs/campos/campo6.jpg",
    campo7: "imgs/campos/campo7.jpg"
};

const bolaEl = document.querySelector("#bola");
const mostradorEl = document.querySelector("#mostrador");

let golsPorClique = 1;
let golsPorSegundo = 0;
let multiplicador = 1;
let totalGols = 0;
let allTimeGols = 0;

function atualizaPlacar() {
    mostradorEl.innerHTML = `${Math.floor(totalGols)} Gols`;
}

function proximoCusto(valor, fator) {
    return Math.round(valor * fator);
}

const upgrades = {
    bola: {
        lvl: 1,
        maxLvl: 7,
        valor: 50,
        fator: 4.2,
        compravel: false,
        btnEl: document.querySelector("#comprar-bola"),
        nivelEl: document.querySelector("#nivel-bola"),
        custoEl: document.querySelector("#custo-bola"),
        efeito: lvl => golsPorClique = Math.pow(2, lvl - 1),
        atualizarImagem: lvl => bolaEl.src = bolasEl["bola" + lvl]
    },
    chuteira: {
        lvl: 1,
        maxLvl: 7,
        valor: 1250,
        fator: 2.7,
        compravel: false,
        btnEl: document.querySelector("#comprar-chuteira"),
        nivelEl: document.querySelector("#nivel-chuteira"),
        custoEl: document.querySelector("#custo-chuteira"),
        efeito: lvl => multiplicador = 1 + lvl * 0.5,
        atualizarImagem: lvl => document.querySelector("#chuteira-img").src = chuteirasEl["chuteira" + lvl]
    },
    time: {
        lvl: 1,
        maxLvl: 6,
        valor: 7500,
        fator: 2.9,
        compravel: false,
        btnEl: document.querySelector("#comprar-time"),
        nivelEl: document.querySelector("#nivel-time"),
        custoEl: document.querySelector("#custo-time"),
        efeito: lvl => golsPorSegundo += lvl * 10,
        atualizarImagem: lvl => document.querySelector("#time-img").src = timesEl["time" + lvl]
    },
    campo: {
        lvl: 1,
        maxLvl: 7,
        valor: 23150,
        fator: 3.2,
        compravel: false,
        btnEl: document.querySelector("#comprar-campo"),
        nivelEl: document.querySelector("#nivel-campo"),
        custoEl: document.querySelector("#custo-campo"),
        efeito: lvl => multiplicador += 0.3 * lvl,
        atualizarImagem: lvl => document.querySelector("#centro").style.backgroundImage = `url(${camposEl["campo" + lvl]})`
    }
};

function atualizarCompravel() {
    Object.values(upgrades).forEach(upg => {
        upg.compravel = totalGols >= upg.valor && upg.lvl < upg.maxLvl;
        upg.btnEl.disabled = !upg.compravel;
        if (upg.compravel) {
            upg.btnEl.classList.add("compravel");
        } else {
            upg.btnEl.classList.remove("compravel");
        }
    });
}

function comprarUpgrade(upgrade) {
    if (!upgrade.compravel) return;
    totalGols -= upgrade.valor;
    upgrade.lvl++;
    upgrade.efeito(upgrade.lvl);
    upgrade.atualizarImagem(upgrade.lvl);
    upgrade.valor = proximoCusto(upgrade.valor, upgrade.fator);
    upgrade.nivelEl.innerHTML = `Nível ${upgrade.lvl}`;
    upgrade.custoEl.innerHTML = `Custo ${upgrade.valor} Gols`;
    atualizaPlacar();
    atualizarCompravel();
}

Object.values(upgrades).forEach(upgrade =>
    upgrade.btnEl.addEventListener("click", () => comprarUpgrade(upgrade))
);

bolaEl.addEventListener("click", () => {
    const ganho = golsPorClique * multiplicador;
    totalGols += ganho;
    allTimeGols += ganho;
    atualizaPlacar();
    atualizarCompravel();
});

setInterval(() => {
    totalGols += golsPorSegundo;
    allTimeGols += golsPorSegundo;
    atualizaPlacar();
    atualizarCompravel();
}, 1000);

const mostradorGpcEl = document.querySelector("#mostrador-gpc");
const mostradorGpsEl = document.querySelector("#mostrador-gps");
const mostradorMultiplicadorEl = document.querySelector("#mostrador-multiplicador");
const mostradorTotalEl = document.querySelector("#mostrador-total");

setInterval(() => {
    mostradorGpcEl.innerHTML = `Gols por clique: ${(golsPorClique * multiplicador).toFixed(1)}`;
    mostradorGpsEl.innerHTML = `Gols por segundo: ${golsPorSegundo}`;
    mostradorMultiplicadorEl.innerHTML = `Multiplicador: ${multiplicador.toFixed(1)}x`;
    mostradorTotalEl.innerHTML = `Gols totais: ${Math.floor(allTimeGols)}`;
}, 200);

function mostrarDescricao(areaSel, descSel, offsetX, offsetY) {
    const area = document.querySelector(areaSel);
    const desc = document.querySelector(descSel);

    area.addEventListener("mousemove", e => {
        desc.style.display = "block";
        desc.style.left = e.pageX + offsetX + "px";
        desc.style.top = e.pageY + offsetY + "px";
    });

    area.addEventListener("mouseout", () => {
        desc.style.display = "none";
    });
}

mostrarDescricao("#upgrade-bola", "#descricao-bola", -170, -120);
mostrarDescricao("#upgrade-chuteira", "#descricao-chuteira", -180, -120);
mostrarDescricao("#upgrade-time", "#descricao-time", -170, -120);
mostrarDescricao("#upgrade-campo", "#descricao-campo", -170, -120);