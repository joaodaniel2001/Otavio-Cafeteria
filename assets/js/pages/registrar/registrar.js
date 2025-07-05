const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('password').value.trim();
  const data = document.getElementById('date').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nome || !senha || !data || !email) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const usuario = {
    nome,
    senha,
    dataNascimento: data,
    email
  };

  // Salva no localStorage usando a chave 'dados.json'
  localStorage.setItem('dados.json', JSON.stringify(usuario));

  alert('Cadastro realizado com sucesso!');

  form.reset();
});
