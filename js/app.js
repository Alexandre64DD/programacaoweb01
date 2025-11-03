console.log("JavaScript carregado com sucesso!");

function sobreTemplate() {
  return `
    <h2>Sobre Nós</h2>
    <p>Somos uma organização sem fins lucrativos que visa apoiar projetos sociais e ajudar comunidades carentes.</p>
  `;
}

function contatoTemplate() {
  return `
    <h2>Contato</h2>
    <form id="contatoForm">
      <input type="text" id="nome" placeholder="Seu nome" required>
      <input type="email" id="email" placeholder="Seu email" required>
      <textarea id="mensagem" placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <p id="feedback"></p>
  `;
}

function navigate(page) {
  const app = document.getElementById('app');
  if (page === 'sobre') app.innerHTML = sobreTemplate();
  if (page === 'contato') {
    app.innerHTML = contatoTemplate();
    attachFormEvents();
  }
}

function attachFormEvents() {
  const form = document.getElementById('contatoForm');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      feedback.textContent = "Por favor, preencha todos os campos!";
      feedback.style.color = "red";
      return;
    }

    localStorage.setItem('contato', JSON.stringify({ nome, email, mensagem }));

    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "green";
    form.reset();
  });
}

navigate('home');


function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.remove('high-contrast');
}

function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  document.body.classList.remove('dark-mode');
}
