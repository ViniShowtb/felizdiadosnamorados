document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.VALENTINE_CONFIG;

  document.title = cfg.pageTitle;
  document.getElementById("valentineName").textContent = `💖 ${cfg.valentineName} 💖`;

  const q = cfg.questions.first;
  document.getElementById("questionText").textContent = q.text;
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const result = document.getElementById("result");

  yesBtn.textContent = q.yesBtn;
  noBtn.textContent = q.noBtn;

  yesBtn.addEventListener("click", () => {
    result.innerHTML = `
      <h2>${cfg.celebration.title}</h2>
      <p>${cfg.celebration.message}</p>
      <p style="font-size: 24px;">${cfg.celebration.emojis}</p>
    `;
  });

  noBtn.addEventListener("click", () => {
    result.textContent = q.secretAnswer;
  });

  // Imagem
  if (cfg.image.enabled) {
    const img = document.createElement("img");
    img.src = cfg.image.imageUrl;
    img.alt = cfg.image.altText;
    Object.assign(img.style, cfg.image.style);
    document.getElementById("imageContainer").appendChild(img);
  }

  // Música
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("toggleMusicBtn");
  if (cfg.music.enabled) {
    music.src = cfg.music.musicUrl;
    music.volume = cfg.music.volume;
    toggleBtn.textContent = cfg.music.autoplay ? cfg.music.stopText : cfg.music.startText;
    if (cfg.music.autoplay) music.play().catch(() => {});
    toggleBtn.addEventListener("click", () => {
      if (music.paused) {
        music.play();
        toggleBtn.textContent = cfg.music.stopText;
      } else {
        music.pause();
        toggleBtn.textContent = cfg.music.startText;
      }
    });
  }

  // Contador de dias
  if (cfg.sinceDate.enabled) {
    const div = document.getElementById("sinceDate");
    Object.assign(div.style, cfg.sinceDate.style);
    const title = document.createElement("h3");
    title.textContent = cfg.sinceDate.title;
    const time = document.createElement("p");
    div.appendChild(title);
    div.appendChild(time);

    const start = new Date(cfg.sinceDate.startDate);
    setInterval(() => {
      const now = new Date();
      const diff = now - start;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      time.textContent = `${cfg.sinceDate.prefix} ${days} dias, ${hours}h, ${minutes}min, ${seconds}s`;
    }, 1000);
  }

  // Corações animados
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100%";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 800);
});
