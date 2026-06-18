// lista-kanalow.js
const CANALI_FISSI = [
    { name: "EUROSPORT 4K", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020019/tim-ouah/CHN43FN/MONOGRAM_ESP4K_WHITE_V2-BjK0", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport4k)/manifest.mpd", drm: '{"9ceae06c6ad34aada83ba86c0b511452":"406862beb4af1ef8fe04ba15d9936360","fcd924bd2e45470fa2ae50ef05e357c0":"266db84d3572bc889185274a90ff31df","dea135e33341468f8a4e8da806d8a6e6":"fb7423db39e6fab75056f8c83f415847","31911db90ee3410f8b38e45659d01fb1":"ac316ab7dfd2b50faf6d44633e4fedd5","a16f2a39adbb4974b8910cec8a651a09":"c2d55e0111af955f47214af209a2c468"}' },
    { name: "EUROSPORT 1", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020000/tim-ouah/CHN43FN/MONOGRAM_ESP1_WHITE_V2-Lv2g", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport1)/manifest.mpd", drm: '{"163303a883824977b05d7357da82f487":"40d5e1198d23aaad9079bdc881f2ca5a"}' },
    { name: "EUROSPORT 2", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020001/tim-ouah/CHN43FN/MONOGRAM_ESP2_WHITE_V2-Zp7E", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport2)/manifest.mpd", drm: '{"edb40da832c44957b49a30351ebccee3":"37979044fd480ae10a441c6c8547b38a"}' },
    { name: "EUROSPORT 3", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020002/tim-ouah/CHN43FN/MONOGRAM_ESP360_WHITE_V4-yiID", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport3)/manifest.mpd", drm: '{"1f0db319a1e3492ca02d1dbcfef176ac":"ef3bc3b15caf33064d1e8f9d0b46b4b1"}' },
    { name: "EUROSPORT 4", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020003/tim-ouah/CHN43FN/MONOGRAM_ESP360_WHITE_V4-3YSY", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport4)/manifest.mpd", drm: '{"eade7aa2314a407da820d6c81167cb90":"c6b701dae6c8bdead2cbe6ecde0769bb"}' },
    { name: "EUROSPORT 5", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020004/tim-ouah/CHN43FN/MONOGRAM_ESP360_WHITE_V4-sv5m", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport5)/manifest.mpd", drm: '{"da9e85e0a6f4459f9344cdb544c22a4e":"6af3a1f0911da1e5f6a196872ab5fbfe"}' },
    { name: "EUROSPORT 6", group_title: "EUROSPORT", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020005/tim-ouah/CHN43FN/MONOGRAM_ESP360_WHITE_V4-H53i", url: "https://timlivetu0.cb.ticdn.it/Content/DASH/Live/channel(eurosport6)/manifest.mpd", drm: '{"7395986fd46d4d0ab472471c224621e3":"adf1f40a8db52e319a18ca00a4dbe0aa"}' },
    { name: "EUROSPORT 1", group_title: "EUROSPORT ENG/ITA", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020000/tim-ouah/CHN43FN/MONOGRAM_ESP1_WHITE_V2-Lv2g", url: "https://wp10-s-anp33343334-live-ch-prod.prod.cdn.dmdsdp.com/live/disk1/SV09320/stb-dash-fhd-avc/SV09320.mpd", drm: '{"5697867136904350861b81589b29be76":"35d43b4d23abcfe16b451d7be92ad990","c150a0dc15b73792b9ee5ada5561f793":"d5173922c2c7a8b98510650c3cdb54cd"}' },
    { name: "EUROSPORT 2", group_title: "EUROSPORT ENG/ITA", logo: "https://thumb.prod.front.tim.cptech.pro/http/unsafe/120x90/img-cdn.prod.catalog.tim.cptech.pro/p1/channel/90020001/tim-ouah/CHN43FN/MONOGRAM_ESP2_WHITE_V2-Zp7E", url: "https://wp2-s-anp31323132-live-ch-prod.prod.cdn.dmdsdp.com/live/disk1/SV09322/stb-dash-fhd-avc/SV09322.mpd", drm: '{"a1387afabdd04dfc939593cb1724e8f7":"38ecd1f7b8f248633490f6717d86e17d","72982d60457c390dbce4e8ba6aa9ff33":"5574602ec1bfeda66f459ce603dc17fd"}' },
    { name: "RSI LA 1", group_title: "RSI", logo: "https://static.wikia.nocookie.net/logopedia/images/b/be/RSI_La_1_2012.svg/revision/latest?cb=20200517122539", url: "https://wp3-s-anp31323132-live-ch-prod.prod.cdn.dmdsdp.com/live/disk1/SV09042/stb-dash-fhd-avc/SV09042.mpd", drm: '{"09af5f6eb89041ca8f5d164165142e86":"1989cc9c9ce5b2b52cb93edaaefe8420","d268d810d8a73bd8b7d54a6a087581d2":"1aaf297543168c625e05aa9e27344471"}' },
    { name: "RSI LA 2", group_title: "RSI", logo: "https://static.wikia.nocookie.net/logopedia/images/f/f4/RSI_La_2_2012.svg/revision/latest?cb=20200517122649", url: "https://wp2-s-anp31323132-live-ch-prod.prod.cdn.dmdsdp.com/live/disk1/SV09043/stb-dash-fhd-avc/SV09043.mpd", drm: '{"117d07fd98cc46ef8e09936d0d37c506":"b9528cb3f23eaad789f0f33bf6b01868","166b2f0d56fb32d9b46d4b1ca1b5bf16":"d78ee5c91eb3b9b6d37414a4f789bc9b"}' }
];

const DAZN_FISSI = [
    {
        name: "DAZN 1 WIFI",
        logo: "https://static.wikia.nocookie.net/logopedia/images/1/18/DAZN_1_2024.svg",
        group_title: "DAZN LINEARI",
        stream_headers: "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36",
        license_type: "clearkey",
        license_key: "6164a0abaa7c53c6875fa1e7fe0bb463:271510d3e1259571dcc568a232e397eb",
        url: "https://dct-fs-live-dazn-cdn.dazn.com/@eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzkwMjg3MDMsImtpZCI6IjIwMjIxMTIzIiwicGF0aF9kIjoyLCJwYXRoIjoiOGViOTUwYjA5YmIxZjMzOTBlZDQ4ODgzN2VhZjk5ODY3MDc2OTRkMSIsInNzaWQiOiI2MjFkY2E0ZTE0M2UiLCJwcm90byI6ImRhc2giLCJnZW8iOiJpdCIsImFzbiI6WyIyMTAyNzgiXSwidWEiOiIxNGNkZmY1NTE5YjZjOTQwODUwMmE0ZDI2MmNkNzQ1NjUzODYyMzM4IiwiaWF0IjoxNzc4OTQyMzAzfQ.NjdSMX6Kv5XV2dik4qvJqYNZyjwxFS2AXyRU5_JkMlI/dash/dazn-linear-206/stream.mpd?p=web"
    }
];

// Funkcja generująca tekst formatu M3U bezpośrednio w przeglądarce
function pobierzWygenerowanaListeM3U() {
    let m3uString = "#EXTM3U\n";
    
    CANALI_FISSI.forEach(ch => {
        m3uString += `#EXTINF:-1 tvg-logo="${ch.logo}" group-title="${ch.group_title || 'EUROSPORT'}",${ch.name}\n`;
        m3uString += `#KODIPROP:inputstream.adaptive.license_key=${ch.drm}\n`;
        m3uString += ch.url + '\n';
    });

    DAZN_FISSI.forEach(ch => {
        m3uString += `#EXTINF:-1 group-title="${ch.group_title}" tvg-logo="${ch.logo}" tvg-id="${ch.name.replace(/\s/g, '')}",${ch.name}\n`;
        m3uString += `#KODIPROP:inputstream.adaptive.license_type=${ch.license_type}\n`;
        m3uString += `#KODIPROP:inputstream.adaptive.stream_headers=${ch.stream_headers}\n`;
        m3uString += `#KODIPROP:inputstream.adaptive.license_key=${ch.license_key}\n`;
        m3uString += ch.url + '\n';
    });

    return m3uString;
}

// Eksport tablic i generatora do skryptu głównego
export { pobierzWygenerowanaListeM3U };
