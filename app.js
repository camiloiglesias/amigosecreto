let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let sorteio = {};
    let disponiveis = [...amigos];

    amigos.forEach(amigo => {
        let possiveis = disponiveis.filter(a => a !== amigo);
        if (possiveis.length === 0) {
            sortearAmigo(); // Tenta novamente caso haja problema na distribuição
            return;
        }
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio[amigo] = sorteado;
        disponiveis = disponiveis.filter(a => a !== sorteado);
    });

    mostrarResultado(sorteio);
}

function mostrarResultado(sorteio) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let [amigo, sorteado] of Object.entries(sorteio)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteado}`;
        resultado.appendChild(li);
    }
}
