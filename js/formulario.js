const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p style='grid-column: 1/-1; padding: 16px; border-radius: 4px; background: #f7f7f7;'><span style= 'color: #317A00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p style='grid-column: 1/-1; padding: 16px; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000'> Erro no envio</span>, você pode enviar diretamente para o nosso email: enviar@enviar.com </br></br>(O site ainda não está integrado a sistema de envio de e-mails) </p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const btnForms = document.querySelector("form button");
  btnForms.disable = true;
  btnForms.innerHTML = "Enviando...";

  const data = new FormData(formulario);

  fetch("./forms.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
