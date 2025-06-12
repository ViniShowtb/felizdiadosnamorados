function atualizarContador() {
  const inicio = new Date(dataInicio);
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

  document.getElementById("data-inicio").textContent =
    inicio.toLocaleDateString('pt-BR');
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

document.addEventListener("DOMContentLoaded", () => {
  atualizarContador();
  setInterval(atualizarContador, 1000);
});
