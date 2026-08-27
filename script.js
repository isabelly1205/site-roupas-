const botoes = document.querySelectorAll(".produto button");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const produto = botao.parentElement.querySelector("h3").textContent;

        alert("Você escolheu: " + produto + " 💗");
    });
});