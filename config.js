// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE AQUI 💝
// ============================================

const CONFIG = {
    // Nome do seu amor que aparece no título
    valentineName: "Kevelin",

    // Título da aba do navegador
    pageTitle: "Te amo pra hoje e sempre! 💝",

    // Emojis flutuantes no fundo
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝'],
    },

    // Perguntas e respostas
    questions: {
        first: {
            text: "Você me ama?",
            yesBtn: "Sim",
            noBtn: "Não",
            secretAnswer: "Ti amo muitu! ❤️"
        },
        second: {
            text: "Quanto você me ama?",
            startText: "Tanto assim!",
            nextBtn: "Próximo! ❤️"
        },
        third: {
            text: "Nunca vai me largar? 🌹",
            yesBtn: "Nunca!",
            noBtn: "Talvez largue ein!"
        }
    },

    // Medidor de amor
    loveMessages: {
        extreme: "Me ama demais ein, mas te amo mais! 🥰🚀💝",
        high: "Slc, me ama demais! 🚀💝",
        normal: "Te amo muito mais que isso! 🥰"
    },

    // Mensagem de celebração
    celebration: {
        title: "Eu sou a pessoa mais sortuda do mundo por ter você! 💝💓",
        message: "Nada vale mais que você e a Lalá em minha vida! ❤️",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Esquema de cores
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animações
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Música de fundo (opcional)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dg7nzyh4b/video/upload/v1749645032/Ac%C3%BAstico_Delacruz___Me_Leva_VQ2NPHdTb-0_mduo9c.mp3",
        startText: "🎵 Ligar música",
        stopText: "🔇 Parar música",
        volume: 1.0
    },

    // Imagem personalizada
    image: {
        enabled: true,
        imageUrl: "https://via.placeholder.com/300x200?text=Foto+nossa+%E2%9D%A4%EF%B8%8F", // Substitua por sua imagem real
        altText: "Foto nossa ❤️",
        style: {
            width: "300px",
            borderRadius: "15px",
            margin: "20px auto",
            display: "block",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
        }
    }
};

// ⚠️ Não altere abaixo desta linha, a menos que saiba o que está fazendo
window.VALENTINE_CONFIG = CONFIG;

// ✅ Script para exibir imagem personalizada automaticamente
(function showValentineImage() {
    const cfg = window.VALENTINE_CONFIG;
    if (cfg.image && cfg.image.enabled && cfg.image.imageUrl) {
        document.addEventListener("DOMContentLoaded", () => {
            const img = document.createElement("img");
            img.src = cfg.image.imageUrl;
            img.alt = cfg.image.altText || "Imagem especial";

            // Aplica estilos
            const style = cfg.image.style || {};
            for (let key in style) {
                img.style[key] = style[key];
            }

            // Adiciona ao corpo da página
            document.body.appendChild(img);
        });
    }
})();
