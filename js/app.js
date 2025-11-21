//verifica e realiza a compra de ingressos
function comprar() {
    let quantidade = parseInt(document.getElementById("qtd").value);
    let produto = document.getElementById("tipo-ingresso").value;
    let estoque = parseInt(document.getElementById("qtd-" + produto).innerText);
    //valida a quantidade solicitada
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    } else {
        //verifica se a quantidade solicitada está disponível em estoque
        if (quantidade > estoque) {
            alert("Quantidade solicitada excede o estoque disponível.");
            document.getElementById("qtd").value = "";
        } else {
            estoque -= quantidade;
            document.getElementById("qtd-" + produto).innerText = estoque;
            document.getElementById("qtd").value = "";
            let palavra = quantidade === 1 ? "unidade" : "unidades";
            if (produto === "pista") {
                alert("Compra realizada com éxito. Você comprou " + quantidade + " " + palavra + " de Ingresso " + produto);
            } else {
                alert("Compra realizada com éxito. Você comprou " + quantidade + " " + palavra + " de Cadeira " + produto);
            }
            document.getElementById("qtd").value = "";
        }
    }
}

//reseta o estoque para os valores iniciais
function resetar() {
    document.getElementById("qtd-pista").innerText = 100;
    document.getElementById("qtd-superior").innerText = 200;
    document.getElementById("qtd-inferior").innerText = 400;
    document.getElementById("qtd").value = "";
    alert("Estoque reiniciado para os valores iniciais.");
}