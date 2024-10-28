const avanca = document.querySelectorAll('.btn-proximo');

// Função para rolar para o topo ao mudar de passo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mostrar mensagem ao finalizar a aventura
function mostrarMensagemFinal() {
    alert("Parabéns! Você terminou sua jornada.");
}

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPassoID = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoID);

        // Verificar se o próximo passo existe antes de continuar
        if (proximoPasso) {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
            scrollToTop();

            // Caso o próximo passo seja o último, exibe uma mensagem final
            if (!proximoPasso.querySelector('.btn-proximo')) {
                setTimeout(mostrarMensagemFinal, 500);
            }
        } else {
            console.error(`Elemento com ID "${proximoPassoID}" não encontrado.`);
        }
    });
});
