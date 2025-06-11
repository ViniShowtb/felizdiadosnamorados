<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Te amo pra hoje e sempre! 💝</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(to bottom right, #ffafbd, #ffc3a0);
      color: #ff4757;
      text-align: center;
      padding: 20px;
    }
    button {
      background-color: #ff6b6b;
      color: white;
      border: none;
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background-color: #ff8787;
    }
  </style>
</head>
<body>

  <h1>💖 Kevelin 💖</h1>
  <p>Eu te amo muito, você me ama?</p>
  <button id="yesBtn">Sim</button>
  <button id="noBtn">Não</button>
  <div id="result"></div>

  <!-- Imagem será inserida por JS -->
  <!-- Contador de dias será inserido por JS -->

  <audio id="bgMusic" src="https://res.cloudinary.com/dg7nzyh4b/video/upload/v1749645032/Ac%C3%BAstico_Delacruz___Me_Leva_VQ2NPHdTb-0_mduo9c.mp3" autoplay loop></audio>

  <script>
    // 💝 CONFIGURAÇÕES PERSONALIZADAS
    const CONFIG = {
      valentineName: "Kevelin",
      pageTitle: "Te amo pra hoje e sempre! 💝",
      questions: {
        first: {
          text: "Eu te amo muito, você me ama?",
          yesBtn: "Sim",
          noBtn: "Não",
          secretAnswer: "Ti amo muitu! ❤️"
        }
      },
      loveMessages: {
        extreme: "Me ama demais ein, mas te amo mais! 🥰🚀💝"
      },
      celebration: {
        title: "Eu sou a pessoa mais sortuda do mundo por ter você! 💝💓",
        message: "Nada vale mais que você e a Lalá em minha vida! ❤️",
        emojis: "🎁💖🤗💝💋❤️💕"
      },
      colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
      },
      image: {
        enabled: true,
        imageUrl: "https://i.postimg.cc/fT24TsdL/My-boo.png",
        altText: "Foto nossa ❤️",
        style: {
          width: "300px",
          borderRadius: "15px",
          margin: "20px auto",
          display: "block",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
        }
      },
      music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dg7nzyh4b/video/upload/v1749645032/Ac%C3%BAstico_Delacruz___Me_Leva_VQ2NPHdTb-0_mduo9c.mp3",
        startText: "🎵 Ligar música",
        stopText: "🔇 Parar música",
        volume: 1.0
      },
      sinceDate: {
        enabled: true,
        startDate: "2024-12-24T00:00:00",
        title: "⏳ Desde o dia que mudou minha vida...",
        prefix: "Estamos juntos há: ",
        style: {
          fontSize: "20px",
          color: "#ff4757",
          textAlign: "center",
          marginTop: "20px"
        }
      }
    };

    window.VALENTINE_CONFIG = CONFIG;

    // ✅ MOSTRA IMAGEM
    (function showValentineImage() {
      const cfg = CONFIG;
      if (cfg.image && cfg.image.enabled && cfg.image.imageUrl) {
        const img = document.createElement("img");
        img.src = cfg.image.imageUrl;
        img.alt = cfg.image.altText || "Imagem especial";
        const style = cfg.image.style || {};
        for (let key in style) {
          img.style[key] = style[key];
        }
        document.addEventListener("DOMContentLoaded", () => {
          document.body.appendChild(img);
        });
      }
    })();

    // ✅ CONTADOR DESDE QUE SE CONHECERAM
    (function showSinceDateCounter() {
      const cfg = CONFIG;
      if (!cfg.sinceDate || !cfg.sinceDate.enabled) return;

      function formatTime(delta) {
        const days = Math.floor(delta / (1000 * 60 * 60 * 24));
        const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((delta / (1000 * 60)) % 60);
        const seconds = Math.floor((delta / 1000) % 60);
        return `${days} dias, ${hours}h, ${minutes}min, ${seconds}s`;
      }

      const container = document.createElement("div");
      container.style = Object.entries(cfg.sinceDate.style || {})
        .map(([key, value]) => `${key}: ${value}`)
        .join(";");

      const title = document.createElement("h3");
      title.textContent = cfg.sinceDate.title;
      container.appendChild(title);

      const timerText = document.createElement("p");
      timerText.textContent = cfg.sinceDate.prefix;
      container.appendChild(timerText);

      document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(container);
        const start = new Date(cfg.sinceDate.startDate);
        setInterval(() => {
          const now = new Date();
          const delta = now - start;
          timerText.textContent = `${cfg.sinceDate.prefix} ${formatTime(delta)}`;
        }, 1000);
      });
    })();

    // ✅ BOTÕES DE AMOR
    document.addEventListener("DOMContentLoaded", () => {
      const yesBtn = document.getElementById("yesBtn");
      const noBtn = document.getElementById("noBtn");
      const result = document.getElementById("result");

      yesBtn.textContent = CONFIG.questions.first.yesBtn;
      noBtn.textContent = CONFIG.questions.first.noBtn;

      yesBtn.addEventListener("click", () => {
        result.innerHTML = `
          <h2>${CONFIG.celebration.title}</h2>
          <p>${CONFIG.celebration.message}</p>
          <p style="font-size: 24px;">${CONFIG.celebration.emojis}</p>
        `;
      });

      noBtn.addEventListener("click", () => {
        result.textContent = CONFIG.questions.first.secretAnswer;
      });
    });
  </script>
</body>
</html>
