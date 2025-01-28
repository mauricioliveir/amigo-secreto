let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    if (nome == '') {
        alert('Por favor, insira um nome válido!');
    } else {
        amigos.push(nome);
        mostrarLista();
        document.getElementById("amigo").value = '';
    }
}

function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    let i = 0;
    while (i < amigos.length) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        ul.appendChild(item);
        i++;
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('A lista está vazia. Por favor, adicione amigos!');
    } else {
        let posicao = Math.random() * amigos.length;
        let sorteado = amigos[parseInt(posicao)];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>O amigo secreto sorteado é : " + sorteado + "</li>";
        
        document.getElementById("listaAmigos").innerHTML = "";
        amigos = [];
    }
}

