/* ============================================================
   LEGENDEI — motor de legendas (templates por tom) + UI
   Vanilla JS, sem dependências, roda 100% no navegador.
   ============================================================ */

const EMOJIS = {
  conteudo: ["📌","💡","✨","🔎","📖","🧠"],
  engracada: ["😂","🤣","😅","👀","💀","🙃"],
  motivacional: ["🚀","🔥","💪","⭐","🌟","✨"],
  jovem: ["✌️","🤙","🫶","🔥","😎","💜"],
  ingles: ["🤍","✨","🌙","💫","🖤"],
  autor: ["🕊️","📚","🤍","✒️","🌿"],
  educada: ["🙏","💙","✨","🤝","📩"],
  vendas: ["🛒","🔥","👇","✅","💥","⚡"],
};

const AUTORES = [
  { frase: "A simplicidade é o último grau de sofisticação.", autor: "Leonardo da Vinci" },
  { frase: "Conhece-te a ti mesmo.", autor: "Sócrates" },
  { frase: "A persistência é o caminho do êxito.", autor: "Charles Chaplin" },
  { frase: "O que sabemos é uma gota; o que ignoramos é um oceano.", autor: "Isaac Newton" },
  { frase: "Onde há vontade, há um caminho.", autor: "provérbio" },
  { frase: "A vida é o que fazemos dela.", autor: "provérbio" },
  { frase: "Grandes realizações começam com pequenas atitudes.", autor: "provérbio" },
];

const INGLES = [
  "Good vibes only.","Chasing sunsets and dreams.","Less perfection, more authenticity.",
  "Do more of what makes you happy.","Creating my own sunshine.","Stay wild, stay free.",
  "Making memories that last.","Living my best story.",
];

const TONS = [
  { id:"conteudo", nome:"Informativa", emoji:"📌", desc:"Traz valor e ensina algo" },
  { id:"engracada", nome:"Engraçada", emoji:"😂", desc:"Descontraída, com humor" },
  { id:"motivacional", nome:"Motivacional", emoji:"🚀", desc:"Inspira e encoraja" },
  { id:"jovem", nome:"Jovem", emoji:"✌️", desc:"Casual e atual" },
  { id:"ingles", nome:"Em inglês", emoji:"🤍", desc:"Frase estilosa em inglês" },
  { id:"autor", nome:"Frase de autor", emoji:"📚", desc:"Cita um grande autor" },
  { id:"educada", nome:"Institucional", emoji:"🙏", desc:"Formal e cordial" },
  { id:"vendas", nome:"Vendas / CTA", emoji:"🛒", desc:"Chama pra ação, link na bio" },
];

function pick(arr, seed){ return arr[Math.abs(seed) % arr.length]; }
function cap(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

function gerar(tema, tom, idx){
  const t = (tema || "seu post").trim();
  const tLow = t.toLowerCase();
  const s = idx + 1;
  const e = (k) => pick(EMOJIS[tom] || EMOJIS.conteudo, s + k);

  const templates = {
    conteudo: [
      `${e(0)} ${cap(t)} — e por que isso importa mais do que parece.\n\nSalva esse post pra não esquecer. 👇`,
      `Você sabia? ${cap(t)} pode mudar a forma como você vê o assunto. ${e(1)}\n\nComenta aqui o que achou.`,
      `${cap(t)} em poucas palavras ${e(2)}\n\nA gente reúne o que realmente vale a pena. Segue pra mais conteúdo assim.`,
      `Guarda esse: ${cap(t)}. ${e(0)}\n\nCompartilha com alguém que precisa ver isso.`,
    ],
    engracada: [
      `${cap(t)} e eu fingindo que tá tudo sob controle ${e(0)}`,
      `POV: ${tLow}... e a vida te testando de novo ${e(1)}`,
      `Ninguém:\nAbsolutamente ninguém:\nEu com ${tLow}: ${e(2)}`,
      `${cap(t)} bateu diferente hoje ${e(0)} marca aquele amigo que ia rir disso.`,
    ],
    motivacional: [
      `${cap(t)}. ${e(0)}\n\nO que parece impossível hoje é a sua história de superação amanhã.`,
      `Respira. Foca. ${cap(t)}. ${e(1)}\n\nCada passo conta. Continua.`,
      `${cap(t)} é lembrete de que você é mais forte do que imagina. ${e(2)} 🚀`,
      `Não desista de ${tLow}. ${e(0)}\n\nGrandes conquistas nascem de quem insiste.`,
    ],
    jovem: [
      `${cap(t)} e a vibe tá on ${e(0)}`,
      `real, ${tLow} é tudo que a gente precisava hoje ${e(1)}`,
      `deixa eu contar: ${tLow} 🫶 tá muito bom demais ${e(2)}`,
      `${cap(t)} >>> qualquer outra coisa ${e(0)} concorda?`,
    ],
    ingles: [
      `${pick(INGLES, s)} ${e(0)}\n\n(${t})`,
      `${pick(INGLES, s + 3)} ${e(1)}`,
      `${cap(t)} ✦ ${pick(INGLES, s + 1)} ${e(2)}`,
    ],
    autor: (() => {
      const a = pick(AUTORES, s);
      return [
        `"${a.frase}"\n— ${a.autor} ${e(0)}\n\n${cap(t)}`,
        `${cap(t)}.\n\n"${a.frase}" (${a.autor}) ${e(1)}`,
        `Inspiração do dia ${e(2)}\n\n"${a.frase}"\n— ${a.autor}`,
      ];
    })(),
    educada: [
      `${cap(t)} ${e(0)}\n\nFicamos felizes em compartilhar isso com você. Saiba mais no link da bio.`,
      `Com muito carinho, trazemos: ${tLow}. ${e(1)}\n\nQualquer dúvida, estamos à disposição nos comentários. 🙏`,
      `${cap(t)}. ${e(2)}\n\nAgradecemos por acompanhar nosso trabalho. Toque no link da bio para conferir.`,
    ],
    vendas: [
      `${cap(t)} chegou! ${e(0)}\n\n👉 Link na bio pra garantir o seu. Vagas/estoque limitados! ${e(3)}`,
      `Para de rolar o feed 🚨 ${cap(t)} é o que você procurava.\n\n✅ Clique no link da bio agora. ${e(1)}`,
      `${cap(t)} ${e(0)}\n\nÚltima chamada 👇 aproveita antes que acabe. Link na bio!`,
      `Você pediu, a gente trouxe: ${tLow}. ${e(2)}\n\n💥 Garanta já pelo link da bio.`,
    ],
  };
  const arr = templates[tom] || templates.conteudo;
  return arr[idx % arr.length];
}

function hashtags(tema, tom){
  const base = (tema || "").toLowerCase().split(/\s+/).filter(w => w.length > 3).slice(0, 3);
  const porTom = {
    conteudo:["dicas","aprenda","vocesabia"], engracada:["humor","memes","rindomuito"],
    motivacional:["motivacao","foco","superacao"], jovem:["vibe","trend","fyp"],
    ingles:["goodvibes","lifestyle","mood"], autor:["reflexao","frasedodia","inspiracao"],
    educada:["novidade","linknabio","conheca"], vendas:["promocao","linknabio","aproveite"],
  };
  const tags = [...base, ...(porTom[tom] || [])].slice(0, 6);
  return tags.map(t => "#" + t.replace(/[^a-z0-9]/g, "")).filter(t => t.length > 1);
}

/* ---------- ESTADO + UI ---------- */
const state = { tom:"conteudo", tema:"", foto:null, ger:0, legendas:[], favoritos:[] };

const $ = (s) => document.querySelector(s);
const el = (tag, cls, html) => { const n=document.createElement(tag); if(cls)n.className=cls; if(html!=null)n.innerHTML=html; return n; };

// monta os botões de tom
function renderTons(){
  const wrap = $("#tons"); wrap.innerHTML = "";
  TONS.forEach(t => {
    const b = el("button", "ton-btn" + (state.tom===t.id?" active":""));
    b.title = t.desc;
    b.innerHTML = `<span class="em">${t.emoji}</span> ${t.nome}`;
    b.onclick = () => { state.tom = t.id; renderTons(); if(state.legendas.length) doGerar(false); };
    wrap.appendChild(b);
  });
}

function escapeHtml(s){ return s.replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c])); }

function renderResults(){
  const box = $("#results");
  if(!state.legendas.length){
    box.innerHTML = `<div class="empty-state"><div class="empty-icon">◐</div><div class="empty-title">Suas legendas aparecem aqui</div><div class="empty-text">Preencha ao lado e toque em "Gerar legendas".</div></div>`;
    return;
  }
  const tags = hashtags(state.tema, state.tom);
  box.innerHTML = "";
  const head = el("div","results-head");
  head.innerHTML = `<span>${state.legendas.length} sugestões</span>`;
  const reroll = el("button","reroll","↻ Mais opções");
  reroll.onclick = () => { state.ger++; doGerar(false); };
  head.appendChild(reroll);
  box.appendChild(head);

  state.legendas.forEach((l) => {
    const card = el("div","cap-card");
    const full = l + (tags.length ? "\n\n" + tags.join(" ") : "");
    card.appendChild(el("p","cap-text", escapeHtml(l)));
    card.appendChild(el("div","cap-tags", tags.join(" ")));
    const actions = el("div","cap-actions");
    const copy = el("button","copy-btn","Copiar");
    copy.onclick = () => {
      navigator.clipboard && navigator.clipboard.writeText(full);
      copy.textContent = "✓ Copiado!";
      setTimeout(()=>copy.textContent="Copiar",1600);
    };
    const fav = el("button","fav-btn"+(state.favoritos.includes(l)?" active":""), state.favoritos.includes(l)?"♥":"♡");
    fav.onclick = () => {
      state.favoritos = state.favoritos.includes(l) ? state.favoritos.filter(x=>x!==l) : [l,...state.favoritos];
      renderResults(); renderFavoritos();
    };
    const len = el("span","cap-len", full.length + " caracteres");
    actions.appendChild(copy); actions.appendChild(fav); actions.appendChild(len);
    card.appendChild(actions);
    box.appendChild(card);
  });
}

function renderFavoritos(){
  const sec = $("#favSection"), grid = $("#favGrid");
  if(!state.favoritos.length){ sec.hidden = true; return; }
  sec.hidden = false; grid.innerHTML = "";
  state.favoritos.forEach((f) => {
    const card = el("div","fav-card");
    card.appendChild(el("p","cap-text", escapeHtml(f)));
    const actions = el("div","cap-actions");
    const copy = el("button","copy-btn","Copiar");
    copy.onclick = () => { navigator.clipboard && navigator.clipboard.writeText(f); copy.textContent="✓ Copiado!"; setTimeout(()=>copy.textContent="Copiar",1600); };
    const fav = el("button","fav-btn active","♥");
    fav.onclick = () => { state.favoritos = state.favoritos.filter(x=>x!==f); renderResults(); renderFavoritos(); };
    actions.appendChild(copy); actions.appendChild(fav);
    card.appendChild(actions);
    grid.appendChild(card);
  });
}

function doGerar(reset){
  if(!state.tema.trim()){ state.legendas=[]; renderResults(); return; }
  if(reset) state.ger = 0;
  state.legendas = [0,1,2,3].map(i => gerar(state.tema, state.tom, i + state.ger*4));
  renderResults();
}

/* ---------- LISTENERS ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTons();

  const tema = $("#tema"), counter = $("#counter"), btn = $("#gerarBtn");
  tema.addEventListener("input", () => {
    state.tema = tema.value;
    counter.textContent = tema.value.length + "/120";
    const has = !!tema.value.trim();
    btn.disabled = !has;
    btn.textContent = has ? "Gerar legendas ✨" : "Descreva o post primeiro";
  });

  btn.addEventListener("click", () => doGerar(true));

  // upload de foto (real, decorativo)
  const upload = $("#upload"), file = $("#file"), preview = $("#preview"), inner = $("#uploadInner"), remove = $("#removeFoto");
  upload.addEventListener("click", (ev) => { if(ev.target.tagName!=="IMG" || !state.foto) file.click(); });
  file.addEventListener("change", (ev) => {
    const f = ev.target.files && ev.target.files[0]; if(!f) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      state.foto = e.target.result;
      preview.src = state.foto; preview.hidden = false; inner.hidden = true;
      upload.classList.add("filled"); remove.hidden = false;
    };
    reader.readAsDataURL(f);
  });
  remove.addEventListener("click", (ev) => {
    ev.stopPropagation();
    state.foto = null; preview.hidden = true; inner.hidden = false;
    upload.classList.remove("filled"); remove.hidden = true; file.value = "";
  });
});
