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
          "name": "Inception",
          "link": "https://letterboxd.com/film/inception/"
        },
        {
          "name": "Fight Club",
          "link": "https://letterboxd.com/film/fight-club/"
        },
        {
          "name": "Interstellar",
          "link": "https://letterboxd.com/film/interstellar/"
        },
        {
          "name": "Pulp Fiction",
          "link": "https://letterboxd.com/film/pulp-fiction/"
        },
        {
          "name": "Parasite 2019",
          "link": "https://letterboxd.com/film/parasite-2019/"
        },
        {
          "name": "Amelie",
          "link": "https://letterboxd.com/film/amelie/"
        },
        {
          "name": "La La Land",
          "link": "https://letterboxd.com/film/la-la-land/"
        },
        {
          "name": "Moonlight",
          "link": "https://letterboxd.com/film/moonlight-2016/"
        },
        {
          "name": "The Father",
          "link": "https://letterboxd.com/film/the-father-2020/"
        },
        {
          "name": "Whiplash",
          "link": "https://letterboxd.com/film/whiplash-2014/"
        },
        {
          "name": "American Honey",
          "link": "https://letterboxd.com/film/american-honey/"
        },
        {
          "name": "The Grand Budapest Hotel",
          "link": "https://letterboxd.com/film/the-grand-budapest-hotel/"
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
          "name": "Lady Bird",
          "link": "https://letterboxd.com/film/lady-bird/"
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
          "name": "The Social Network",
          "link": "https://letterboxd.com/film/the-social-network/"
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
          "name": "Portrait of a Lady on Fire",
          "link": "https://letterboxd.com/film/portrait-of-a-lady-on-fire/"
        },
        {
          "name": "The Handmaiden",
          "link": "https://letterboxd.com/film/the-handmaiden/"
        }
      ];

    const film = filmListesi[Math.floor(Math.random() * filmListesi.length)];
    const filmBox = document.getElementById("filmOnerisi");
      
    filmBox.innerHTML = `
        <a href="${film.link}" target="_blank" style="text-decoration:none;">
        <div style="font-size:1.2em; color:#3d2f2c; background:#fdf7f1; padding:14px 20px; border-radius:12px; box-shadow:0 1px 5px rgba(0,0,0,0.05);">
        🎬 ${film.name}
        </div>
        </a>
      `;

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