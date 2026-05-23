(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const L=e=>{const a=e.replace(/^#/,"");return a===""||a==="/"?"/":("/"+a.replace(/^\/+/,"")).replace(/\/+$/,"")||"/"};function k(){return L(window.location.hash)}function S(e){const{routes:a,outlet:s,fallback:l,titleBase:r,onNavigate:i}=e,p=h=>a[h]??a[l],m=()=>{const h=k(),b=p(h),w=a[h]?h:l;document.title=`${b.title} · ${r}`,s.innerHTML=b.render(),s.classList.remove("view-enter"),s.offsetWidth,s.classList.add("view-enter"),b.onMount?.(s),window.scrollTo({top:0,behavior:"instant"}),i?.(w)};return window.addEventListener("hashchange",m),m(),m}const o=e=>`/ruyned/${e.replace(/^\/+/,"")}`,t={name:"RUYNED",genre:"Black / Thrash / Speed Metal",city:"Timișoara",country:"Romania",formed:"March 19, 2023",foundedRoman:"MMXXIII",label:"Osmose Productions",status:"Active",themes:"Death · Mental disorders · Morbidity",logo:o("logo.png"),logoMark:o("logo-mark.png"),hero:o("hero.jpg"),tagline:"Romanian Speed Metal Assault",bio:["Forged in Timișoara in the spring of 2023, RUYNED is a three-headed engine of black, thrash and speed metal — old-school venom sharpened on a modern blade. The members first crossed paths in December 2022 and, by May 2023, had begun carving their name into the Romanian underground.",'Their sound is unforced and instinctive: "we just write music that we like, and this is how we came up with our sound." Lyrically the band circles death, morbid obsession and the unravelling of the mind — blunt, ugly and unrepentant.',"The self-released demo Morbid Pleasures landed in September 2023. The debut full-length Eternal Torment followed in July 2024 to warm reception from crowds and press alike, with the Sex'n Speed assault arriving in May 2025. Their Osmose Productions debut, Profanum Sacrificium — a concept record on the European witch hunts — descends June 26, 2026."]},M=[{name:"Bogdan Mateescu",role:"Lead Guitar · Vocals",influences:["Bütcher","Hellripper","Cruel Force","Sabbat","Midnight","Kreator","Bathory"]},{name:"Olescher Tiberiu",role:"Bass",influences:["Dying Fetus","Mortician","Iron Maiden","Arch Enemy","Bütcher","Hellripper"]},{name:"Mihai Marinescu",role:"Drums",influences:["Sarcófago","Discharge","Slayer","Dream Theater","Bütcher","Suicidal Tendencies","G.I.S.M."]},{name:"Andrei Crisan",role:"Guitar",influences:[],former:!0,note:"Departed August 2024."}],v=[{id:"profanum-sacrificium",title:"Profanum Sacrificium",type:"Album",year:"2026",date:"June 26, 2026",cover:o("covers/profanum-sacrificium.jpg"),blurb:"A blasphemous speed metal assault laced with black, thrash and heavy metal — the first half raw violence and decadence, the second a conceptual descent into the European witch hunts of the 15th–17th centuries. The Osmose Productions debut.",bandcamp:"https://osmoseproductions.bandcamp.com/album/profanum-sacrificium",preorder:!0,label:"Osmose Productions",tracks:[{n:1,title:"Intro"},{n:2,title:"Speedchain"},{n:3,title:"Sex'n Speed"},{n:4,title:"Sex Commander 666"},{n:5,title:"Orgasm Through Death"},{n:6,title:"Daemonis Ritualis"},{n:7,title:"Profanum Sacrificium"},{n:8,title:"Malleus Maleficarum"},{n:9,title:"Witches Gallöw"},{n:10,title:"Outro"}]},{id:"sexn-speed",title:"Sex'n Speed",type:"Album",year:"2025",date:"May 15, 2025",cover:o("covers/sexn-speed.jpg"),blurb:"Blackthrashing speed from Romania — three rounds, no mercy.",bandcamp:"https://ruyned.bandcamp.com/album/sexn-speed",bw:!0,tracks:[{n:1,title:"Speedchain",length:"3:20"},{n:2,title:"Sex'n Speed",length:"3:05"},{n:3,title:"Profanum Sacrificium",length:"2:54"}]},{id:"fleshripper",title:"Fleshripper",type:"Single",year:"2024",date:"2024",cover:o("covers/eternal-torment.jpg"),blurb:"The cut that tears straight off Eternal Torment.",bandcamp:"https://ruyned.bandcamp.com/track/fleshripper-2",tracks:[{n:1,title:"Fleshripper",length:"2:29"}]},{id:"eternal-torment",title:"Eternal Torment",type:"Album",year:"2024",date:"July 12, 2024",cover:o("covers/eternal-torment.jpg"),blurb:"The debut full-length. Ten tracks of Romanian speed metal assault.",bandcamp:"https://ruyned.bandcamp.com/album/eternal-torment",tracks:[{n:1,title:"Onwards To Execution",length:"1:36"},{n:2,title:"Impaled",length:"3:14"},{n:3,title:"Ruyned",length:"3:09"},{n:4,title:"Fleshripper",length:"2:29"},{n:5,title:"Hellbeast",length:"2:44"},{n:6,title:"What Lies Beneath",length:"3:25"},{n:7,title:"Lobotomized",length:"3:32"},{n:8,title:"9th Gate",length:"2:38"},{n:9,title:"Morbid Pleasures",length:"2:18"},{n:10,title:"Eternal Torment",length:"3:20"}]},{id:"morbid-pleasures",title:"Morbid Pleasures",type:"Demo",year:"2023",date:"September 22, 2023",cover:o("covers/morbid-pleasures.jpg"),blurb:"The first self-released demo — where it all began.",bandcamp:"https://ruyned.bandcamp.com/album/morbid-pleasures-demo",tracks:[{n:1,title:"Intro",length:"0:50"},{n:2,title:"Impaled",length:"3:02"},{n:3,title:"Ruyned",length:"3:36"},{n:4,title:"Morbid Pleasures",length:"2:39"}]}],T=[{date:"Jan 2024",billing:"Support — Impaled Nazarene",venue:"Quantic",city:"Bucharest, RO"},{date:"Sep 22, 2023",billing:"Demo release — 'Morbid Pleasures'",venue:"Metal Bunker Festival",city:"Craiova, RO"}],f=[{label:"Bandcamp",url:"https://ruyned.bandcamp.com/",kind:"listen"},{label:"Spotify",url:"https://open.spotify.com/artist/05h5BfOz6eeltzw1Ewl8U5",kind:"listen"},{label:"YouTube",url:"https://www.youtube.com/channel/UCTiwjOe1MlO1esO0SKQ8cxQ",kind:"listen"},{label:"TIDAL",url:"https://tidal.com/browse/artist/44245734",kind:"listen"},{label:"Instagram",url:"https://www.instagram.com/ruyned.official/",kind:"social"},{label:"Facebook",url:"https://www.facebook.com/p/Ruyned-100091794738465/",kind:"social"},{label:"Metal Archives",url:"https://www.metal-archives.com/bands/Ruyned/3540531372",kind:"archive"}],n=v[0],B=[{label:"Home",path:"/"},{label:"Music",path:"/music"},{label:"Band",path:"/band"},{label:"Live",path:"/live"},{label:"Contact",path:"/contact"}],R=()=>`
  <header class="nav" id="nav">
    <a class="nav__brand" href="#/" aria-label="RUYNED — home">
      <img src="${t.logoMark}" alt="RUYNED" width="863" height="327" />
    </a>

    <button class="nav__toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <nav class="nav__menu" aria-label="Primary">
      ${B.map(e=>`<a class="nav__link" href="#${e.path}" data-path="${e.path}">${e.label}</a>`).join("")}
    </nav>
  </header>`,O=e=>{document.querySelectorAll(".nav__link").forEach(s=>{s.classList.toggle("is-active",s.dataset.path===e)});const a=document.getElementById("nav");a?.classList.remove("is-open"),a?.querySelector(".nav__toggle")?.setAttribute("aria-expanded","false")},E=()=>{const e=document.getElementById("nav");if(!e)return;const a=e.querySelector(".nav__toggle");a?.addEventListener("click",()=>{const l=e.classList.toggle("is-open");a.setAttribute("aria-expanded",String(l))});const s=()=>{e.classList.toggle("is-scrolled",window.scrollY>24)};window.addEventListener("scroll",s,{passive:!0}),s()},_=new Date().getFullYear(),P=()=>`
  <footer class="footer">
    <div class="footer__top">
      <span class="footer__mark">${t.name}</span>
      <span class="footer__tag">${t.tagline}</span>
    </div>

    <nav class="footer__links" aria-label="External links">
      ${f.map(e=>`<a href="${e.url}" target="_blank" rel="noopener noreferrer">${e.label}</a>`).join('<span class="footer__dot">·</span>')}
    </nav>

    <p class="footer__legal">
      ${t.city}, ${t.country} · ${t.label} · MMXXIII—${_}
      <br />
      © ${_} ${t.name}. All artwork © its respective creators. Fan-built tribute site.
    </p>
  </footer>`,A=e=>`<span class="eyebrow">${e}</span>`,$=()=>`
  <div class="divider" aria-hidden="true">
    <svg viewBox="0 0 1200 24" preserveAspectRatio="none" role="presentation">
      <path d="M0 12 L1200 12" />
      <path class="barbs" d="M0 12 L30 4 L60 12 L90 20 L120 12 L150 4 L180 12 L210 20 L240 12
        L270 4 L300 12 L330 20 L360 12 L390 4 L420 12 L450 20 L480 12 L510 4 L540 12 L570 20
        L600 12 L630 4 L660 12 L690 20 L720 12 L750 4 L780 12 L810 20 L840 12 L870 4 L900 12
        L930 20 L960 12 L990 4 L1020 12 L1050 20 L1080 12 L1110 4 L1140 12 L1170 20 L1200 12" />
    </svg>
  </div>`,I=e=>{const a='<span class="tick-sep">✠</span>',s=e.join(a),l=`${s}${a}${s}${a}`;return`
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <span>${l}</span>
        <span>${l}</span>
      </div>
    </div>`},u=(e,a,s="ghost")=>`<a class="btn btn--${s}" href="${a}" target="_blank" rel="noopener noreferrer">${e}</a>`,d=(e,a)=>`
  <header class="section-head">
    ${A(e)}
    <h2 class="section-title">${a}</h2>
  </header>`,j=["BLACK","THRASH","SPEED",t.city.toUpperCase(),"ROMANIA",t.foundedRoman,"NO MERCY"],D=()=>`
  <section class="hero">
    <div class="hero__bg" style="background-image:url('${t.hero}')" aria-hidden="true"></div>
    <div class="hero__veil" aria-hidden="true"></div>

    <div class="hero__inner">
      <p class="hero__kicker">${t.genre} — ${t.city}, ${t.country}</p>
      <img class="hero__logo" src="${t.logoMark}" alt="RUYNED"
           width="863" height="327" fetchpriority="high" />
      <p class="hero__tagline">${t.tagline} — est. ${t.foundedRoman}</p>
      <div class="hero__cta">
        ${u("Listen",n.bandcamp,"solid")}
        <a class="btn btn--ghost" href="#/music">Discography</a>
        <a class="btn btn--ghost" href="#/live">Live Raids</a>
      </div>
    </div>
    <div class="hero__scroll" aria-hidden="true"><span>scroll</span></div>
  </section>

  ${I(j)}

  <section class="feature" id="latest">
    <div class="feature__art">
      ${n.preorder?'<span class="feature__flag">Pre-Order</span>':""}
      <a href="${n.bandcamp}" target="_blank" rel="noopener noreferrer"
         aria-label="${n.preorder?"Pre-order":"Listen to"} ${n.title} on Bandcamp">
        <img src="${n.cover}" alt="${n.title} cover art"
             width="700" height="700" loading="lazy" />
      </a>
    </div>
    <div class="feature__body">
      ${d(n.preorder?"Out "+n.date:"Latest Assault · "+n.year,n.title)}
      <p class="feature__meta">${n.type} · ${n.date}${n.label?" · "+n.label:""}</p>
      <p class="feature__blurb">${n.blurb}</p>
      <ol class="tracklist tracklist--compact">
        ${n.tracks.map(e=>`<li><span class="t-n">${String(e.n).padStart(2,"0")}</span>
              <span class="t-title">${e.title}</span>
              ${e.length?`<span class="t-len">${e.length}</span>`:""}</li>`).join("")}
      </ol>
      <div class="feature__cta">
        ${u(n.preorder?"Pre-order on Bandcamp":"Get it on Bandcamp",n.bandcamp,"solid")}
        <a class="btn btn--ghost" href="#/music">All releases</a>
      </div>
    </div>
  </section>

  ${$()}

  <section class="manifesto">
    <blockquote>
      “We just write music that we like — this is how we came up with our sound.”
    </blockquote>
    <p class="manifesto__body">${t.bio[0]}</p>
    <a class="btn btn--ghost" href="#/band">Read the full story</a>
  </section>

  <section class="teaser">
    ${d("The Catalogue","Releases")}
    <div class="teaser__grid">
      ${v.map(e=>`
        <a class="teaser__card ${e.bw?"is-bw":""}" href="#/music" aria-label="${e.title}">
          ${e.preorder?'<span class="teaser__flag">Pre-Order</span>':""}
          <img src="${e.cover}" alt="${e.title} cover" width="700" height="700" loading="lazy" />
          <div class="teaser__cap">
            <span class="teaser__type">${e.type}</span>
            <span class="teaser__title">${e.title}</span>
            <span class="teaser__year">${e.year}</span>
          </div>
        </a>`).join("")}
    </div>
  </section>
`,x={title:"Home",render:D},N=(e,a)=>`
  <article class="release ${a%2===1?"release--flip":""} ${e.bw?"is-bw":""}" id="${e.id}">
    <div class="release__art">
      <span class="release__badge ${e.preorder?"release__badge--pre":""}">${e.preorder?"Pre-Order":e.type}</span>
      <img src="${e.cover}" alt="${e.title} cover art" width="700" height="700" loading="lazy" />
    </div>
    <div class="release__info">
      <p class="release__date">${e.preorder?"Out ":""}${e.date}${e.label?" · "+e.label:""}</p>
      <h3 class="release__title">${e.title}</h3>
      <p class="release__blurb">${e.blurb}</p>
      <ol class="tracklist">
        ${e.tracks.map(s=>`<li>
              <span class="t-n">${String(s.n).padStart(2,"0")}</span>
              <span class="t-title">${s.title}</span>
              ${s.length?`<span class="t-dots" aria-hidden="true"></span><span class="t-len">${s.length}</span>`:""}
            </li>`).join("")}
      </ol>
      <div class="release__cta">
        ${u(e.preorder?"Pre-order":"Listen / Buy",e.bandcamp,"solid")}
      </div>
    </div>
  </article>`,F=()=>`
  <div class="page page--music">
    ${d("Discography · 2023 — 2025","The Catalogue Of Torment")}
    <div class="releases">
      ${v.map((e,a)=>N(e,a)).join($())}
    </div>
  </div>
`,C={title:"Music",render:F},c=(e,a)=>`<div class="fact"><dt>${e}</dt><dd>${a}</dd></div>`,H=()=>`
  <div class="page page--band">
    ${d("The Cult · est. "+t.foundedRoman,"Who We Are")}

    <div class="band-grid">
      <div class="band-bio">
        ${t.bio.map(e=>`<p>${e}</p>`).join("")}
      </div>
      <aside class="band-facts">
        <dl>
          ${c("Origin",`${t.city}, ${t.country}`)}
          ${c("Formed",t.formed)}
          ${c("Genre",t.genre)}
          ${c("Themes",t.themes)}
          ${c("Label",t.label)}
          ${c("Status",t.status)}
        </dl>
      </aside>
    </div>

    ${$()}

    <section class="lineup">
      <header class="section-head section-head--center">
        <span class="eyebrow">The Trinity</span>
        <h2 class="section-title">Lineup</h2>
      </header>
      <div class="lineup__grid">
        ${M.map(e=>`
          <article class="member ${e.former?"member--former":""}">
            <h3 class="member__name">${e.name}</h3>
            <p class="member__role">${e.role}</p>
            ${e.influences.length?`<ul class="member__inf">${e.influences.map(a=>`<li>${a}</li>`).join("")}</ul>`:""}
            ${e.note?`<p class="member__note">${e.note}</p>`:""}
          </article>`).join("")}
      </div>
      <p class="lineup__foot">Influences span Bütcher, Hellripper, Midnight, Kreator, Bathory, Sarcófago and the wider speed/thrash underground.</p>
    </section>
  </div>
`,q={title:"Band",render:H},Y=f.filter(e=>e.kind==="social"),z=()=>`
  <div class="page page--live">
    ${d("On Stage","Live Raids")}

    <div class="shows">
      <p class="shows__lead">Documented appearances. No upcoming dates are announced here —
        follow the band on socials for the next strike.</p>

      <ul class="show-list">
        ${T.map(e=>`
          <li class="show">
            <span class="show__date">${e.date}</span>
            <span class="show__main">
              <span class="show__billing">${e.billing}</span>
              <span class="show__venue">${e.venue}</span>
            </span>
            <span class="show__city">${e.city}</span>
          </li>`).join("")}
      </ul>

      <div class="shows__upcoming">
        <h3>Next Raid</h3>
        <p>To Be Summoned.</p>
        <div class="shows__cta">
          ${Y.map(e=>u(e.label,e.url,"ghost")).join("")}
        </div>
      </div>
    </div>
  </div>
`,U={title:"Live",render:z},g=(e,a)=>{const s=f.filter(l=>l.kind===a);return s.length?`
    <div class="link-group">
      <h3 class="link-group__title">${e}</h3>
      <ul class="link-list">
        ${s.map(l=>`<li>
              <a class="link-row" href="${l.url}" target="_blank" rel="noopener noreferrer">
                <span class="link-row__label">${l.label}</span>
                <span class="link-row__arrow" aria-hidden="true">↗</span>
              </a>
            </li>`).join("")}
      </ul>
    </div>`:""},G=()=>`
  <div class="page page--contact">
    ${d("Spread The Plague","Listen · Follow · Book")}

    <div class="links-grid">
      ${g("Listen","listen")}
      ${g("Follow","social")}
      ${g("Archive","archive")}
    </div>

    <div class="booking">
      <h3>Booking & Contact</h3>
      <p>For shows, distro and unholy alliances, reach out through any of the channels above —
        messages via Instagram or Facebook reach the band directly.</p>
      <p class="booking__sig">${t.name} · ${t.city}, ${t.country} · ${t.label}</p>
    </div>
  </div>
`,W={title:"Contact",render:G},J={"/":x,"/music":C,"/band":q,"/live":U,"/contact":W},y=document.getElementById("app");if(!y)throw new Error("#app mount point missing");y.innerHTML=`
  ${R()}
  <main id="view" class="view" tabindex="-1"></main>
  ${P()}
`;const K=document.getElementById("view");E();S({routes:J,outlet:K,fallback:"/",titleBase:`${t.name} · ${t.genre}`,onNavigate:O});
