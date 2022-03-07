function calculateSalary(Vendas, salario) {
    let comissao1 = 0.03;
    let comissao2 = 0.05;
    let comissao
    if (Vendas > 1200) {
        comissao = comissao1 * 1200 + comissao2 * (Vendas - 1200);
    } else {
        comissao = comissao1 * Vendas;
    }
    return salario + comissao;
}

function calculateStock(qtnAtual, qtnMaxima, qtnMinima) {
    let mediaProduto = (qtnMaxima + qtnMinima) / 2;

    if (qtnAtual >= mediaProduto) {
        return "Não efetuar a compra";
    } else {
        return "Efetuar compra";
    }
}

function calculateAge(anoNascimento, anoAtual) {
    let = idadeAno = 0,
        idadeMese = 0,
        idadeDia = 0,
        idadeSemana = 0;

    idadeAno = anoAtual - anoNascimento;
    idadeMese = idadeAno * 12;
    idadeDia = idadeAno * 365;
    idadeSemana = idadeAno * 52.14;

    return ("Sua idade é " + idadeAno + ", " + idadeMese + " meses, " + idadeSemana + " semanas, " + idadeDia + " dias.")
}



function getDiagonal(NxN) {
    let arr = [];
    for (let indice = 0; indice < NxN.length; indice++) {
        arr.push(NxN[indice][indice])
    }
    return arr;
}


function cashMachine(saque) {
    let n100 = (saque - saque % 100) / 100
    let n50 = (saque % 100 - (saque % 100) % 50) / 50
    let n20 = ((saque % 100) % 50 - ((saque % 100) % 50) % 20) / 20
    let n10 = (((saque % 100) % 50) % 20 - (((saque % 100) % 50) % 20) % 10) / 10
    let n2 = ((((saque % 100) % 50) % 20) % 10 - ((((saque % 100) % 50) % 20) % 10) % 2) / 2
    let n1 = (((((saque % 100) % 50) % 20) % 10) % 2 - (((((saque % 100) % 50) % 20) % 10) % 2) % 1) / 1
    return `${n100} notas de 100, ${n50} notas de 50, ${n20} notas de 20, ${n10} notas de 10, ${n2} notas de 2, ${n1} notas de 1`
}