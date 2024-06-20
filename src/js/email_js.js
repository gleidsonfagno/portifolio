
// Inicialização do EmailJS
function initializeEmailJS() {
  emailjs.init({
    publicKey: process.env.EMAILJS_USER_ID,
  });
}

// Função para enviar e-mail
function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Verifica se os campos obrigatórios estão preenchidos
  if (name && email && message) {
    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, {
      from_name: name,
      to_name: email,
      user_email: email,
      message: message,
    })
      .then(function (response) {
        console.log("E-mail enviado com sucesso!", response);
      })
      .catch(function (error) {
        console.error("Erro ao enviar o e-mail:", error);
      });
  } else {
    console.warn("Preencha todos os campos obrigatórios.");
  }
}

// Event listener para o envio do formulário
document.addEventListener("DOMContentLoaded", function () {
  initializeEmailJS();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    sendEmail();
  });

  // Substituindo `unload` por `pagehide`
  window.addEventListener("pagehide", function () {
    console.log("A página está sendo oculta. Você pode salvar o estado aqui.");
    // Adicione qualquer lógica de limpeza ou salvamento aqui.
  });
});
