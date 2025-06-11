// ============================================
// 💝 CUSTOMIZE SEU SITE DE NAMORADOS AQUI 💝
// ============================================

const CONFIG = {
    // Nome da pessoa amada
    valentineName: "Kevelin",

    // Título da aba do navegador
    pageTitle: "Te amo pra hoje e sempre! 💝",

    // Perguntas e respostas
    questions: {
        first: {
            text: "Eu te amo muito, você me ama?",
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

    // Níveis de amor 😍
    loveMessages: {
        extreme: "Me ama demais ein, mas te amo mais! 🥰🚀💝",
        high: "Slc, me ama demais! 🚀💝",
        normal: " Te amo muito mais que isso! 🥰"
    },

    // Mensagem final de celebração
    celebration: {
        title: "Eu sou a pessoa mais sortuda do mundo por ter você! 💝💓",
        message: "Nada vale mais que você e a Lalá em minha vida! ❤️",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Cores do site
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

    // Música de fundo 🎶
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dg7nzyh4b/video/upload/v1749645032/Ac%C3%BAstico_Delacruz___Me_Leva_VQ2NPHdTb-0_mduo9c.mp3",
        startText: "🎵 Ligar música",
        stopText: "🔇 Parar música",
        volume: 1.0
    },

    // Imagem especial ❤️
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

    // Contador desde a data que se conheceram
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

// Exportar para uso global
window.VALENTINE_CONFIG = CONFIG;
