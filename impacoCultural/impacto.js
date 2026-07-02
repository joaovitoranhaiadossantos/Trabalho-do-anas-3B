// Dados guardados diretamente no código JS
const dadosCulturais = [
    {
        id: 1, 
        tema: "Moda", 
        decada: "1970", 
        texto: "O Punk Rock popularizou as jaquetas de couro, jeans rasgados e alfinetes."
    },
    {
        id: 2, 
        tema: "Sociedade", 
        decada: "1960", 
        texto: "O rock psicodélico fortaleceu os movimentos pacifistas e os protestos contra as guerras."
    },
    {
        id: 3, 
        tema: "Atitude", 
        decada: "1950", 
        texto: "Elvis Presley quebrou padrões de comportamento da juventude conservadora da época."
    }
];

// Identifica o clique no botão
document.getElementById('btn-carregar').addEventListener('click', () => {
    const container = document.getElementById('resultado');
    container.innerHTML = ''; // Limpa a tela antes de exibir para não duplicar dados
    
    // cria os elementos visuais na página para cada item
    dadosCulturais.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-impacto';
        card.innerHTML = `
            <h3>${item.tema} - Década de ${item.decada}</h3>
            <p>${item.texto}</p>
        `;
        container.appendChild(card);
    });
});
