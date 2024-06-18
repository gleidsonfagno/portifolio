// const userId = process.env.EMAILJS_USER_ID;
// const serviceId = process.env.EMAILJS_SERVICE_ID;
// const templateId = process.env.EMAILJS_TEMPLATE_ID;


(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: process.env.EMAILJS_USER_ID,

  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var messagem = document.getElementById("message").value;
      // Corrigindo a variável para 'message'
      emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, {
        from_name: name,
        to_name: email,
        user_email: email,
        message: messagem, 
      });

    });
};