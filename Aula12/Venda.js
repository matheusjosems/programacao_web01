function CalculaDesconto(valor) {
    return valor * 0.1;
}

const vendas = [];
const tabela = document.getElementById("tabela");

function PreencherVetor() {
    let nome = document.getElementById("nome").value;
    let valor = parseFloat(document.getElementById("valor").value);
    
    if (!nome || isNaN(valor)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    let desconto = CalculaDesconto(valor);

    vendas.push({
        nome,
        valor,
        desconto
    });

    ExibirTabela();
}

function ExibirTabela() {
    // Limpa a tabela (exceto o cabeçalho)
    let innerTabela = "";
    
    // Adiciona cada venda à tabela
    for(let i = 0; i < vendas.length; i++) {
        innerTabela += `
        <tr>
            <td>${i + 1}</td>
            <td>${vendas[i].nome}</td>
            <td>R$ ${vendas[i].valor.toFixed(2)}</td>
            <td>R$ ${vendas[i].desconto.toFixed(2)}</td>
        </tr>`;
    }
    
    // Mantém o cabeçalho e adiciona as novas linhas
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Nome Vendedor</th>
        <th>Valor</th>
        <th>Desconto</th>
    </tr>
    ${innerTabela}`;
}

function ExcluirDados() {
    vendas.pop();
    ExibirTabela();
}