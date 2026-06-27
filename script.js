// =========================================
// FUNÇÃO: Alternar entre tema claro e escuro
// Emoji ícone de interruptor ⏻
// =========================================
function alternarTema() {
  const body = document.body;
  const btn = document.getElementById('btn-tema');

  // Adiciona ou remove a classe 'tema-escuro' no body
  body.classList.toggle('tema-escuro');

  // Muda o texto do botão conforme o tema ativo
  if (body.classList.contains('tema-escuro')) {
    btn.textContent = '⏻ Tema Claro';
  } else {
    btn.textContent = '⏻ Tema Escuro';
  }
}

// =========================================
// FUNÇÃO: Validar e enviar o formulário de contato
// =========================================
function enviarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const retorno = document.getElementById('mensagem-retorno');

  // Verifica se todos os campos estão preenchidos
  if (nome === '' || email === '' || mensagem === '') {
    retorno.textContent = '⚠️ Por favor, preencha todos os campos antes de enviar.';
    retorno.className = 'erro';
    return;
  }

  // Valida o formato do e-mail usando expressão regular
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatoEmail.test(email)) {
    retorno.textContent = '⚠️ Por favor, informe um e-mail válido. Ex: usuario@dominio.com';
    retorno.className = 'erro';
    return;
  }

  // Se tudo estiver correto, simula o envio
  retorno.textContent = '✅ Mensagem enviada com sucesso! Entrarei em contato em breve.';
  retorno.className = 'sucesso';

  // Limpa os campos do formulário após o envio
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensagem').value = '';
}

// =========================================
// FUNÇÃO: Menu responsivo para dispositivos móveis
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav ul');

  // Cria o botão do menu para mobile
  const btnMenu = document.createElement('button');
  btnMenu.textContent = '☰ Menu';
  btnMenu.id = 'btn-menu';

  // Insere o botão antes do menu
  document.querySelector('nav').prepend(btnMenu);

  // Ao clicar no botão, mostra ou esconde o menu
  btnMenu.addEventListener('click', function () {
    nav.classList.toggle('menu-aberto');
  });
});
