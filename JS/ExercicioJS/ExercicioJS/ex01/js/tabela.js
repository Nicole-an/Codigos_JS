const tbody = document.querySelector('#unidades');

let somaConsultas=0, totalSP=0, totalGeral=0;

listaUnidades.forEach(unidade => {
    if (unidade.endereco_municipio_nome === 'São Paulo') {
    
    tbody.innerHTML += `
    
    <tr>
        <td>${unidade.nome}</td>
        <td>${unidade.endereco_logradouro}, ${unidade.endereco_numero}</td>
        <td>${unidade.endereco_bairro}</td>
        <td>${unidade.endereco_municipio_nome} / ${unidade.endereco_uf_sigla}</td>
        <td>${unidade.clinica}</td>
        <td>${unidade.consultasMes}</td>
        <td class="text-center">${unidade.media_consultas_mes}</td>
    </tr>

    `;

    totalSP++;
    somaConsultas+=unidade.media_consultas_mes;}
    else{
        totalGeral++;

    }
})

document.querySelector('#numeroConsultas').textContent = somaConsultas;
document.querySelector('#totalunidadesSP').textContent = totalSP;
document.querySelector('#totalunidadesForaSP').textContent = totalGeral;