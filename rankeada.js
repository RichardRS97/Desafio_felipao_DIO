calcularRank(500, 50)

 function calcularRank(vitorias, derrotas) {
    //calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = (" ");
    
    //verificação do nível do jogador
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    console.log("O Herói tem um saldo de " + saldoVitorias +" está no nível de " + nivel);
    
}


