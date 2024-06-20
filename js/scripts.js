document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.menu-hamburguer');
    const menuLista = document.querySelector('.menu-lista');

    hamburguer.addEventListener('click', function() {
        menuLista.classList.toggle('active');
    });
});
// Animação para escrever o título home
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        { element: document.querySelector(".tittle"), text: "Olá, eu sou o Guilherme Macedo!" },
       
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    function type() {
        if (currentTextIndex < texts.length) {
            const currentElement = texts[currentTextIndex].element;
            const currentText = texts[currentTextIndex].text;

            if (currentCharIndex < currentText.length) {
                currentElement.innerHTML += currentText.charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(type, 100); // Ajuste a velocidade de digitação aqui
            } else {
                currentCharIndex = 0;
                currentTextIndex++;
                setTimeout(type, 500); // Tempo entre a digitação de diferentes textos
            }
        }
    }

    type();
});
// Alerta sobre projeto
function aviso(){
    return alert('Projeto em desenvolvimento!')
}

