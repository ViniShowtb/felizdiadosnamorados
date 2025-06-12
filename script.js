// Funções principais do site
function calcularDias() {
  const inicio = new Date(dataInicio);
  const hoje = new Date();
  const diferenca = hoje - inicio;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  document.getElementById("dias").textContent = dias;
  document.getElementById("data-inicio").textContent = new Date(dataInicio).toLocaleDateString('pt-BR');
  document.getElementById("musica-src").src = musicaUrl;
}

function toggleMusic() {
  const player = document.getElementById("player");
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function mostrarMensagem() {
  document.getElementById("extraMsg").style.display = 'block';
}

document.addEventListener("DOMContentLoaded", calcularDias);
