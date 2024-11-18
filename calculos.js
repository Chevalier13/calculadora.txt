// Atualiza o display com números ou símbolos
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

// Adiciona símbolos ao display
function appendSymbol(symbol) {
    const display = document.getElementById('display');
    display.value += symbol;
}

// Limpa o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Remove o último caractere do display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calcula a expressão no display
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch {
        display.value = 'Erro';
    }
}

// Troca de tema
function changeTheme() {
    const theme = document.getElementById('theme').value;
    document.body.className = theme;
}
