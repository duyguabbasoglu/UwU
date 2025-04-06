document.addEventListener("DOMContentLoaded", () => {
    const gunlukNotlari = [
      { date: "06.04.2025", message: "     insanlara gosterdigim saygi ve dolayisiyla toleransin bana gosterilmedigini ustune usluk ciddi derecede kullanildigimi farkettim. biraz kendime kizdim duygularimi sonuna kadar disa vurdum sonra sakinlestim iyi geldi ve kalkip oncelikle kendim icin yasamaya basladim 🍂" },
    ];
  
    const container = document.getElementById("gunlukKutusu");
    container.innerHTML = gunlukNotlari
      .slice(0, 3)
      .map(entry => `
        <div class="gunluk-card">
          <div class="gunluk-msg">${entry.message}</div>
          <div class="gunluk-date">${entry.date}</div>
        </div>
      `).join('');
  
    const messages = [
      "bir patates hakkında düşündü.",
      "kahvesine tuz attı ama pişman olmadı.",
      "pizzanın ananaslı olup olmaması konusunda içsel bir savaş verdi.",
      "internette bir şey ararken 3 saat sonra bambaşka bir konudaydı.",
      "bugün biriyle konuşmamıştı. Sen ilk kişisin :)"
    ];
    document.getElementById("visitormesg").innerText =
      `Senden önce buraya gelen kişi ${messages[Math.floor(Math.random() * messages.length)]}`;
  
    const playlistId = "2pCDa4t82fXT0VQFwSzFyM";
    const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.width = "100%";
    iframe.height = "152";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
    iframe.style.borderRadius = "12px";
    const box = document.getElementById("spotifyBox");
    if (box) box.appendChild(iframe);


    const filmListesi = [
        {
          "name": "When Harry Met Sally…",
          "link": "https://letterboxd.com/film/when-harry-met-sally/"
        },
        {
          "name": "The Substance",
          "link": "https://letterboxd.com/film/the-substance/"
        },
        {
          "name": "Sisyphus",
          "link": "https://letterboxd.com/film/sisyphus-2021/"
        },
        {
          "name": "Your Name.",
          "link": "https://letterboxd.com/film/your-name/"
        },
        {
          "name": "Hamilton",
          "link": "https://letterboxd.com/film/hamilton-2020/"
        },
        {
          "name": "Spirited Away",
          "link": "https://letterboxd.com/film/spirited-away/"
        },
        {
          "name": "The Iron Claw",
          "link": "https://letterboxd.com/film/the-iron-claw-2023/"
        },
        {
          "name": "Magnolia",
          "link": "https://letterboxd.com/film/magnolia/"
        },
        {
          "name": "Miracle in Cell No. 7",
          "link": "https://letterboxd.com/film/miracle-in-cell-no-7/"
        },
        {
          "name": "BoJack Horseman",
          "link": "https://letterboxd.com/film/bojack-horseman-christmas-special-sabrinas/"
        },
        {
          "name": "The Skin I Live In",
          "link": "https://letterboxd.com/film/the-skin-i-live-in/"
        },
        {
          "name": "Freedom Writers",
          "link": "https://letterboxd.com/film/freedom-writers/"
        },
        {
          "name": "Grave of the Fireflies",
          "link": "https://letterboxd.com/film/grave-of-the-fireflies/"
        },
        {
          "name": "Prayers for Bobby",
          "link": "https://letterboxd.com/film/prayers-for-bobby/"
        },
        {
          "name": "Detachment",
          "link": "https://letterboxd.com/film/detachment/"
        },
        {
          "name": "Empire of the Sun",
          "link": "https://letterboxd.com/film/empire-of-the-sun/"
        },
        {
          "name": "Tenet",
          "link": "https://letterboxd.com/film/tenet/"
        },
        {
          "name": "There Will Be Blood",
          "link": "https://letterboxd.com/film/there-will-be-blood/"
        },
        {
          "name": "Girl, Interrupted",
          "link": "https://letterboxd.com/film/girl-interrupted/"
        },
        {
          "name": "The Usual Suspects",
          "link": "https://letterboxd.com/film/the-usual-suspects/"
        },
        {
          "name": "Full Metal Jacket",
          "link": "https://letterboxd.com/film/full-metal-jacket/"
        },
        {
          "name": "Born on the Fourth of July",
          "link": "https://letterboxd.com/film/born-on-the-fourth-of-july/"
        },
        {
          "name": "Liar Liar",
          "link": "https://letterboxd.com/film/liar-liar/"
        },
        {
          "name": "Big Fish",
          "link": "https://letterboxd.com/film/big-fish/"
        },
        {
          "name": "Seven Samurai",
          "link": "https://letterboxd.com/film/seven-samurai/"
        },
        {
          "name": "Lord of War",
          "link": "https://letterboxd.com/film/lord-of-war/"
        },
        //burda kaldim
        {
          "name": "Whiplash",
          "link": "https://letterboxd.com/film/whiplash-2014/"
        },
        {
          "name": "American Honey",
          "link": "https://letterboxd.com/film/american-honey/"
        },
        {
          "name": "Sofra Sırları",
          "link": "https://letterboxd.com/film/serial-cook/"
        },
        {
          "name": "Her",
          "link": "https://letterboxd.com/film/her/"
        },
        {
          "name": "Eternal Sunshine of the Spotless Mind",
          "link": "https://letterboxd.com/film/eternal-sunshine-of-the-spotless-mind/"
        },
        {
          "name": "500 Days of Summer",
          "link": "https://letterboxd.com/film/500-days-of-summer/"
        },
        {
          "name": "The Perks of Being a Wallflower",
          "link": "https://letterboxd.com/film/the-perks-of-being-a-wallflower/"
        },
        {
          "name": "Call Me by Your Name",
          "link": "https://letterboxd.com/film/call-me-by-your-name/"
        },
        {
          "name": "Forgotten",
          "link": "https://letterboxd.com/film/forgotten-2017/"
        },
        {
          "name": "Little Women",
          "link": "https://letterboxd.com/film/little-women-2019/"
        },
        {
          "name": "Arrival",
          "link": "https://letterboxd.com/film/arrival-2016/"
        },
        {
          "name": "Cosmos",
          "link": "https://letterboxd.com/film/cosmos-2014/"
        },
        {
          "name": "Everything Everywhere All at Once",
          "link": "https://letterboxd.com/film/everything-everywhere-all-at-once/"
        },
        {
          "name": "Joker",
          "link": "https://letterboxd.com/film/joker-2019/"
        },
        {
          "name": "Sherlock: His Last Vow",
          "link": "https://letterboxd.com/film/sherlock-his-last-vow/"
        },
        {
          "name": "The Godfather Part II",
          "link": "https://letterboxd.com/film/the-godfather-part-ii/"
        },
        {
          "name": "Perfume: The Story of a Murderer",
          "link": "https://letterboxd.com/film/perfume-the-story-of-a-murderer/"
        }
      ];

    const film = filmListesi[Math.floor(Math.random() * filmListesi.length)];
    const filmBox = document.getElementById("filmOnerisi");
      
    filmBox.innerHTML = `
        <a href="${film.link}" target="_blank" style="text-decoration:none;">
        <div style="font-size:1.2em; color:#3d2f2c; background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2)), url('./images/filmbg.jpeg'); padding:14px 20px; border-radius:12px; box-shadow:0 1px 5px rgba(0,0,0,0.05);">
        🎬 ${film.name}
        </div>
        </a>
      `;

      const terminalLines = [
        "Booting UWU...",
        "Loading pixel clouds ☁️",
        `Welcome back, dreamer_${Math.floor(Math.random() * 900 + 100)}`,
        `This is your ${Math.floor(Math.random() * 10 + 1)}th visit`,
        `📟  ${Math.floor(Math.random() * 500 + 100)} digital souls wandered here`,
        "",
        "✨ Enter a nickname or continue as anonymous ✨"
      ];
      
      let currentLine = 0;
      const textElem = document.getElementById("terminalText");
      function typeLine() {
        if (currentLine >= terminalLines.length) return;
        textElem.innerHTML += terminalLines[currentLine] + "\n";
        currentLine++;
        setTimeout(typeLine, 900);
      }
      typeLine();
      
      function startBlog() {
        const nick = document.getElementById("nickInput").value;
        const nameToUse = nick || `dreamer_${Math.floor(Math.random() * 1000)}`;
        alert(`hello ${nameToUse}, your dream starts now.`);
        document.querySelector(".welcome-terminal").style.display = "none";

      }
  });


  function cekilisYap() {
    const mesajlar = [
      "exine yaz :) şakaydı sakın ‼️",
      "roblox için eylem yap 💀",
      "kütüphanede enes batur youtube budur diye bağır 🥳",
      "yola atla ve ilk gördüğüne evlilik teklifi eyle",
      "diplomanı denize at (zaten yok)",
      "ropdöşambırla görüntülü konuş UwU",
      "sufle yak 😋",
      "mustafa sarıgülle görüntülü konuş (opsiyonel)",
      "admine yazman gerekiyomuş 🙃",
      "devrimcilere git ve teufelslied çal :)",
      "beni beni bihterini diye çığlık at",
      "aylardır ertelediğin o spora git (gitmicen dimi?)",
      "",
      "bugün onunla uyanmadın ama çay bardağında onun yüzü yansıdı dimi",
      "ellerini tutmadım ama elim hâlâ terli senin yüzünden",
      "seslenmiyorum ama dinliyorsan yaz bi nokta koy",
      "beni sev ama gösterme çünkü hiç yemedim gibi yapmam lazım 📉",
      "hiç tanımadığın biri seni hatırlatıyor o da mı manyak bilmiyorum",
      "aşık olmayı unuttum ama spotify algoritmam seni unutmamış",
      "içimde bir ses var ama o da senden bıkmış gibi susuyo",
      "beni unuttuysan bari storyme bak bi zahmet",
      "senin adını duymak bile midemi bulandırmıyor artık bu mu iyileşmek",
        "hanene ay doğuyor (kesinlikle biscolatadan çalmadım :))",
        "kocaman bi kısmetin var (kesinlikle biscolatadan çalmadım :))",
        "filmlerdeki gibi bi aşk yaşayacaksın (kesinlikle biscolatadan çalmadım :))",
        "üç vakte kadar ağzın kulaklarında (kesinlikle biscolatadan çalmadım :))",
        "onunla yağmurlu bi günde tanışacaksın (kesinlikle biscolatadan çalmadım :))",
        "seni düşünen biri var (kesinlikle biscolatadan çalmadım :))",
        "beside yatıran bir aşka yelken açacaksın (kesinlikle biscolatadan çalmadım :))",
        "romantik bi gün geçireceksin (kesinlikle biscolatadan çalmadım :))",
        "sevdiğin kişi sana ulaşacak (kesinlikle biscolatadan çalmadım :))",
        "aniden mesaj seni vuracak (kesinlikle biscolatadan çalmadım :))",
        "üç vakte kadar yollar sizin (kesinlikle biscolatadan çalmadım :))",
        "bugün çok güzel olacaksın (kesinlikle biscolatadan çalmadım :))",
        "aşk bi anda kapını çalacak (kesinlikle biscolatadan çalmadım :))",
        "gözler seni bi yolculuğa çıkaracak (kesinlikle biscolatadan çalmadım :))",
        "o sana bakacak sen evrene akacaksın (kesinlikle biscolatadan çalmadım :))",
        "yüreğin hop etmiş (kesinlikle biscolatadan çalmadım :))",
        "terfi geliyorum demez hazır ol (kesinlikle biscolatadan çalmadım :))",
        "hanede mutluluk var (kesinlikle biscolatadan çalmadım :))",
        "aradığın prensle tanışacaksın (kesinlikle biscolatadan çalmadım :))",
        "seviliyorsun seviyorsun (kesinlikle biscolatadan çalmadım :))",
        "kalbinin anahtarı sahibini bulacak (kesinlikle biscolatadan çalmadım :))",
        "iki vakte kadar romantik bi siparişin var (kesinlikle biscolatadan çalmadım :))",
        "sürpriz bi hediye yolda (kesinlikle biscolatadan çalmadım :))",
        "kısmetin kanat takmış sana geliyor (kesinlikle biscolatadan çalmadım :))",
        "onunla söz gününüzü konuşacaksınız (kesinlikle biscolatadan çalmadım :))",
        "kısa ama unutulmaz bir anı yaşayacaksın (kesinlikle biscolatadan çalmadım :))",
        "ufak dünyalardan büyük kalpler doğacak (kesinlikle biscolatadan çalmadım :))",
        "uzun bi yolculuk başlıyor (kesinlikle biscolatadan çalmadım :))",
        "romantik bi yere biletin var (kesinlikle biscolatadan çalmadım :))",
    ];
  
    const rastgele = mesajlar[Math.floor(Math.random() * mesajlar.length)];
    document.getElementById("cekilisSonucu").innerText = rastgele;
  }