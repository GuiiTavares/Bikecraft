//Linha ativa na Navegação do Header 
const linksHeader = document.querySelectorAll(".navbar a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

linksHeader.forEach(ativarLink);



// Ativar faq ao clicar

const perguntas = document.querySelectorAll(".cards-faq button");

function AtivarFAQ(event) {
  const pergunta = event.currentTarget;
  const ariaControls = pergunta.getAttribute("aria-controls");
  const respostaFAQ = document.getElementById(ariaControls);

  respostaFAQ.idList.toggle("ativo");
  const ativo = respostaFAQ.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventosFAQ(pergunta) {
  pergunta.addEventListener("click", AtivarFAQ);
}

perguntas.forEach(eventosFAQ);

// Click nas Imagens das bicicletas

const imgsBicicletas = document.querySelectorAll(".imagens-bicicleta img");
const containerImgs = document.querySelector(".imagens-bicicleta ");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px").matches;
  if (media) {
    containerImgs.prepend(img);
  }
}

function clickBicicleta(img) {
  img.addEventListener("click", trocarImagem);
}

imgsBicicletas.forEach(clickBicicleta);
