let listaNomesDigitados = []

function adicionar() {
    nomeDigitado = document.getElementById("nome-amigo").value

    if (nomeDigitado === "") {
        alert("Por favor, insira um nome válido.");
        return false;
    }

    listaNomesDigitados.push(nomeDigitado)
   
    document.getElementById('lista-amigos').textContent = listaNomesDigitados.join(", ");

    document.getElementById("nome-amigo").value = ''

    console.log(listaNomesDigitados)
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}

function sortear() {
    if(listaNomesDigitados.length < 4){
        alert("Por favor, insira pelo menos quatro nomes.");
        return false;
    }
    embaralhar(listaNomesDigitados);
    let resultado = "";
    for (let i = 0; i < listaNomesDigitados.length; i++) {
        if(i === listaNomesDigitados.length - 1){
            resultado += `${listaNomesDigitados[i]} --> ${listaNomesDigitados[0]}<br>`;
        } else {
            resultado += `${listaNomesDigitados[i]} --> ${listaNomesDigitados[i+1]}<br>`;
    }
    document.getElementById('lista-sorteio').innerHTML = resultado;
}
}

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = ''
    document.getElementById('lista-amigos').textContent = ''
    listaNomesDigitados = []

}







