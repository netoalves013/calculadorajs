    const msg = "teste";
    const botao = document.getElementById('botao');

    botao.addEventListener('click', () =>     {
        const mensagem = document.getElementById("section");
        const lista = document.createElement("p");
        lista.innerText = msg;

        lista.classList.add("mensagem");
        mensagem.appendChild(lista);            //adicioan o paragrafo ao id section
    });