// Ativar caminho do checkin dos orçamentos

const LinksOrcamento = new URLSearchParams(location.search);


function ativarLink(parametro) {
  const btnClicado = document.getElementById(parametro);
  if (btnClicado) {
    btnClicado.checked = true;
  }
}

LinksOrcamento.forEach(ativarLink);