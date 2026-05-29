function calcularINSS() {
    let salario = parseFloat(document.getElementById("salarioBruto").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um salário valido.");
        return;
    }

    let faixa1 = 1518.00;
    let faixa2 = 2793.88;
    let faixa3 = 4190.83;
    let teto = 8157.41;

    let desconto = 0;

    if (salario <= faixa1) {
        desconto = salario * 0.075;
    } else if (salario <= faixa2) {
        desconto = (faixa1 * 0.075) + ((salario - faixa1) * 0.09);
    } else if (salario <= faixa3) {
        desconto = (faixa1 * 0.075) + ((faixa2 - faixa1) * 0.09) + ((salario - faixa2) * 0.12); 
    } else if (salario <= teto) {
        desconto = (faixa1 * 0.075) + ((faixa2 - faixa1) * 0.09) + ((faixa3 - faixa2) * 0.12) + ((salario - faixa3) * 0.14);
    } else {
        desconto = (faixa1 * 0.075) + ((faixa2 - faixa1) * 0.09) + ((faixa3 - faixa2) * 0.12) + ((teto - faixa3) * 0.14);
    }

    let salarioLiquido = salario - desconto;
    let aliquotaEfetiva = (desconto / salario) * 100;

    document.getElementById("valorDesconto").innerText = "R$ " + desconto.toFixed(2);
    document.getElementById("salarioLiquido").innerText = "R$ " + salarioLiquido.toFixed(2);
    document.getElementById("aliquotaEfetiva").innerText = aliquotaEfetiva.toFixed(2) + "%";
    document.getElementById("resultado").style.display = "block";

}

function limpaCampo() {
    document.getElementById("salarioBruto").value = "";   
}