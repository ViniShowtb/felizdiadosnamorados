// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE AQUI 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Kevelin",

    // The title that appears in the browser tab
    pageTitle: " Te amo pra hoje e sempre! 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝'],  // Heart emojis
    },

    // Questions and answers
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

    // Love meter messages
    loveMessages: {
        extreme: "Me ama demais ein, mas te amo mais! 🥰🚀💝",
        high: "Slc, me ama demais! 🚀💝",
        normal: " Te amo muito mais que isso! 🥰"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Eu sou a pessoa mais sortuda do mundo por ter você! 💝💓",
        message: "Nada vale mais que você e a Lalá em minha vida! ❤️",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music (Optional)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dg7nzyh4b/video/upload/v1749645032/Ac%C3%BAstico_Delacruz___Me_Leva_VQ2NPHdTb-0_mduo9c.mp3",
        startText: "🎵 Ligar música",
        stopText: "🔇 Parar música",
        volume: 1.0
    },

    // ✅ IMAGEM PERSONALIZADA
    image: {
        enabled: true,
        imageUrl: "https://i.postimg.cc/fT24TsdL/My-boo.png",  // Troque por sua URL real
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

// Não altere abaixo desta linha a menos que saiba o que está fazendo
window.VALENTINE_CONFIG = CONFIG;

// ✅ Script para exibir a imagem automaticamente
(function showValentineImage() {
    const cfg = window.VALENTINE_CONFIG;
    if (cfg.image && cfg.image.enabled && cfg.image.imageUrl) {
        const img = document.createElement("img");
        img.src = cfg.image.imageUrl;
        img.alt = cfg.image.altText || "Imagem especial";

        // Aplica estilos definidos no config
        const style = cfg.image.style || {};
        for (let key in style) {
            img.style[key] = style[key];
        }

        // Adiciona ao body (ou você pode trocar por uma div específica)
        document.addEventListener("DOMContentLoaded", () => {
            document.body.appendChild(img);
        });
    }
})();
