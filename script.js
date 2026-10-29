
// Each part: y range in model units (model base ≈ -0.14, top ≈ 12.85), radius for the highlight band.
const PSK = 'NASA, Apollo 4 Press Kit (1967)';
const PARTS = [
  { id:'les', code:'LES', name:'Torre de escape', role:'Salva a tripulação numa emergência', y0:11.72, y1:12.86, r:0.12, my:12.25,
    kicker:'Sistema de escape no lançamento', sub:'Launch Escape System · 10,1 m de altura',
    desc:'Uma torre com foguetes de combustível sólido presa no topo da cápsula. Se algo desse errado na plataforma ou na subida, ela arrancaria o Módulo de Comando para longe do foguete em segundos. Num voo normal, era descartada logo depois que o segundo estágio acendia.',
    specs:[['Altura','10,1 m <small>(33 ft)</small>'],['Diâmetro na base','1,2 m <small>(4 ft)</small>'],['Massa','3,72 t <small>(com a capa protetora)</small>'],['Motor de escape','654 kN por 3 s'],['Motor de controle','12,7 kN por 0,5 s'],['Motor de descarte','142 kN por 1 s']], src:PSK },
  { id:'cm', code:'CM', name:'Módulo de Comando', role:'Cápsula dos três astronautas', y0:11.38, y1:11.74, r:0.3, my:11.52,
    kicker:'Nave Apollo', sub:'Command Module · tripulação de 3',
    desc:'A cabine onde os três astronautas ficavam no lançamento, na ida e na volta. Era a única parte de todo o conjunto que retornava à Terra, protegida por um escudo térmico na base e descendo de paraquedas no oceano.',
    specs:[['Altura','3,66 m <small>(12 ft)</small>'],['Diâmetro na base','3,91 m <small>(12 ft 10 in)</small>'],['Massa','5,44 t <small>(12 000 lb)</small>'],['Tripulação','3 astronautas']], src:PSK },
  { id:'sm', code:'SM', name:'Módulo de Serviço', role:'Motor, energia e oxigênio da nave', y0:10.98, y1:11.4, r:0.3, my:11.2,
    kicker:'Nave Apollo', sub:'Service Module · motor SPS',
    desc:'Cilindro preso atrás da cápsula, com o motor principal da nave (SPS), os tanques de combustível, a geração de energia e o oxigênio. Era o motor do SPS que colocava a nave em órbita da Lua e depois a trazia de volta. Era descartado pouco antes da reentrada.',
    specs:[['Altura','6,71 m <small>(22 ft)</small>'],['Diâmetro','3,91 m <small>(12 ft 10 in)</small>'],['Massa no lançamento','24,9 t <small>(com combustível)</small>'],['Empuxo do SPS','95,6 kN <small>no vácuo</small>']], src:PSK },
  { id:'sla', code:'SLA', name:'Adaptador do Módulo Lunar', role:'Carenagem que guardava o Módulo Lunar', y0:10.22, y1:11.0, r:0.5, my:10.62,
    kicker:'Spacecraft-LM Adapter', sub:'Tronco de cone de 8,5 m',
    desc:'Uma carenagem em forma de cone que liga a nave Apollo ao terceiro estágio. Nas missões lunares, o Módulo Lunar viajava escondido aqui dentro. Depois da partida para a Lua, os painéis se abriam e a nave fazia a manobra para acoplar e retirar o Módulo Lunar.',
    specs:[['Altura','8,53 m <small>(28 ft)</small>'],['Diâmetro na base','6,7 m <small>(22 ft)</small>'],['Diâmetro no topo','3,91 m <small>(12 ft 10 in)</small>'],['Massa','1,77 t <small>(3 900 lb)</small>']], src:PSK },
  { id:'iu', code:'IU', name:'Unidade de Instrumentos', role:'O "cérebro" que guiava o foguete', y0:10.08, y1:10.24, r:0.5, my:10.16,
    kicker:'Instrument Unit · IBM', sub:'Anel de 0,9 m de altura',
    desc:'Um anel fino entre o terceiro estágio e a nave, cheio de equipamentos. Tinha o computador de bordo (LVDC), a plataforma inercial e os sistemas que controlavam a direção, a ignição e a separação dos estágios durante toda a subida.',
    specs:[['Altura','0,91 m <small>(3 ft)</small>'],['Diâmetro','6,60 m <small>(21 ft 8 in)</small>'],['Massa','2,15 t <small>(4 750 lb)</small>'],['Fabricante','IBM, Federal Systems Division']], src:PSK },
  { id:'s4b', code:'S-IVB', name:'Terceiro estágio', role:'Coloca em órbita e envia à Lua', y0:7.72, y1:10.1, r:0.6, my:9.1,
    kicker:'3º estágio · 1 motor J-2', sub:'S-IVB · hidrogênio e oxigênio líquidos',
    desc:'O único estágio que acendia duas vezes. A primeira queima colocava a nave em órbita da Terra. Nas missões lunares, depois de algumas voltas, o motor reacendia e acelerava a nave para a trajetória até a Lua.',
    specs:[['Altura','17,8 m <small>(58,4 ft)</small>'],['Diâmetro','6,60 m <small>(21 ft 8 in)</small>'],['Massa vazio','12,0 t'],['Propelente','104 t'],['Motor','1 × J-2'],['Empuxo','890 kN <small>no vácuo</small>'],['Queimas','136 s + quase 6 min'],['Fabricante','McDonnell Douglas']], src:PSK },
  { id:'s2', code:'S-II', name:'Segundo estágio', role:'Leva o foguete quase até a órbita', y0:4.8, y1:7.72, r:0.76, my:6.3,
    kicker:'2º estágio · 5 motores J-2', sub:'S-II · hidrogênio e oxigênio líquidos',
    desc:'Acendia logo depois de o primeiro estágio se soltar, a cerca de 60 km de altitude, e queimava por cerca de 6 minutos. Usava hidrogênio líquido, que é muito leve, por isso os tanques são enormes em relação à massa que carregam.',
    specs:[['Altura','24,8 m <small>(81,5 ft)</small>'],['Diâmetro','10,1 m <small>(33 ft)</small>'],['Massa vazio','39,9 t'],['Massa abastecido','469 t'],['Motores','5 × J-2'],['Empuxo total','4,45 MN'],['Queima','6,1 min'],['Fabricante','North American Aviation']], src:PSK },
  { id:'s1c', code:'S-IC', name:'Primeiro estágio', role:'Tira o foguete do chão', y0:0.42, y1:4.8, r:0.78, my:2.7,
    kicker:'1º estágio · 5 motores F-1', sub:'S-IC · querosene RP-1 e oxigênio líquido',
    desc:'O maior e mais pesado estágio. Carregava cerca de 2 000 toneladas de propelente e queimava tudo em apenas dois minutos e meio, levando o foguete a cerca de 60 km de altitude. As quatro aletas na base ajudavam na estabilidade.',
    specs:[['Altura','42,1 m <small>(138 ft)</small>'],['Diâmetro','10,1 m <small>(33 ft)</small>'],['Massa vazio','139 t'],['Propelente','1 996 t'],['RP-1 / LOX','811 m³ / 1 311 m³'],['Consumo','12,7 t/s'],['Queima','150 s'],['Fabricante','Boeing']], src:PSK },
  { id:'f1', code:'F-1', name:'Motores F-1', role:'Os cinco motores do primeiro estágio', y0:-0.15, y1:0.42, r:0.95, my:0.12, ang:0,
    kicker:'Rocketdyne F-1', sub:'5 motores · querosene e oxigênio líquido',
    desc:'O motor de câmara única mais potente já construído. Cinco deles juntos davam 33,4 MN de empuxo na decolagem. Só a turbobomba de cada motor bombeava cerca de 161 m³ de propelente por minuto.',
    specs:[['Empuxo de cada','6,67 MN <small>(1,5 milhão lbf)</small>'],['Comprimento','5,61 m'],['Diâmetro da tubeira','3,67 m'],['Massa','8,3 t'],['Tubos de refrigeração','178, em Inconel X'],['Fabricante','Rocketdyne']], src:'Smithsonian National Air and Space Museum' },
];

const fmtH = p => {
  const map = { les:'10,1 m', cm:'3,7 m', sm:'6,7 m', sla:'8,5 m', iu:'0,9 m', s4b:'17,8 m', s2:'24,8 m', s1c:'42,1 m', f1:'5,6 m' };
  return map[p.id];
};

// ---------- panel list ----------
const partsEl = document.getElementById('parts');
PARTS.forEach((p, i) => {
  const li = document.createElement('li');
  li.innerHTML = `<button class="part" data-i="${i}"><span class="code">${p.code}</span><span class="nm">${p.name}<span class="rl">${p.role}</span></span><span class="ht">${fmtH(p)}</span></button>`;
  partsEl.appendChild(li);
});
partsEl.addEventListener('click', e => { const b = e.target.closest('.part'); if (b) select(+b.dataset.i, true); });

// ---------- three.js scene ----------
const stage = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.setClearColor(0x000000, 0);
stage.insertBefore(renderer.domElement, document.getElementById('loading'));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 200);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.08;
controls.minDistance = 1.2; controls.maxDistance = 45;
controls.enablePan = true; controls.screenSpacePanning = true; controls.panSpeed = 0.9;
// pan limits: the look-at point stays on the rocket's axis region, between the engines and the tip
const PAN_LIMIT = { yMin: -0.1, yMax: 12.85, r: 0.7 };
function clampTarget() {
  const t = controls.target;
  const c = t.clone();
  c.y = Math.min(Math.max(c.y, PAN_LIMIT.yMin), PAN_LIMIT.yMax);
  const rr = Math.hypot(c.x, c.z);
  if (rr > PAN_LIMIT.r) { c.x *= PAN_LIMIT.r / rr; c.z *= PAN_LIMIT.r / rr; }
  if (!c.equals(t)) { const d = c.clone().sub(t); t.copy(c); camera.position.add(d); }
}
controls.maxPolarAngle = Math.PI * 0.62;
const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
controls.autoRotate = !reduceMotion; controls.autoRotateSpeed = 0.6;
document.getElementById('spin').setAttribute('aria-pressed', String(controls.autoRotate));

scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x1a1f2b, 0.9));
const key = new THREE.DirectionalLight(0xfff3e6, 1.6); key.position.set(6, 10, 7); scene.add(key);
const rim = new THREE.DirectionalLight(0x8fb2ff, 0.9); rim.position.set(-7, 6, -6); scene.add(rim);
const fill = new THREE.DirectionalLight(0xffffff, 0.35); fill.position.set(0, 2, 9); scene.add(fill);

// pad
const padGeo = new THREE.CircleGeometry(4.2, 72);
const padMat = new THREE.MeshBasicMaterial({ color: 0x1b2540, transparent: true, opacity: 0.55 });
const pad = new THREE.Mesh(padGeo, padMat); pad.rotation.x = -Math.PI / 2; pad.position.y = -0.16; scene.add(pad);
const rings = new THREE.Group();
[1.2, 2.2, 3.2, 4.2].forEach(r => {
  const g = new THREE.RingGeometry(r - 0.006, r + 0.006, 96);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x5a6b92, transparent: true, opacity: 0.45, side: THREE.DoubleSide }));
  m.rotation.x = -Math.PI / 2; m.position.y = -0.155; rings.add(m);
});
scene.add(rings);

// height ruler (0–110 m), drawn beside the rocket
const UNIT_M = 110.6 / (12.86 + 0.15); // metres per model unit
const BASE_Y = -0.15;
const ruler = new THREE.Group();
const rulerX = 1.55;
const rl = []; rl.push(new THREE.Vector3(rulerX, BASE_Y, 0), new THREE.Vector3(rulerX, BASE_Y + 110.6 / UNIT_M, 0));
const tickLabels = [];
for (let m = 0; m <= 110; m += 10) {
  const y = BASE_Y + m / UNIT_M; const w = m % 50 === 0 ? 0.16 : 0.09;
  rl.push(new THREE.Vector3(rulerX, y, 0), new THREE.Vector3(rulerX + w, y, 0));
  if (m % 20 === 0) tickLabels.push({ m, pos: new THREE.Vector3(rulerX + 0.22, y, 0) });
}
ruler.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(rl), new THREE.LineBasicMaterial({ color: 0x7d8db0, transparent: true, opacity: 0.7 })));
scene.add(ruler);

// highlight band
const bandMat = new THREE.MeshBasicMaterial({ color: 0xff7a3d, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
const band = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 64, 1, true), bandMat);
const edgeMat = new THREE.MeshBasicMaterial({ color: 0xff7a3d, transparent: true, opacity: 0.85, side: THREE.DoubleSide });
const edgeTop = new THREE.Mesh(new THREE.RingGeometry(0.985, 1.0, 96), edgeMat); edgeTop.rotation.x = -Math.PI / 2;
const edgeBot = edgeTop.clone();
const bandGroup = new THREE.Group(); bandGroup.add(band, edgeTop, edgeBot); bandGroup.visible = false; scene.add(bandGroup);

let rocket = null;
const CENTER = new THREE.Vector3(-0.0105, 0, 0.743);

const MODEL_URL = 'models/saturn-v.glb';
new THREE.GLTFLoader().load(MODEL_URL, gltf => {
  rocket = gltf.scene;
  rocket.position.set(-CENTER.x, 0, -CENTER.z);
  rocket.traverse(o => {
    if (o.isMesh) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach(m => { if (m.map) m.map.encoding = THREE.sRGBEncoding; m.roughness = Math.min(m.roughness ?? 0.6, 0.55); m.metalness = Math.min(m.metalness ?? 0, 0.15); m.needsUpdate = true; });
    }
  });
  scene.add(rocket);
  document.getElementById('loading').hidden = true;
  buildMarkers();
  resetView(true);
}, undefined, err => { document.getElementById('loading').textContent = 'Não foi possível carregar o modelo 3D.'; console.error(err); });

// ---------- markers ----------
const markersEl = document.getElementById('markers');
const markerEls = [];
const rulerEls = [];
function buildMarkers() {
  PARTS.forEach((p, i) => {
    const b = document.createElement('button');
    b.className = 'marker'; b.dataset.i = i;
    b.setAttribute('aria-label', `${p.name} (${p.code})`);
    b.innerHTML = `<span class="dot"></span><span class="lead"></span><span class="lbl">${p.code}</span>`;
    b.addEventListener('click', () => select(i, true));
    markersEl.appendChild(b); markerEls.push(b);
  });
  tickLabels.forEach(t => {
    const s = document.createElement('div');
    s.style.cssText = 'position:absolute;left:0;top:0;font:11px var(--font-mono);color:var(--hud-2);transform:translate(0,-50%);pointer-events:none;white-space:nowrap';
    s.textContent = t.m + ' m'; markersEl.appendChild(s); rulerEls.push(s);
  });
}

const tmpV = new THREE.Vector3();
function placeOverlay() {
  const w = stage.clientWidth, h = stage.clientHeight;
  // markers sit on the rocket's surface on the side facing the camera, shifted right
  const camDir = new THREE.Vector3(camera.position.x, 0, camera.position.z).normalize();
  const right = new THREE.Vector3(camDir.z, 0, -camDir.x);
  markerEls.forEach((el, i) => {
    const p = PARTS[i];
    const rr = p.id === 'f1' ? 0.5 : Math.max(p.r * 0.72, 0.12);
    tmpV.set(0, p.my, 0).addScaledVector(right, rr * 0.92).addScaledVector(camDir, rr * 0.35);
    tmpV.project(camera);
    const x = (tmpV.x * 0.5 + 0.5) * w, y = (-tmpV.y * 0.5 + 0.5) * h;
    const off = tmpV.z > 1 || x < -40 || x > w + 40 || y < -20 || y > h + 20;
    el.style.display = off ? 'none' : '';
    el.style.transform = `translate(${x - 7}px, ${y}px) translate(0,-50%)`;
  });
  // ruler labels: keep the ruler on the camera's right side
  tickLabels.forEach((t, i) => {
    tmpV.copy(t.pos).applyMatrix4(ruler.matrixWorld).project(camera);
    const x = (tmpV.x * 0.5 + 0.5) * w, y = (-tmpV.y * 0.5 + 0.5) * h;
    const el = rulerEls[i];
    el.style.display = (tmpV.z > 1 || y < 0 || y > h) ? 'none' : '';
    el.style.transform = `translate(${x}px, ${y}px) translate(0,-50%)`;
  });
}

// ---------- selection ----------
let active = -1;
const card = document.getElementById('card');
let tween = null;
function flyTo(targetY, dist, instant) {
  const fromT = controls.target.clone();
  const toT = new THREE.Vector3(0, targetY, 0);
  const offset = camera.position.clone().sub(controls.target);
  const fromD = offset.length();
  const dir = offset.normalize();
  if (instant || reduceMotion) { controls.target.copy(toT); camera.position.copy(toT).addScaledVector(dir, dist); controls.update(); return; }
  tween = { t0: performance.now(), dur: 900, fromT, toT, fromD, toD: dist, dir };
}
function select(i, fly) {
  active = i;
  const p = PARTS[i];
  document.getElementById('c-kicker').textContent = p.kicker;
  document.getElementById('c-title').textContent = p.name;
  document.getElementById('c-sub').textContent = p.sub;
  document.getElementById('c-desc').textContent = p.desc;
  document.getElementById('c-specs').innerHTML = p.specs.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
  document.getElementById('c-src').textContent = 'Fonte: ' + p.src;
  document.getElementById('c-down').disabled = i === PARTS.length - 1;
  document.getElementById('c-up').disabled = i === 0;
  card.hidden = false;
  markerEls.forEach((m, j) => m.classList.toggle('active', j === i));
  document.querySelectorAll('.part').forEach((m, j) => m.classList.toggle('active', j === i));
  // highlight band
  const h = p.y1 - p.y0, r = p.r * 1.06;
  band.scale.set(r, h, r); band.position.y = (p.y0 + p.y1) / 2;
  edgeTop.scale.set(r, r, 1); edgeTop.position.y = p.y1;
  edgeBot.scale.set(r, r, 1); edgeBot.position.y = p.y0;
  bandGroup.visible = true;
  if (fly) {
    const span = Math.max(h, 0.9);
    const dist = Math.min(Math.max(span * 3.4, 2.6), 14);
    flyTo((p.y0 + p.y1) / 2, dist);
  }
  if (window.matchMedia('(max-width: 860px)').matches && fly && document.activeElement && document.activeElement.classList.contains('part')) {
    stage.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
function deselect() {
  active = -1; card.hidden = true; bandGroup.visible = false;
  markerEls.forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.part').forEach(m => m.classList.remove('active'));
}
document.getElementById('c-close').addEventListener('click', deselect);
document.getElementById('c-up').addEventListener('click', () => { if (active > 0) select(active - 1, true); });
document.getElementById('c-down').addEventListener('click', () => { if (active < PARTS.length - 1) select(active + 1, true); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !card.hidden) deselect(); });

function resetView(instant) {
  deselect();
  const asp = stage.clientWidth / Math.max(stage.clientHeight, 1);
  const vfov = camera.fov * Math.PI / 180;
  const needH = 14.6, needW = 4.6;
  const dH = needH / 2 / Math.tan(vfov / 2);
  const dW = needW / 2 / (Math.tan(vfov / 2) * asp);
  const dist = Math.max(dH, dW) * 1.02;
  if (instant) { camera.position.set(dist * 0.62, 6.6 + dist * 0.12, dist * 0.78); }
  flyTo(6.35, dist, instant);
}
document.getElementById('reset').addEventListener('click', () => resetView(false));
document.getElementById('spin').addEventListener('click', e => {
  controls.autoRotate = !controls.autoRotate; e.currentTarget.setAttribute('aria-pressed', String(controls.autoRotate));
});

// click on the rocket itself
const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
let downAt = null;
renderer.domElement.addEventListener('pointerdown', e => { downAt = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', e => {
  if (!downAt || !rocket) return;
  const moved = Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]); downAt = null;
  if (moved > 6) return;
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(rocket, true)[0];
  if (!hit) return;
  const y = hit.point.y;
  let idx = PARTS.findIndex(p => y >= p.y0 && y < p.y1);
  if (idx < 0) idx = y < 0 ? PARTS.length - 1 : 0;
  select(idx, true);
});

// ---------- loop ----------
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
new ResizeObserver(resize).observe(stage); resize();

function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
function frame(now) {
  if (tween) {
    const k = Math.min((now - tween.t0) / tween.dur, 1), e = ease(k);
    const dir = camera.position.clone().sub(controls.target).normalize();
    controls.target.lerpVectors(tween.fromT, tween.toT, e);
    camera.position.copy(controls.target).addScaledVector(dir, tween.fromD + (tween.toD - tween.fromD) * e);
    if (k >= 1) tween = null;
  }
  controls.update();
  clampTarget();
  { const c = new THREE.Vector3(camera.position.x, 0, camera.position.z).normalize(); ruler.rotation.y = Math.atan2(c.x, c.z); ruler.updateMatrixWorld(); }
  if (bandGroup.visible) bandMat.opacity = 0.08 + 0.05 * Math.sin(now / 420);
  renderer.render(scene, camera);
  if (rocket) placeOverlay();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
