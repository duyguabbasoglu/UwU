document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "bir patates hakkında düşündü.",
        "kahvesine tuz attı ama pişman olmadı.",
        "pizzanın ananaslı olup olmaması konusunda içsel bir savaş verdi.",
        "internette bir şey ararken 3 saat sonra bambaşka bir konudaydı.",
        "kendine spora başlayacağını söyledi ve hemen unuttu.",
        "bu sitenin ne olduğunu bilmeden girdi ve hala anlamaya çalışıyor.",
        "Google a acaba yazdı ve kendini burada buldu.",
        "Spotifyda çalan şarkıya ağlamayı düşündü ama sonra geçti.",
        "bir şakaya 7 dakika boyunca güldü.",
        "uyumak için telefona bakmamaya söz verdi ama yine buradaydı.",
        "bu sitenin ne olduğunu bilmeden girdi ve hala anlamaya çalışıyor.",
        "Discordda çevrimdışı olarak aktifti.",
        "bahar temizliği yapacaktı ama tarayıcıyı temizledi.",
        "kedisi klavyeye basınca buraya uçtu.",
        "bugün de delirmedik tweetini beğendi.",
        "bu sitenin ne olduğunu bilmeden girdi ve hala anlamaya çalışıyor.",
        "duygularını Google Translate’e yazdı.",
        "AI ile konuşmaya başladı, sonra alıştı.",
        "eski mesajları okuyup cringe oldu.",
        "gece 2de felsefi kurabiye tariflerini düşündü",
        "ekmek almaya diye çıktı, yeryüzüne deploy etti.",
        "404 hatası verdi ama duygusal olarak.",
        "‘daha ne kadar saçmalayabilir?’ derken bu siteye geldi.",
        "bu sitenin ne olduğunu bilmeden girdi ve hala anlamaya çalışıyor.",
        "rüya görüyordu sandı ama burası gerçekti.",
        "bugün kendine tatlı alacaktı, tatlı linkler buldu.",
        "bir şiiri beğendi ama anlamadı.",
        "kendine not yazdı ama sonra unuttu.",
        "açtığı 27. sekmede hala cevap arıyordu.",
        "hayatını toparlamaya niyetlendi, sonra bu siteyi açtı.",
        "sessizce bağırmak istedi, o yüzden yazı okuyor.",
        "internetin anlamı üzerine düşündü, sonra vazgeçti.",
        "bu sitenin ne olduğunu bilmeden girdi ve hala anlamaya çalışıyor.",
        "bugün biriyle konuşmamıştı. Sen ilk kişisin :)"
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