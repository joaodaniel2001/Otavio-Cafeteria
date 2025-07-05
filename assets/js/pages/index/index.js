// Seleciona o formulário pelo id
const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // previne o envio padrão do formulário (recarregar página)

  // Pega os valores dos inputs
  const nome = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('password').value.trim();
  const data = document.getElementById('date').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validar que todos os campos foram preenchidos (extra)
  if (!nome || !senha || !data || !email) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Monta o objeto JSON com os dados do formulário
  const usuario = {
    nome: nome,
    senha: senha,
    dataNascimento: data,
    email: email
  };

  // Converte objeto para string JSON e salva no localStorage
  localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
});
