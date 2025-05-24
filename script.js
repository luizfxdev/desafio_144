// Elementos do DOM
const inputText = document.getElementById('inputText');
const calculateBtn = document.getElementById('calculateBtn');
const returnBtn = document.getElementById('returnBtn');
const resultDiv = document.getElementById('result');
const calculationDiv = document.getElementById('calculation');

// Função para calcular a soma dos valores ASCII de uma string
function calculateAsciiSum(str) {
    let sum = 0;
    let calculationSteps = '';
    
    // Percorre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const ascii = char.charCodeAt(0);
        
        // Adiciona ao cálculo total
        sum += ascii;
        
        // Formata os passos do cálculo para exibição
        calculationSteps += `${char} = ${ascii}`;
        if (i < str.length - 1) {
            calculationSteps += ' + ';
        }
    }
    
    calculationSteps += ` = ${sum}`;
    
    return {
        sum: sum,
        calculation: calculationSteps
    };
}

// Função para verificar se a soma é par e exibir o resultado
function checkEscape() {
    const text = inputText.value.trim();
    
    if (!text) {
        resultDiv.textContent = 'Por favor, digite uma palavra!';
        calculationDiv.textContent = '';
        return;
    }
    
    // Calcula a soma ASCII
    const { sum, calculation } = calculateAsciiSum(text);
    
    // Verifica se a soma é par
    if (sum % 2 === 0) {
        resultDiv.textContent = '🎉 Porta aberta! Você escapou! 🎉';
        resultDiv.style.color = '#4CAF50';
    } else {
        resultDiv.textContent = '❌ Tente novamente! A soma é ímpar. ❌';
        resultDiv.style.color = '#F44336';
    }
    
    // Mostra o cálculo
    calculationDiv.textContent = calculation;
}

// Função para limpar o formulário
function resetForm() {
    inputText.value = '';
    resultDiv.textContent = '';
    calculationDiv.textContent = '';
    resultDiv.style.color = '#fff';
}

// Event Listeners
calculateBtn.addEventListener('click', checkEscape);
returnBtn.addEventListener('click', resetForm);

// Permite pressionar Enter para calcular
inputText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkEscape();
    }
});