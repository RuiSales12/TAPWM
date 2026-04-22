/**
 * 1) Recebe 3 números e retorna o maior deles
 */
function maiorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

/**
 * 2) Recebe 3 números e os retorna em ordem crescente
 */
function ordemCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

/**
 * 3) Recebe uma string e retorna se ela é um palíndromo ou não.
 * Converte para maiúsculas e retira os espaços em branco.
 */
function isPalindromo(str) {
    if (!str) return false;
    const formatada = str.toUpperCase().replace(/\s+/g, '');
    const invertida = formatada.split('').reverse().join('');
    return formatada === invertida;
}

/**
 * 4) Recebe duas palavras.
 * Retorna erro se uma ou ambas forem vazias ou indefinidas.
 * Retorna "é um subconjunto" se a segunda for subconjunto da primeira.
 * Retorna "não é um conjunto" caso contrário.
 */
function verificaSubconjunto(palavra1, palavra2) {
    if (palavra1 === undefined || palavra2 === undefined || palavra1.trim() === '' || palavra2.trim() === '') {
        return "Erro: Uma ou ambas as palavras são vazias ou indefinidas.";
    }
    
    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um conjunto";
    }
}

/**
 * 5) Recebe uma data e devolve o dia da semana.
 */
function diaDaSemana(dataString) {
    if (!dataString) return "Data não informada";
    
    // Tratamento para evitar problema de fuso horário com formato YYYY-MM-DD
    const partes = dataString.split('-');
    if (partes.length !== 3) return "Data inválida";
    
    const data = new Date(partes[0], partes[1] - 1, partes[2]);
    const dias = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    
    return dias[data.getDay()];
}

// ==========================================
// Funções de Interface (UI) para o HTML
// ==========================================

function testarMaior() {
    const n1 = parseFloat(document.getElementById('n1_1').value);
    const n2 = parseFloat(document.getElementById('n1_2').value);
    const n3 = parseFloat(document.getElementById('n1_3').value);
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById('res1').innerText = "Por favor, preencha todos os 3 números.";
        return;
    }
    
    const res = maiorDeTres(n1, n2, n3);
    document.getElementById('res1').innerText = `O maior número é: ${res}`;
}

function testarCrescente() {
    const n1 = parseFloat(document.getElementById('n2_1').value);
    const n2 = parseFloat(document.getElementById('n2_2').value);
    const n3 = parseFloat(document.getElementById('n2_3').value);
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById('res2').innerText = "Por favor, preencha todos os 3 números.";
        return;
    }
    
    const res = ordemCrescente(n1, n2, n3);
    document.getElementById('res2').innerText = `Ordem Crescente: ${res.join(', ')}`;
}

function testarPalindromo() {
    const str = document.getElementById('str3').value;
    if (!str.trim()) {
        document.getElementById('res3').innerText = "Digite uma palavra.";
        document.getElementById('res3').style.color = "#888";
        return;
    }

    const res = isPalindromo(str);
    
    if (res) {
        document.getElementById('res3').innerText = "Sim, é um palíndromo!";
        document.getElementById('res3').style.color = "#2e7d32"; // Verde escuro
    } else {
        document.getElementById('res3').innerText = "Não é um palíndromo.";
        document.getElementById('res3').style.color = "#c62828"; // Vermelho escuro
    }
}

function testarSubconjunto() {
    const p1 = document.getElementById('p4_1').value;
    const p2 = document.getElementById('p4_2').value;
    
    const res = verificaSubconjunto(p1, p2);
    document.getElementById('res4').innerText = res;
    
    if (res.startsWith("Erro")) {
        document.getElementById('res4').style.color = "#c62828"; // Vermelho escuro
    } else if (res === "é um subconjunto") {
        document.getElementById('res4').style.color = "#2e7d32"; // Verde escuro
    } else {
        document.getElementById('res4').style.color = "#ef6c00"; // Laranja
    }
}

function testarDiaDaSemana() {
    const data = document.getElementById('data5').value;
    if (!data) {
        document.getElementById('res5').innerText = "Selecione uma data.";
        return;
    }

    const res = diaDaSemana(data);
    document.getElementById('res5').innerText = res;
    document.getElementById('res5').style.color = "#1565c0"; // Azul escuro
}
