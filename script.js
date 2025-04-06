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

      function aiFali() {
        const kehanetler = [
          "Bugün gökten tavşan düşebilir, dikkatli ol!",
          "Bir kitap sana kendini açıklamaya çalışacak… dinle.",
          "Biri sana sütlü kahve ısmarlayacak ama gizli bir anlamı olacak.",
          "Cüzdanını açtığında eski bir anı fısıldayacak.",
          "Bugün biri sana 'aynen' diyecek, ama aslında seni anlamıyor olacak.",
          "Kendi kendine konuşurken biri seni duyacak ve hak verecek.",
          "Evren sana mor bir çorapla mesaj yollayacak.",
          "Bir şarkı seni ifşa edecek, ama sen cool davranacaksın.",
          "Google'da ne aradığını unuttuğun bir gün olacak. O gün bugün.",
          "Biri sana rastgele 'bugün çok güzelsin' diyecek. Şaşırma."
        ];
      
        const rastgele = kehanetler[Math.floor(Math.random() * kehanetler.length)];
        document.getElementById("falMesaji").innerText = rastgele;
      }
      
      window.aiFali = aiFali;
  });
  