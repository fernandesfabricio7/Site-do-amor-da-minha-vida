// ===============================
// BOTÃO COMEÇAR
// ===============================
const btn = document.getElementById("comecar");
const inicio = document.getElementById("inicio");

btn.addEventListener("click", () => {
    inicio.style.opacity = "0";

    setTimeout(() => {
        inicio.style.display = "none";
        // Inicia a escrita após sumir a tela inicial
        setTimeout(escrever, 500);
    }, 500);
});

// ===============================
// TEXTO DIGITANDO
// ===============================
const mensagem = `Desde o dia em que você entrou na minha vida, tudo ficou diferente.

Cada sorriso seu virou uma lembrança.

Cada abraço virou meu lugar favorito.

Espero que esse seja apenas o começo da nossa história, e que possamos ter nosso cantinho, nossos cachorros e nossos buxexudinhos.`;

const texto = document.getElementById("textoDigitando");
let i = 0;

function escrever(){
    if(i < mensagem.length){
        // Substitui quebras de linha por <br> para renderizar direito no HTML
        if (mensagem.charAt(i) === '\n') {
            texto.innerHTML += "<br>";
        } else {
            texto.innerHTML += message.charAt(i);
        }
        i++;
        setTimeout(escrever, 40);
    }
}

// ===============================
// GALERIA
// ===============================
const fotos = document.querySelectorAll(".polaroid img");
const lightbox = document.getElementById("lightbox");
const imagemGrande = document.getElementById("imagemGrande");
const fechar = document.getElementById("fechar");

fotos.forEach(foto => {
    foto.addEventListener("click", () => {
        imagemGrande.src = foto.src;
        lightbox.style.display = "flex";
    });
});

fechar.onclick = () => {
    lightbox.style.display = "none";
}

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
}

// ===============================
// CONTADOR
// ===============================
const dataInicio = new Date("2025-06-07T00:00:00");

function atualizar(){
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = agora.getHours();
    const minutos = agora.getMinutes();

    document.getElementById("contador").innerHTML = `
        🤍 ${dias} dias <br>
        ${horas} horas <br>
        ${minutos} minutos
    `;
}

setInterval(atualizar, 1000);
atualizar();

// ===============================
// CHUVA DE CORAÇÕES
// ===============================
function criarCoracao(){
    const coracao = document.createElement("div");
    coracao.innerHTML = "🤍";
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = (Math.random() * 20 + 20) + "px";
    
    const duracao = Math.random() * 3 + 3; // entre 3 e 6 segundos
    coracao.style.animationDuration = duracao + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000);
}

setInterval(criarCoracao, 400);