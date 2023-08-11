mostrador=document.getElementById('mostrador');
function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            mostrador.value='';
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ){
            mostrador.value += valor;
        }
        if (valor === '=') {
            mostrador.value=eval(mostrador.value);
        }

    } else if (tipo === 'valor') {
        mostrador.value += valor
    }
}