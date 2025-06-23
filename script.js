// === Переводы стран на русский (сокращено для примера) ===
const countryTranslations = {
  Russia: "Россия",
  USA: "США",
  China: "Китай",
  India: "Индия",
  Germany: "Германия",
  France: "Франция",
  UnitedKingdom: "Великобритания",
  Japan: "Япония",
  SouthKorea: "Южная Корея",
  Turkey: "Турция",
  Ukraine: "Украина",
  Canada: "Канада",
  Brazil: "Бразилия",
  Australia: "Австралия",
  // добавьте все остальные...
};

// Иконки для характеристик (ссылки на иконки, можно заменить на свои)
const icons = {
  Infantry: 'https://cdn-icons-png.flaticon.com/512/1999/1999958.png',        // пехота
  AirDefense: 'https://cdn-icons-png.flaticon.com/512/189/189041.png',       // пво
  Artillery: 'https://cdn-icons-png.flaticon.com/512/2331/2331120.png',      // артиллерия
  Tanks: 'https://cdn-icons-png.flaticon.com/512/836/836905.png',            // танки
  Fighters: 'https://cdn-icons-png.flaticon.com/512/149/149320.png',         // истребители
  OTRK: 'https://cdn-icons-png.flaticon.com/512/1829/1829327.png',           // ОТРК (ракеты)
  AircraftCarriers: 'https://cdn-icons-png.flaticon.com/512/2081/2081792.png',// авианосцы
  Nuclear: 'https://cdn-icons-png.flaticon.com/512/565/565547.png',          // ядерное оружие
  Nato: 'https://cdn-icons-png.flaticon.com/512/197/197583.png',             // НАТО (звезда)
  UN: 'https://cdn-icons-png.flaticon.com/512/197/197602.png',               // ООН (земной шар)
};

// Примерные военные характеристики для стран (цифры условные)
const countryMilitaryStats = {
  Россия: { Пехота: 900000, ПВО: 4000, Артиллерия: 20000, Танки: 13000, Истребители: 1200, ОТРК: 150, Корабленосители: 1, Ядерное: true, НАТО: false, ООН: true },
  США: { Пехота: 800000, ПВО: 3500, Артиллерия: 18000, Танки: 6000, Истребители: 1700, ОТРК: 200, Корабленосители: 11, Ядерное: true, НАТО: true, ООН: true },
  Китай: { Пехота: 1000000, ПВО: 5000, Артиллерия: 22000, Танки: 9000, Истребители: 1300, ОТРК: 180, Корабленосители: 2, Ядерное: true, НАТО: false, ООН: true },
  Индия: { Пехота: 1200000, ПВО: 3000, Артиллерия: 15000, Танки: 4500, Истребители: 600, ОТРК: 50, Корабленосители: 1, Ядерное: true, НАТО: false, ООН: true },
  Германия: { Пехота: 180000, ПВО: 900, Артиллерия: 5000, Танки: 2500, Истребители: 300, ОТРК: 20, Корабленосители: 0, Ядерное: false, НАТО: true, ООН: true },
  Франция: { Пехота: 200000, ПВО: 1000, Артиллерия: 5500, Танки: 2200, Истребители: 350, ОТРК: 15, Корабленосители: 1, Ядерное: true, НАТО: true, ООН: true },
  Великобритания: { Пехота: 180000, ПВО: 1100, Артиллерия: 4800, Танки: 2100, Истребители: 320, ОТРК: 18, Корабленосители: 2, Ядерное: true, НАТО: true, ООН: true },
  Япония: { Пехота: 150000, ПВО: 1200, Артиллерия: 4300, Танки: 1700, Истребители: 250, ОТРК: 0, Корабленосители: 4, Ядерное: false, НАТО: false, ООН: true },
  ЮжнаяКорея: { Пехота: 190000, ПВО: 1400, Артиллерия: 4700, Танки: 2500, Истребители: 320, ОТРК: 0, Корабленосители: 0, Ядерное: false, НАТО: false, ООН: true },
  Турция: { Пехота: 300000, ПВО: 1800, Артиллерия: 7000, Танки: 3200, Истребители: 200, ОТРК: 25, Корабленосители: 0, Ядерное: false, НАТО: true, ООН: true },
  Украина: { Пехота: 250000, ПВО: 1000, Артиллерия: 6000, Танки: 2500, Истребители: 120, ОТРК: 10, Корабленосители: 0, Ядерное: false, НАТО: false, ООН: true },
  Канада: { Пехота: 65000, ПВО: 400, Артиллерия: 1000, Танки: 600, Истребители: 90, ОТРК: 0, Корабленосители: 1, Ядерное: true, НАТО: true, ООН: true },
  Бразилия: { Пехота: 210000, ПВО: 700, Артиллерия: 4000, Танки: 800, Истребители: 80, ОТРК: 0, Корабленосители: 0, Ядерное: false, НАТО: false, ООН: true },
  Австралия: { Пехота: 60000, ПВО: 350, Артиллерия: 900, Танки: 200, Истребители: 70, ОТРК: 0, Корабленосители: 1, Ядерное: false, НАТО: true, ООН: true },
  // Добавить остальные страны по необходимости...
};

const defaultMilitaryStats = {
  Пехота: 50000,
  ПВО: 200,
  Артиллерия: 1000,
  Танки: 300,
  Истребители: 50,
  ОТРК: 0,
  Корабленосители: 0,
  Ядерное: false,
  НАТО: false,
  ООН: false
};

let map, playerCountry = null;

// === Функция инициализации карты ===
async function initMap() {
  if (map) {
    map.remove();
  }
  map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const geoJsonData = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json').then(res => res.json());

  L.geoJSON(geoJsonData, {
    style: feature => ({
      color: '#444',
      weight: 1.5,
      fillColor: getRandomColor(feature.properties.name),
      fillOpacity: 0.6,
    }),
    onEachFeature: onEachCountry
  }).addTo(map);
}

function getRandomColor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

function onEachCountry(feature, layer) {
  const countryNameEng = feature.properties.name;
  const countryNameRus = countryTranslations[countryNameEng.replace(/ /g, '')] || countryNameEng;

  layer.bindTooltip(countryNameRus, { sticky: true, direction: 'auto' });

  layer.on('mouseover', e => {
    e.target.setStyle({ color: 'red', weight: 3 });
  });
  layer.on('mouseout', e => {
    e.target.setStyle({ color: '#444', weight: 1.5 });
  });

  layer.on('contextmenu', e => {
    e.originalEvent.preventDefault();
    showCountryStatsModal(countryNameRus);
  });
}

// === Модальное окно с характеристиками ===
function showCountryStatsModal(country) {
  const modal = document.getElementById('country-stats-modal');
  const nameElem = document.getElementById('stats-country-name');
  const listElem = document.getElementById('stats-list');
  const specialInfoElem = document.getElementById('special-info');

  nameElem.textContent = country;

  let stats = countryMilitaryStats[country] || defaultMilitaryStats;

  listElem.innerHTML = `
    <li><img src="${icons.Infantry}" alt="Пехота">Пехота: ${stats.Пехота.toLocaleString()} чел.</li>
    <li><img src="${icons.AirDefense}" alt="ПВО">ПВО: ${stats.ПВО.toLocaleString()} комплексов</li>
    <li><img src="${icons.Artillery}" alt="Артиллерия">Артиллерия: ${stats.Артиллерия.toLocaleString()} шт.</li>
    <li><img src="${icons.Tanks}" alt="Танки">Танки: ${stats.Танки.toLocaleString()} шт.</li>
    <li><img src="${icons.Fighters}" alt="Истребители">Истребители: ${stats.Истребители.toLocaleString()} шт.</li>
    <li><img src="${icons.OTRK}" alt="ОТРК">ОТРК: ${stats.OTРК ? stats.OTРК.toLocaleString() : 0} установок</li>
    <li><img src="${icons.AircraftCarriers}" alt="Корабленосители">Корабленосители: ${stats.Корабленосители.toLocaleString()} штук</li>
  `;

  specialInfoElem.innerHTML = `
    <span><img src="${icons.Nuclear}" alt="Ядерное оружие">Ядерное оружие: ${stats.Ядерное ? '✔' : '✘'}</span>
    <span><img src="${icons.Nato}" alt="НАТО">НАТО: ${stats.НАТО ? '✔' : '✘'}</span>
    <span><img src="${icons.UN}" alt="ООН">ООН: ${stats.ООН ? '✔' : '✘'}</span>
  `;

  modal.classList.remove('modal-hidden');
}

// Закрыть модалку
document.getElementById('close-modal').onclick = () => {
  document.getElementById('country-stats-modal').classList.add('modal-hidden');
};
document.getElementById('country-stats-modal').onclick = e => {
  if (e.target === document.getElementById('country-stats-modal')) {
    document.getElementById('country-stats-modal').classList.add('modal-hidden');
  }
};

// Объявить войну (заглушка)
document.getElementById('declare-war-btn').onclick = () => {
  alert(`Вы объявили войну! (Функционал пока не реализован)`);
};

// Запуск игры
function startGame() {
  const select = document.getElementById('countrySelect');
  playerCountry = select.options[select.selectedIndex].text;

  document.getElementById('player-country').textContent = `Ваша страна: ${playerCountry}`;
  document.getElementById('choose-country').style.display = 'none';
  document.getElementById('game-ui').style.display = 'flex';

  showTab('front');
  initMap();
}

// Вкладки
function showTab(name) {
  const tabs = ['front', 'soldiers', 'equipment', 'taxes'];
  tabs.forEach(tab => {
    document.getElementById(`tab-${tab}`).style.display = (tab === name) ? 'flex' : 'none';
  });

  document.querySelectorAll('#sidebar .tab-button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === name);
  });
}

// Заполнение селекта странами
function fillCountrySelect() {
  const select = document.getElementById('countrySelect');
  let countries = Object.values(countryTranslations).sort((a,b) => a.localeCompare(b));

  countries.forEach(c => {
    let option = document.createElement('option');
    option.textContent = c;
    select.appendChild(option);
  });
}

// === Солдаты ===
const soldierTypes = [
  { name: "Пехота", cost: 100, key: "infantry" },
  { name: "Артиллеристы", cost: 150, key: "artillery" },
  { name: "Танкисты", cost: 300, key: "tanks" },
  { name: "Инженерные войска", cost: 130, key: "engineers" },
  { name: "Морпехи", cost: 250, key: "marines" },
  { name: "Воздушные войска", cost: 280, key: "airforces" },
  { name: "Десантные войска", cost: 200, key: "paratroopers" },
  { name: "Разведка", cost: 180, key: "recon" }
];

let playerBalance = 1000;
let playerSoldiers = {
  infantry: 0,
  artillery: 0,
  tanks: 0,
  engineers: 0,
  marines: 0,
  airforces: 0,
  paratroopers: 0,
  recon: 0,
};

function renderSoldiers() {
  const container = document.getElementById('soldiers-list');
  container.innerHTML = '';

  soldierTypes.forEach(type => {
    const slot = document.createElement('div');
    slot.className = 'soldier-slot';

    const info = document.createElement('div');
    info.className = 'soldier-info';

    const name = document.createElement('div');
    name.className = 'soldier-name';
    name.textContent = type.name;
    info.appendChild(name);

    const count = document.createElement('div');
    count.className = 'soldier-count';
    count.textContent = `Количество: ${playerSoldiers[type.key]}`;
    info.appendChild(count);

    const cost = document.createElement('div');
    cost.className = 'soldier-cost';
    cost.textContent = `Цена за 10: $${type.cost * 10}`;
    info.appendChild(cost);

    const buyBtn = document.createElement('button');
    buyBtn.className = 'buy-button';
    buyBtn.title = `Купить 10 ${type.name} за $${type.cost * 10}`;
    buyBtn.textContent = '+';
    buyBtn.onclick = () => buySoldiers(type.key, type.cost);

    slot.appendChild(info);
    slot.appendChild(buyBtn);

    container.appendChild(slot);
  });

  document.getElementById('balance').textContent = playerBalance;
}

function buySoldiers(typeKey, costPerUnit) {
  const totalCost = costPerUnit * 10;
  if (playerBalance >= totalCost) {
    playerBalance -= totalCost;
    playerSoldiers[typeKey] += 10;
    renderSoldiers();
  } else {
    alert('Недостаточно средств для покупки!');
  }
}

fillCountrySelect();
renderSoldiers();
