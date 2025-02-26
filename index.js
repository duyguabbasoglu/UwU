document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "bir patates hakkında düşündü.",
        "kahvesine tuz attı ama pişman olmadı.",
        "pizzanın ananaslı olup olmaması konusunda içsel bir savaş verdi.",
        "internette bir şey ararken 3 saat sonra bambaşka bir konudaydı.",
        "kendine spora başlayacağını söyledi ve hemen unuttu.",
        "bu sitenin ne olduğunu bilmeden girdi ve hala anlamaya çalışıyor.",
    ];
    document.getElementById("visitormesg").innerText = `Senden önce buraya gelen kişi ${messages[Math.floor(Math.random() * messages.length)]}`;

    document.querySelector(".uwu-logo").addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });
    document.querySelector(".uwu-logo").addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
    });

    document.querySelector(".profile-pic").addEventListener("mouseover", function() {
        this.style.border = "3px solid #ffffff";
    });
    document.querySelector(".profile-pic").addEventListener("mouseleave", function() {
        this.style.border = "3px solid #ff79c6";
    });

    document.addEventListener("keydown", function(event) {
        const keyboard = document.querySelector(".keyboard img");
        keyboard.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        new Audio('./sounds/keypress.mp3').play();
    });
});

function aiFali() {
    const predictions = [
        "Yarın büyük bir sürpriz seni bekliyor!",
        "Bugün bol bol su iç, çünkü evren sana sinyal veriyor.",
        "Bir kedi ile göz göze geldiğinde dilek tut!",
        "3 gün içinde beklenmedik bir haber alacaksın.",
        "Bugün yapacağın ilk seçim tüm kaderini değiştirebilir.",
    ];
    alert(predictions[Math.floor(Math.random() * predictions.length)]);
}

function zamanKapsulu() {
    let message = prompt("Gelecekte kendine ne söylemek istersin?");
    if (message) {
        localStorage.setItem("zamanKapsulu", message);
        alert("Mesajın başarıyla kaydedildi!");
    }
}

function duyguBari() {
    const moods = {
        "mutlu": "Bugün harika hissediyorsun! En iyi mutluluk hikayelerine göz at.",
        "üzgün": "Biraz dertleşmeye mi ihtiyacın var? İşte senin için seçtiğimiz yazılar.",
        "nostaljik": "Eski güzel günleri hatırlamak için mükemmel blog yazıları burada!",
        "gergin": "Rahatlamak için birkaç önerimiz var, derin nefes al ve oku.",
        "aşık": "Aşk dolu hikayeler ve şiirler seni bekliyor!",
    };
    let mood = prompt("Bugün nasıl hissediyorsun? (mutlu, üzgün, nostaljik, gergin, aşık)");
    if (moods[mood]) {
        alert(moods[mood]);
    } else {
        alert("Geçerli bir ruh hali seçmedin!");
    }
}

function sansliCekilis() {
    const tasks = [
        "Bugün yeni bir şey dene!",
        "Bir arkadaşına mesaj at!",
        "Eski fotoğraflarına bak ve bir anı paylaş.",
        "Kendi için 10 dakika meditasyon yap.",
        "Bugün bol bol su içmeyi unutma!",
        "Dışarı çık ve yürüyüş yap.",
    ];
    alert(`Bugün ne yapmalısın? 🤔\n${tasks[Math.floor(Math.random() * tasks.length)]}`);
}

function spotifyOner() {
    const playlists = {
        "mutlu": "https://open.spotify.com/playlist/1",
        "üzgün": "https://open.spotify.com/playlist/2",
        "nostaljik": "https://open.spotify.com/playlist/3",
        "gergin": "https://open.spotify.com/playlist/4",
        "aşık": "https://open.spotify.com/playlist/5",
    };
    let mood = prompt("Bugün nasıl bir müzik dinlemek istersin? (mutlu, üzgün, nostaljik, gergin, aşık)");
    if (playlists[mood]) {
        window.open(playlists[mood], "_blank");
    } else {
        alert("Geçerli bir ruh hali seçmedin!");
    }
}

function miniGame() {
    let score = Math.floor(Math.random() * 100);
    alert(`Mini oyun tamamlandı! Skorun: ${score}`);
    localStorage.setItem("highScore", score);
}
