document.addEventListener("DOMContentLoaded", () => {

    // Günlük Rastgele Cümle
    const dailySentenceElement = document.querySelector(".gunluk-cumle p");
    const sentences = [
        "Bugün harika şeyler olabilir!",
        "Kendine iyi bakmayı unutma.",
        "Hayat bazen saçma ama komik değil mi?",
        "Bir kedi görmek sana uğur getirebilir.",
        "Yeni bir şey öğrenmenin tam zamanı!",
        "Belki de bugün gelecekte hatırlayacağın günlerden biri olacak!"
    ];
    dailySentenceElement.textContent = sentences[Math.floor(Math.random() * sentences.length)];

    // Dinamik Klavye Efekti
    const keyboard = document.querySelector(".keyboard");
    const keySounds = ["click1.mp3", "click2.mp3", "click3.mp3"]; // Örnek ses dosyaları

    document.addEventListener("keydown", (event) => {
        if (!event.key.match(/^[a-zA-Z0-9]$/)) return; // Sadece harf ve rakamları al
        const key = document.createElement("div");
        key.classList.add("key");
        key.textContent = event.key.toUpperCase();
        key.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
        keyboard.appendChild(key);

        // Rastgele bir ses çal
        const sound = new Audio(keySounds[Math.floor(Math.random() * keySounds.length)]);
        sound.play();

        // 500ms sonra tuşu kaldır
        setTimeout(() => key.remove(), 500);
    });

    // Ruh Haline Göre Blog İçeriği
    const moodSelector = document.querySelector(".duygu-bar");
    const moods = ["Mutlu", "Üzgün", "Nostaljik", "Heyecanlı", "Yorgun"];
    const moodText = {
        "Mutlu": "Bugün harika bir gün! 🎉",
        "Üzgün": "Bazen kötü hissetmek normaldir. Kendine zaman tanı. 💙",
        "Nostaljik": "Eski güzel günleri hatırlamak güzeldir. 🎶",
        "Heyecanlı": "Bugün yeni bir macera seni bekliyor! 🚀",
        "Yorgun": "Kendine bir kahve ısmarla ve biraz rahatla. ☕"
    };

    let moodIndex = 0;
    moodSelector.addEventListener("click", () => {
        moodIndex = (moodIndex + 1) % moods.length;
        moodSelector.querySelector("h2").textContent = `🎭 ${moods[moodIndex]}`;
        moodSelector.querySelector("p")?.remove(); // Önceki metni temizle
        const moodParagraph = document.createElement("p");
        moodParagraph.textContent = moodText[moods[moodIndex]];
        moodSelector.appendChild(moodParagraph);
    });

});
