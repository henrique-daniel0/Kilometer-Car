function Limpar() {
    document.getElementById("p1").innerHTML = null;
    document.getElementById("p2").innerHTML = null;
    document.getElementById("distancia").value = "";
    document.getElementById("tempo").value = "";
    document.getElementById("LpK").value = "";
}

function Enviar() {
    var D = document.getElementById("distancia").value;
    var T = document.getElementById("tempo").value;
    var velocidadeMedia = D / T;
    var litrosUsados = D / document.getElementById("LpK").value;

    document.getElementById("p1").innerHTML = velocidadeMedia;
    document.getElementById("p2").innerHTML = litrosUsados;

    if (D == 0 || T == 0 || litrosUsados == 0) {
        alert(" Um dos campoes está vazio!! ");
        Limpar();

    }else {} /*else if ( typeof D === 'number' || typeof T === 'number' || typeof litrosUsados === 'number') {
        alert("Preencha os campos com somente numeros");
        Limpar();
    } else {
        return true;
    }
    console.log(D, T, litrosUsados);*/
}
