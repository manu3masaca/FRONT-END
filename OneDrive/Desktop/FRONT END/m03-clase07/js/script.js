// ===============================
// Objeto con datos de los signos
// ===============================
const signos = {
  "Aries": { img: "https://cdn.pixabay.com/photo/2023/05/25/05/15/ai-generated-8016343_1280.jpg", desc: "Tu energía arde como el fuego. Hoy es el momento de tomar decisiones valientes ." },
  "Tauro": { img: "https://cdn.pixabay.com/photo/2023/02/08/22/29/taurus-7777654_960_720.jpg", desc: "Tu constancia te llevará lejos. Hoy el universo premia tu paciencia ." },
  "Géminis": { img: "https://i.pinimg.com/originals/2d/02/1b/2d021b893ab6797373709e995c413627.jpg", desc: "La comunicación será tu mejor aliada. Comparte tus ideas ." },
  "Cáncer": { img: "https://www.24horas.cl/24horas/site/artic/20230713/imag/foto_0000000620230713224826/cancer-8016363_1280_1.jpg", desc: "El hogar y las emociones te guiarán. Escucha a tu corazón ." },
  "Leo": { img: "https://img.freepik.com/fotos-premium/leo-zodiac-sign-wallpaper-cuadrado-oscuro_181111-9.jpg", desc: "Brillas como el sol. Hoy es tu día para destacar y liderar ." },
  "Virgo": { img: "https://img.freepik.com/premium-photo/zodiac-sign-virgo_841543-16480.jpg", desc: "Tu mente analítica verá con claridad. Ordena tu entorno ." },
  "Libra": { img: "https://cdn.pixabay.com/photo/2023/05/25/05/32/libra-8016355_1280.jpg", desc: "El equilibrio es tu don. Busca armonía en cada decisión ." },
  "Escorpio": { img: "https://i.pinimg.com/736x/c7/6f/a1/c76fa16d662c8b1416f1aa2f888e1ab6.jpg", desc: "Tu intuición está más fuerte que nunca. Deja que te guíe ." },
  "Sagitario": { img: "https://img.freepik.com/fotos-premium/signo-zodiacal-sagitario_841543-16231.jpg", desc: "Tu espíritu aventurero pide libertad. ¡Atrévete a explorar! ." },
  "Capricornio": { img: "https://i.etsystatic.com/38325148/r/il/88b8f7/4696209322/il_570xN.4696209322_7qs8.jpg", desc: "La disciplina te llevará a tus metas. Persevera y triunfarás ." },
  "Acuario": { img: "https://i.pinimg.com/736x/66/f8/0a/66f80a3660179284de1322c33a43a6cc.jpg", desc: "Tu originalidad inspira. Sé tú mismo y rompe esquemas ." },
  "Piscis": { img: "https://tn.com.ar/resizer/v2/piscis-sera-el-signo-que-estara-mejor-economicamente-en-febrero-2025-foto-chatgpt-3NLCVJPUQVBBJGCQQPFCIN2HFY.png?auth=a83ceaeab772ef80151e748f77db2410a04a03b323cae313392914aba737a902&width=767", desc: "Tu empatía es tu fuerza. Hoy deja que tu intuición te guíe 🌙." }
};

// ===============================
// Mostrar la tarjeta del signo
// ===============================
function mostrarSigno(nombre) {
  const signo = signos[nombre];
  document.getElementById('img-signo').src = signo.img;
  document.getElementById('titulo-signo').textContent = nombre;
  document.getElementById('descripcion-signo').textContent = signo.desc;
  document.getElementById('tarjeta-info').classList.remove('is-hidden');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// ===============================
// Reiniciar vista
// ===============================
function reiniciar() {
  document.getElementById('tarjeta-info').classList.add('is-hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
