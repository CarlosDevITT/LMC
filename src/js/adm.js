document.addEventListener("DOMContentLoaded", function () {
    const btnLogin = document.querySelector('.btn-login');

    btnLogin.addEventListener('click', function () {
      const usuario = document.querySelector('input[name="usuario"]').value;
      const senha = document.querySelector('input[name="senha"]').value;

      // Verifica as credenciais
      if (usuario === "ADM123" && senha === "123456") {
        window.location.href = 'http://127.0.0.1:5500/adm.html'; // Substitua 'pagina_admin.html' pelo nome da sua página de administrador
      } else {
        alert('Credenciais inválidas. Tente novamente.'); // Pode personalizar esta mensagem conforme necessário
      }
    });
  });