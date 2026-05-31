const ATMOSPHERE_TOP_KM = 760;
const EXPLORE_TOP_KM = 384400;
const ROCKET_START_KM = ATMOSPHERE_TOP_KM;
const ROCKET_FADE_START_KM = 350000;
const ROCKET_HIDE_KM = 382000;
const EXPLORE_SCROLL_PX = 14000;
const TOP_PADDING = 620;
const FOCUS_RATIO = 0.68;

const layers = [
  {
    name: "Troposphere",
    range: "0–12 km",
    start: 0,
    end: 12,
    gradient: "linear-gradient(to bottom, rgba(200,130,82,0.05), rgba(240,182,138,0.04))",
  },
  {
    name: "Stratosphere",
    range: "12–50 km",
    start: 12,
    end: 50,
    labelTop: "28%",
    gradient: "linear-gradient(to bottom, rgba(130,173,177,0.05), rgba(184,200,180,0.03))",
  },
  {
    name: "Mesosphere",
    range: "50–85 km",
    start: 50,
    end: 85,
    labelTop: "36%",
    gradient: "linear-gradient(to bottom, rgba(18,26,58,0.12), rgba(45,55,110,0.07))",
  },
  {
    name: "Thermosphere",
    range: "85–550 km",
    start: 85,
    end: 550,
    gradient: "linear-gradient(to bottom, rgba(4,6,14,0.22), rgba(12,18,40,0.1))",
  },
  {
    name: "Upper thermosphere",
    range: "550–700 km",
    start: 550,
    end: 700,
    gradient: "linear-gradient(to bottom, rgba(8,12,28,0.14), rgba(6,10,24,0.12))",
  },
  {
    name: "Exosphere",
    range: "700–760 km",
    start: 700,
    end: ATMOSPHERE_TOP_KM,
    gradient: "linear-gradient(to bottom, rgba(5,8,18,0.12), rgba(3,5,14,0.1))",
  },
];

const exploreLayers = [
  {
    name: "Near-Earth space",
    range: "760–2,000 km",
    start: 760,
    end: 2000,
    gradient: "linear-gradient(to bottom, rgba(4,6,14,0.1), rgba(3,5,12,0.08))",
  },
  {
    name: "Radiation belts",
    range: "2,000–35,000 km",
    start: 2000,
    end: 35000,
    gradient: "linear-gradient(to bottom, rgba(3,5,12,0.1), rgba(2,4,10,0.08))",
  },
  {
    name: "High orbit",
    range: "35,000–100,000 km",
    start: 35000,
    end: 100000,
    gradient: "linear-gradient(to bottom, rgba(2,3,8,0.12), rgba(1,2,6,0.1))",
  },
  {
    name: "Cislunar space",
    range: "100,000–384,400 km",
    start: 100000,
    end: EXPLORE_TOP_KM,
    gradient: "linear-gradient(to bottom, rgba(1,2,5,0.14), rgba(0,0,0,0.18))",
  },
];

const milestones = [
  {
    alt: 8.8,
    text: "You have climbed to the height of Mount Everest.",
  },
  {
    alt: 11.2,
    offsetX: 120,
    offset: -50,
    text: "Most weather, rain, and storms live below this line.",
  },
  {
    alt: 99.5,
    offsetX: 110,
    text: "The Kármán line — where space begins for many agencies.",
  },
  {
    alt: 406,
    text: "The International Space Station orbits near here.",
  },
  {
    alt: 755,
    offset: -200,
    text: "The exosphere ends here — like the ocean floor in The Deep Sea. A Saturn V waits to go farther.",
  },
];

const exploreMarkers = [
  {
    alt: 900,
    side: "left",
    offset: 480,
    mobileOffset: 400,
    hideAlt: true,
    title: "Saturn V · Apollo 8",
    text: "On 21 December 1968, the Saturn V carried the first humans to leave Earth’s orbit. In minutes they cleared the last breathable air — technology carrying biology into the dark.",
    data: "Launch: Kennedy Space Center · Crew: Borman, Lovell, Anders · Mission: lunar orbit.",
  },
  {
    alt: 2000,
    side: "left",
    title: "Van Allen belts",
    text: "Radiation zones discovered in 1958. Apollo 8 passed through them on the way to the Moon — a reminder that leaving the atmosphere does not mean leaving Earth’s influence.",
    data: "Explorer 1 · inner belt ~600–6,000 km · shapes satellite design and human flight paths.",
    image: "images/limb.jpg",
    imageAlt: "Earth's limb from orbit",
    credit: "NASA / ISS Expedition 51",
  },
  {
    alt: 35786,
    side: "right",
    title: "Geostationary orbit",
    text: "Weather and climate satellites hover here, fixed over one region. Their data feed forecasts, insurance, agriculture, and policy — an economy built on reading the sky.",
    data: "35,786 km · GOES, Meteosat, Himawari · 24 h orbital period.",
    image: "images/hurricane.jpg",
    imageAlt: "Hurricane from space",
    credit: "NASA / ISS Crew Earth Observations",
  },
  {
    alt: 150000,
    side: "left",
    title: "Outbound to the Moon",
    text: "Apollo 8 coasted through this void for three days. Humans watched Earth shrink — industry, forests, and oceans becoming one system, without borders visible from here.",
    data: "Translunar injection · Dec 1968 · ~240,000 mi to lunar orbit.",
    image: "images/apollo8-earth.jpg",
    imageAlt: "Earth seen from Apollo 8 en route to the Moon, December 1968",
    credit: "NASA / Apollo 8 (public domain)",
  },
  {
    alt: 384400,
    side: "center",
    offset: -80,
    title: "Earthrise",
    text: "On Christmas Eve 1968, Bill Anders photographed Earth rising over the lunar horizon — a blue marble in black space. Galen Rowell called it the most influential environmental photo ever taken. It helped spark Earth Day, the EPA, and a global movement to treat the atmosphere as one shared home.",
    data: "NASA AS08-14-2383 · 384,400 km mean Earth–Moon distance · Apollo 8, 24 Dec 1968.",
    image: "images/earthrise.jpg",
    imageAlt: "The Earthrise photograph taken by Apollo 8",
    credit: "NASA / Bill Anders, Apollo 8 (public domain)",
  },
];

const markers = [
  {
    alt: 0,
    offset: 260,
    mobileOffset: 220,
    side: "center",
    title: "Sea level",
    text: "Roughly 8 billion people share this thin shell of air. Most greenhouse gases, soot, and water vapor are added here — from power plants, farms, traffic, forests, and fires.",
    data: "NASA GISS: global temperature +1.36 °C since 1880 (2024 baseline).",
    image: "images/shanghai.jpg",
    imageAlt: "Hazy skyline with air pollution near the ground",
    credit: "Lars Plougmann / CC BY-SA 2.0 (Wikimedia Commons)",
  },
  {
    alt: 2.6,
    offset: -40,
    mobileOffset: -20,
    side: "left",
    title: "Urban heat islands",
    text: "Concrete, asphalt, and exhaust hold warmth after sunset. As the baseline climate warms, heat waves stress bodies, crops, transit, and power grids.",
    data: "NOAA: U.S. heat waves are lasting longer than in the 1960s.",
    image: "images/thermal.jpg",
    imageAlt: "Landsat thermal view of Paris during a heat wave",
    credit: "NASA Landsat 9 / OLI-2 (Wikimedia Commons)",
  },
  {
    alt: 2,
    offset: -260,
    mobileOffset: -170,
    side: "right",
    title: "Emissions at the surface",
    text: "Carbon dioxide, methane, and black carbon rise from industry and land use before winds mix them through the troposphere — the weather layer.",
    data: "NOAA Mauna Loa: ~427 ppm CO₂ (2025 weekly mean).",
    image: "images/power.jpg",
    imageAlt: "Power plant smoke stacks at sunset",
    credit: "Wikimedia Commons",
  },
  {
    alt: 5.5,
    side: "center",
    title: "Where weather forms",
    text: "Almost all water vapor lives in the lowest kilometers. A warmer atmosphere holds more moisture, feeding heavier rain, floods, and shifting storm tracks.",
    data: "NASA: satellites map cloud height, rain rates, and soil moisture daily.",
    image: "images/hurricane.jpg",
    imageAlt: "Hurricane seen from the International Space Station",
    credit: "NASA / ISS Crew Earth Observations",
  },
  {
    alt: 8.8,
    side: "left",
    title: "Mount Everest",
    text: "The highest point on Earth still sits inside the troposphere. Warming air thins glaciers that supply drinking water to hundreds of millions downstream.",
    data: "Peak elevation: 8,849 m (China–Nepal survey, 2020).",
    image: "images/everest.jpg",
    imageAlt: "Snow-covered north face of Mount Everest",
    credit: "Luca Galuzzi / CC BY-SA 2.5 (Wikimedia Commons)",
  },
  {
    alt: 10.2,
    side: "center",
    offset: -40,
    title: "Cruising altitude",
    text: "Jet traffic cruises near the top of weather. Aviation adds CO₂; some contrails trap extra heat — a technology footprint written across the sky.",
    data: "Typical cruise: ~10–12 km · ~900 km/h ground speed.",
    image: "images/contrail.jpg",
    imageAlt: "Military transport aircraft leaving a contrail",
    credit: "U.S. Air Force / public domain (Wikimedia Commons)",
  },
  {
    alt: 12.5,
    side: "right",
    offset: 40,
    mobileOffset: 20,
    title: "Tropopause",
    text: "The boundary where turbulent weather gives way to the calm stratosphere. Storm clouds flatten into anvils here as rising air hits the ceiling. Climate models show this level rising as the lower atmosphere warms.",
    data: "NASA Earth Observatory: tropopause height varies with latitude and season.",
    image: "images/tropopause.jpg",
    imageAlt: "Cumulonimbus storm with a flat anvil top at the tropopause",
    credit: "NASA / ISS Crew Earth Observations (public domain)",
  },
  {
    alt: 17.5,
    side: "left",
    offset: 160,
    mobileOffset: 120,
    title: "Weather balloon",
    text: "Twice daily, balloons profile temperature, humidity, pressure, and ozone — building the vertical records that reveal how the atmosphere is changing.",
    data: "NOAA: ~900 global radiosonde stations since the 1940s.",
    image: "images/balloon.jpg",
    imageAlt: "Weather balloon carrying a radiosonde instrument",
    credit: "NOAA / public domain (Wikimedia Commons)",
  },
  {
    alt: 25,
    side: "right",
    title: "Ozone layer",
    text: "Ozone filters ultraviolet light. The Montreal Protocol phased out ozone-depleting chemicals — also avoiding extra warming, because many were potent greenhouse gases.",
    data: "NASA Ozone Watch: Antarctic ozone hole area still monitored each spring.",
    image: "images/ozone.jpg",
    imageAlt: "Satellite view of the ozone hole over Antarctica",
    credit: "NASA / public domain (Wikimedia Commons)",
  },
  {
    alt: 35,
    side: "center",
    title: "Greenhouse fingerprint",
    text: "Added greenhouse gases warm the troposphere while the stratosphere cools — a vertical pattern that points to heat being trapped below, not the Sun alone.",
    data: "IPCC AR6: human activity is the dominant cause of warming since 1950.",
    image: "images/co2.jpg",
    imageAlt: "CO₂ monitoring instruments at Mauna Loa Observatory",
    credit: "NOAA Photo Library / public domain (Wikimedia Commons)",
  },
  {
    alt: 50,
    side: "left",
    title: "Stratopause",
    text: "Air is thin, but this region still holds the chemistry — ozone, aerosols, water vapor — that links the stratosphere to surface climate.",
    data: "~50 km: transition between stratosphere and mesosphere.",
    image: "images/stratopause.jpg",
    imageAlt: "Orbital sunset illuminating Earth's upper atmosphere in pink and blue",
    credit: "NASA / ISS Expedition 74 (public domain)",
  },
  {
    alt: 58,
    side: "right",
    offset: 80,
    mobileOffset: 50,
    title: "Sounding rocket",
    text: "When balloons stop near 35 km, small meteorological rockets take over — lofting instruments through the mesosphere to measure winds, temperature, and dust before falling back to Earth.",
    data: "NASA sounding rockets: ~50–850 km apogee · minutes in flight, decades of upper-air records.",
    image: "images/sounding-rocket.jpg",
    imageAlt: "NASA Black Brant XII sounding rocket launching at night",
    credit: "NASA / public domain (Wikimedia Commons)",
  },
  {
    alt: 68,
    side: "left",
    offset: 70,
    mobileOffset: 40,
    title: "Meteors",
    text: "Most shooting stars burn up here — dust and pebbles from comets hitting the mesosphere at tens of km/s. Friction with thin air makes a brief, bright streak; little reaches the ground.",
    data: "Typical ablation: ~70–100 km · the Perseids peak each August.",
    image: "images/meteor.jpg",
    imageAlt: "Meteor outburst captured in a long-exposure night sky photo",
    credit: "NASA Ames Research Center / public domain (Wikimedia Commons)",
  },
  {
    alt: 76,
    side: "right",
    title: "Noctilucent clouds",
    text: "Ice crystals glow at the edge of space. Their brightness and timing shift as the upper atmosphere responds to methane, water vapor, and temperature change.",
    data: "NASA AIM mission: polar mesospheric clouds peak in northern summer.",
    image: "images/noctilucent.jpg",
    imageAlt: "Silvery noctilucent clouds at twilight",
    credit: "Wikimedia Commons",
  },
  {
    alt: 85,
    side: "center",
    title: "Mesopause",
    text: "Among the coldest places around Earth — a reminder that climate change is not uniform warming at every height.",
    data: "Mesopause temperatures can fall below −90 °C.",
    image: "images/mesopause.jpg",
    imageAlt: "Polar mesospheric clouds as a thin bright line on Earth's horizon from the ISS",
    credit: "NASA / ISS Expedition 40 (public domain)",
  },
  {
    alt: 100,
    side: "left",
    title: "Kármán line",
    text: "A common edge-of-space marker. From here, Earth is a bright curve with a fragile blue rim — nearly all breathable air and climate action remain below.",
    data: "100 km: FAI definition of spaceflight altitude.",
    image: "images/karman.jpg",
    imageAlt: "Earth's thin blue atmosphere hovering on the horizon against black space",
    credit: "NASA Earth Observatory / ISS (CC BY 2.0, Wikimedia Commons)",
  },
  {
    alt: 250,
    side: "right",
    title: "Aurora & ionosphere",
    text: "Solar wind energizes the upper atmosphere. Far below, greenhouse gases keep reshaping how energy moves through the whole column of air.",
    data: "Thermosphere temperatures can exceed 1,000 °C — but air is too thin to feel hot.",
    image: "images/aurora.jpg",
    imageAlt: "Aurora borealis curtains in the night sky",
    credit: "Unsplash / Wikimedia Commons",
  },
  {
    alt: 408,
    side: "left",
    offset: 60,
    title: "International Space Station",
    text: "Crews watch smoke plumes, hurricanes, drought, city lights, and shrinking ice — human observers above a planet whose climate is being rewritten below.",
    data: "ISS orbit: ~408 km · ~90 min per revolution · NASA expeditions since 2000.",
    image: "images/iss.jpg",
    imageAlt: "International Space Station orbiting above Earth",
    credit: "NASA / public domain (Wikimedia Commons)",
  },
  {
    alt: 550,
    side: "right",
    title: "Climate satellites",
    text: "NASA’s Earth Observing System — Terra, Aqua, and others — ride to orbit on rockets like the Delta II. Their data on water, ice, and carbon inform science, economies, and treaties.",
    data: "Terra launched 1999 · Aqua 2002 on Delta II · data at earthdata.nasa.gov.",
    image: "images/climate-satellites.jpg",
    imageAlt: "Delta II rocket launching the CALIPSO and CloudSat climate satellites",
    credit: "NASA / public domain (Wikimedia Commons)",
  },
  {
    alt: 705,
    side: "center",
    offset: 40,
    title: "Earth-observing fleet",
    text: "NASA and partners measure sea level, ice sheets, methane plumes, forest cover, fires, and Earth's energy budget — turning the sky into a climate laboratory.",
    data: "NASA: 25+ active Earth science missions · data free at earthdata.nasa.gov.",
    image: "images/earth-fleet.jpg",
    imageAlt: "NASA visualization of the Earth observing satellite fleet in orbit",
    credit: "NASA Scientific Visualization Studio (public domain)",
  },
];

const altitudeValue = document.querySelector("#altitude-value");
const layerValue = document.querySelector("#layer-value");
const sky = document.querySelector("#sky");
const markerRoot = document.querySelector("#markers");
const exploreMarkerRoot = document.querySelector("#explore-markers");
const milestoneRoot = document.querySelector("#milestones");
const layerRoot = document.querySelector("#layer-bands");
const exploreLayerRoot = document.querySelector("#explore-bands");
const lineRoot = document.querySelector("#altitude-lines");
const exploreLineRoot = document.querySelector("#explore-lines");
const ending = document.querySelector("#ending");
const intro = document.querySelector(".intro");
const ocean = document.querySelector("#ocean");
const titleCity = document.querySelector("#title-city");
const rocketShip = document.querySelector("#rocket-ship");
const skyGradient = document.querySelector("#sky-gradient");

const SKY_GRADIENT_STOPS = [
  { km: EXPLORE_TOP_KM, color: "#000000" },
  { km: 120000, color: "#020306" },
  { km: 30000, color: "#04070f" },
  { km: 5000, color: "#07101a" },
  { km: ATMOSPHERE_TOP_KM, color: "#0d1422" },
  { km: 700, color: "#121b2b" },
  { km: 550, color: "#1a2838" },
  { km: 350, color: "#27465b" },
  { km: 100, color: "#4f7f91" },
  { km: 50, color: "#7a8a88" },
  { km: 40, color: "#8a7878" },
  { km: 30, color: "#9a7468" },
  { km: 22, color: "#a87062" },
  { km: 16, color: "#b87858" },
  { km: 12, color: "#d58a64" },
  { km: 11, color: "#da916a" },
  { km: 10, color: "#df986f" },
  { km: 9, color: "#e39f74" },
  { km: 8, color: "#e7a578" },
  { km: 7, color: "#eaab7c" },
  { km: 6, color: "#ecb07f" },
  { km: 5, color: "#edb382" },
  { km: 4, color: "#eeb584" },
  { km: 3, color: "#efb686" },
  { km: 2.5, color: "#f0b688" },
  { km: 2, color: "#f0b689" },
  { km: 1.5, color: "#f0b68a" },
  { km: 1, color: "#f0b68a" },
  { km: 0, color: "#f0b68a" },
];

const CITY_TIME_THEMES = {
  day: {
    label: "Day",
    image: "images/city_background/city_day.png",
    skyStops: {
      0: "#d4f5f1",
      0.5: "#ccf2ed",
      1: "#c4efe9",
      1.5: "#bcebe5",
      2: "#b4e7e1",
      2.5: "#a8e2dc",
      3: "#9cdcd6",
      4: "#90d6d0",
      5: "#84d0ca",
      6: "#78c8c4",
      7: "#6ec0be",
      8: "#64b8b8",
      9: "#5ab0b2",
      10: "#52a8ac",
      11: "#4ca0a6",
      12: "#4698a0",
      16: "#408c98",
      22: "#3a8490",
      30: "#347c88",
      40: "#307484",
      50: "#2c6c80",
      100: "#28647a",
    },
  },
  dusk: {
    label: "Dusk",
    image: "images/city_background/city_dawn.png",
    skyStops: {
      0: "#f0b68a",
      1: "#f0b68a",
      1.5: "#f0b68a",
      2: "#f0b689",
      2.5: "#f0b688",
      3: "#efb686",
      4: "#eeb584",
      5: "#edb382",
      6: "#ecb07f",
      7: "#eaab7c",
      8: "#e7a578",
      9: "#e39f74",
      10: "#df986f",
      11: "#da916a",
      12: "#d58a64",
      16: "#c88252",
      22: "#a87062",
      30: "#927060",
      40: "#887068",
      50: "#7a8a88",
    },
  },
  night: {
    label: "Night",
    image: "images/city_background/city_night.png",
    skyStops: {
      0: "#10141c",
      1: "#12161f",
      1.5: "#141822",
      2: "#161a26",
      2.5: "#181c2a",
      3: "#1a1e2e",
      4: "#1c2032",
      5: "#1e2236",
      6: "#20263a",
      7: "#22283e",
      8: "#242a42",
      9: "#262c46",
      10: "#282e4a",
      11: "#2a304c",
      12: "#2c324e",
      16: "#303648",
      22: "#343a48",
      30: "#383c48",
      40: "#3c4048",
      50: "#404448",
    },
  },
};

const CITY_TIME_STORAGE_KEY = "cityTime";
let currentCityTime = "dusk";

function resolveSkyColor(km, defaultColor) {
  const theme = CITY_TIME_THEMES[currentCityTime];
  const skyStops = theme?.skyStops;

  if (skyStops && Object.prototype.hasOwnProperty.call(skyStops, km)) {
    return skyStops[km];
  }

  return defaultColor;
}

function setCityTime(time, { persist = true } = {}) {
  const theme = CITY_TIME_THEMES[time];

  if (!theme) {
    return;
  }

  currentCityTime = time;
  document.body.dataset.cityTime = time;

  if (persist) {
    localStorage.setItem(CITY_TIME_STORAGE_KEY, time);
  }

  if (timeSwitchButtons.length) {
    timeSwitchButtons.forEach((button) => {
      const isActive = button.dataset.time === time;

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  const skyline = titleCity?.querySelector(".title-city__skyline");

  if (skyline instanceof HTMLImageElement) {
    const nextSrc = theme.image;

    if (!skyline.src.endsWith(nextSrc)) {
      skyline.addEventListener(
        "load",
        () => {
          positionTitleCity();
          positionIntro();
        },
        { once: true },
      );
      skyline.src = nextSrc;
    }
  }

  buildSkyGradient();
  updateAltimeter();
}

function atmosphereDistance(km) {
  if (km <= 12) {
    return km * 440;
  }

  if (km <= 50) {
    return 12 * 440 + (km - 12) * 125;
  }

  if (km <= 100) {
    return 12 * 440 + 38 * 125 + (km - 50) * 70;
  }

  return 12 * 440 + 38 * 125 + 50 * 70 + (km - 100) * 14;
}

function altitudeDistance(km) {
  if (km <= ATMOSPHERE_TOP_KM) {
    return atmosphereDistance(km);
  }

  const logMin = Math.log10(ATMOSPHERE_TOP_KM + 1);
  const logMax = Math.log10(EXPLORE_TOP_KM);
  const logKm = Math.log10(Math.max(ATMOSPHERE_TOP_KM + 1, km));
  const t = (logKm - logMin) / (logMax - logMin);

  return atmosphereDistance(ATMOSPHERE_TOP_KM) + t * EXPLORE_SCROLL_PX;
}

const CLIMB_HEIGHT = altitudeDistance(EXPLORE_TOP_KM);

function altitudeToY(km) {
  return TOP_PADDING + CLIMB_HEIGHT - altitudeDistance(km);
}

function distanceToAltitude(distance) {
  const atmosMax = atmosphereDistance(ATMOSPHERE_TOP_KM);

  if (distance <= atmosMax) {
    if (distance <= 12 * 440) {
      return distance / 440;
    }

    if (distance <= 12 * 440 + 38 * 125) {
      return 12 + (distance - 12 * 440) / 125;
    }

    if (distance <= 12 * 440 + 38 * 125 + 50 * 70) {
      return 50 + (distance - 12 * 440 - 38 * 125) / 70;
    }

    return 100 + (distance - 12 * 440 - 38 * 125 - 50 * 70) / 14;
  }

  const t = (distance - atmosMax) / EXPLORE_SCROLL_PX;
  const logMin = Math.log10(ATMOSPHERE_TOP_KM + 1);
  const logMax = Math.log10(EXPLORE_TOP_KM);
  const logKm = logMin + t * (logMax - logMin);

  return 10 ** logKm;
}

function yToAltitude(y) {
  const distance = Math.max(0, Math.min(CLIMB_HEIGHT, CLIMB_HEIGHT - (y - TOP_PADDING)));

  return distanceToAltitude(distance);
}

function formatAlt(km) {
  if (km >= 10000) {
    return Math.round(km).toLocaleString("en-US");
  }

  if (km < 10) {
    return km.toFixed(1).replace(".0", "");
  }

  return Math.round(km).toLocaleString("en-US");
}

function activeLayer(km) {
  if (km > ATMOSPHERE_TOP_KM) {
    return (
      exploreLayers.find((layer) => km >= layer.start && km < layer.end) ||
      exploreLayers.at(-1)
    );
  }

  return layers.find((layer) => km >= layer.start && km < layer.end) || layers.at(-1);
}

function markerFigure(item) {
  if (!item.image) {
    return "";
  }

  return `
    <figure class="marker__figure">
      <img
        src="${item.image}"
        alt="${item.imageAlt || item.title}"
        width="320"
        height="213"
        loading="lazy"
        decoding="async"
      />
      <figcaption class="marker__credit">${item.credit}</figcaption>
    </figure>
  `;
}

function renderLayerBands(root, layerList) {
  layerList.forEach((layer) => {
    const band = document.createElement("section");
    band.className = "layer-band";
    band.style.top = `${altitudeToY(layer.end)}px`;
    band.style.height = `${altitudeToY(layer.start) - altitudeToY(layer.end)}px`;
    band.style.background = layer.gradient;
    band.innerHTML = `
      <div class="layer-band__label" style="top: ${layer.labelTop || "42%"}">
        <span class="layer-band__name">${layer.name}</span>
        <span class="layer-band__range">${layer.range}</span>
      </div>
    `;
    root.appendChild(band);
  });
}

function renderMilestones() {
  milestones.forEach((item) => {
    const node = document.createElement("p");
    const offsetX = item.offsetX || 0;

    node.className = "milestone";
    node.textContent = item.text;
    node.style.top = `${altitudeToY(item.alt) + (item.offset || 0)}px`;
    node.style.transform = `translate(calc(-50% + ${offsetX}px), -50%)`;
    milestoneRoot.appendChild(node);
  });
}

function buildSkyGradient() {
  const height = sky.offsetHeight;

  if (!height) {
    return;
  }

  const stops = SKY_GRADIENT_STOPS.map(({ km, color }) => {
    const y = altitudeToY(km);
    const percent = Math.max(0, Math.min(100, (y / height) * 100));

    return { color: resolveSkyColor(km, color), percent };
  })
    .sort((a, b) => a.percent - b.percent)
    .map(({ color, percent }) => `${color} ${percent.toFixed(1)}%`)
    .join(", ");

  skyGradient.style.background = `linear-gradient(to bottom, ${stops})`;
}

function renderMarkers(items, root) {
  items.forEach((item) => {
    const marker = document.createElement("article");
    const seaLevelClass = item.alt === 0 ? " marker--sea-level" : "";
    const dataLine = item.data
      ? `<p class="marker__data">${item.data}</p>`
      : "";

    const altLine = item.hideAlt
      ? ""
      : `<div class="marker__alt">${formatAlt(item.alt)} km</div>`;

    marker.className = `marker marker--${item.side}${seaLevelClass}`;
    marker.innerHTML = `
      ${altLine}
      ${markerFigure(item)}
      <h2>${item.title}</h2>
      <p class="marker__text">${item.text}</p>
      ${dataLine}
    `;
    root.appendChild(marker);
  });
}

function positionMarkersIn(root, items) {
  [...root.children].forEach((marker, index) => {
    const item = items[index];

    marker.style.top = `${altitudeToY(item.alt) + markerOffset(item)}px`;
  });
}

function markerOffset(item) {
  if (window.innerWidth <= 760 && item.mobileOffset !== undefined) {
    return item.mobileOffset;
  }

  return item.offset || 0;
}

function renderAltitudeLines(root, alts, variant = "atmosphere") {
  const majorAlts = new Set([12, 50, 76, 100, 760]);

  alts.forEach((alt) => {
    const line = document.createElement("div");
    let variantClass = "";

    if (alt === 0) {
      variantClass = " altitude-line--sea-level";
    } else if (variant === "explore") {
      variantClass = " altitude-line--explore";
    } else if (majorAlts.has(alt)) {
      variantClass = " altitude-line--major";
    }

    line.className = `altitude-line${variantClass}`;
    line.style.top = `${altitudeToY(alt)}px`;
    line.innerHTML = `<span>${formatAlt(alt)} km</span>`;
    root.appendChild(line);
  });
}

function setDocumentHeight() {
  const seaLevel = altitudeToY(0);
  const bottomPadding = window.innerHeight * (1 - FOCUS_RATIO);
  const total = seaLevel + bottomPadding;

  sky.style.height = `${total}px`;
  positionIntro();
  positionOcean();
  positionTitleCity();
  ending.style.top = `${Math.max(96, altitudeToY(ATMOSPHERE_TOP_KM) - 520)}px`;

  buildSkyGradient();
}

function positionOcean() {
  if (!ocean) {
    return;
  }

  const seaY = altitudeToY(0);
  const feather = Math.min(180, Math.max(96, window.innerHeight * 0.14));

  ocean.style.setProperty("--ocean-feather", `${feather}px`);
  ocean.style.top = `${seaY - feather}px`;
  ocean.style.height = `${sky.offsetHeight - seaY + feather}px`;
}

function positionTitleCity() {
  if (!titleCity) {
    return;
  }

  const seaY = altitudeToY(0);
  const skyline = titleCity.querySelector(".title-city__skyline");
  const skylineHeight = skyline?.offsetHeight || titleCity.offsetHeight;

  titleCity.style.top = `${seaY - skylineHeight}px`;
}

function positionIntro() {
  if (!intro) {
    return;
  }

  const introAlt = 1.5;
  const introHeight = intro.offsetHeight;
  const introCenterY = altitudeToY(introAlt);

  intro.style.top = `${introCenterY - introHeight / 2}px`;
}

function updateRocket(km) {
  const showRocket = km >= ROCKET_START_KM && km < ROCKET_HIDE_KM;

  if (!showRocket) {
    rocketShip.hidden = true;
    rocketShip.setAttribute("aria-hidden", "true");
    return;
  }

  rocketShip.hidden = false;
  rocketShip.removeAttribute("aria-hidden");
  rocketShip.style.top = `${altitudeToY(km)}px`;

  let opacity = 0.9;

  if (km > ROCKET_FADE_START_KM) {
    opacity = Math.max(
      0,
      0.9 * (1 - (km - ROCKET_FADE_START_KM) / (ROCKET_HIDE_KM - ROCKET_FADE_START_KM)),
    );
  }

  rocketShip.style.opacity = String(opacity);
  rocketShip.classList.toggle("rocket-ship--boost", km >= ATMOSPHERE_TOP_KM);
}

function updateAltimeter() {
  const focusY = window.scrollY + window.innerHeight * FOCUS_RATIO;
  const km = Math.max(0, Math.min(EXPLORE_TOP_KM, yToAltitude(focusY)));
  altitudeValue.textContent = formatAlt(km);
  layerValue.textContent = activeLayer(km).name;
  document.body.classList.toggle("is-at-surface", km < 4);

  if (intro) {
    const introFade = km < 2 ? 1 : Math.max(0, 1 - (km - 2) / 1);

    intro.style.opacity = String(introFade);
    intro.style.visibility = introFade > 0.05 ? "visible" : "hidden";
  }

  updateRocket(km);
}

function scrollToAltitude(km) {
  const previousBehavior = document.documentElement.style.scrollBehavior;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const target = Math.max(0, Math.min(maxScroll, altitudeToY(km) - window.innerHeight * FOCUS_RATIO));

  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, target);
  document.documentElement.style.scrollBehavior = previousBehavior;
  updateAltimeter();
}

function scrollToInitialAltitude() {
  const params = new URLSearchParams(window.location.search);

  if (!params.has("alt")) {
    scrollToAltitude(0);
    return;
  }

  const requested = Number(params.get("alt"));

  if (!Number.isFinite(requested)) {
    return;
  }

  const km = Math.max(0, Math.min(EXPLORE_TOP_KM, requested));
  scrollToAltitude(km);
}

const musicToggle = document.querySelector("#music-toggle");
const ambience = document.querySelector("#ambience");
const musicLabel = musicToggle.querySelector(".music-toggle__label");

ambience.volume = 0.42;

function setMusicUi(playing) {
  musicToggle.setAttribute("aria-pressed", playing ? "true" : "false");
  musicToggle.setAttribute(
    "aria-label",
    playing
      ? "Pause background music: Méditation from Thaïs"
      : "Play background music: Méditation from Thaïs by Massenet",
  );
  musicLabel.textContent = playing ? "Music on" : "Music off";
  musicToggle.classList.toggle("music-toggle--on", playing);
}

async function toggleMusic() {
  if (ambience.paused) {
    try {
      await ambience.play();
      setMusicUi(true);
    } catch {
      setMusicUi(false);
    }
    return;
  }

  ambience.pause();
  setMusicUi(false);
}

musicToggle.addEventListener("click", toggleMusic);

const timeSwitch = document.querySelector("#time-switch");
const timeSwitchButtons = timeSwitch
  ? [...timeSwitch.querySelectorAll(".time-switch__btn")]
  : [];

timeSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCityTime(button.dataset.time);
  });
});

const savedCityTime = localStorage.getItem(CITY_TIME_STORAGE_KEY);
const normalizedCityTime = savedCityTime === "dawn" ? "dusk" : savedCityTime;

if (normalizedCityTime && CITY_TIME_THEMES[normalizedCityTime]) {
  setCityTime(normalizedCityTime, { persist: false });
} else {
  setCityTime("dusk", { persist: false });
}

history.scrollRestoration = "manual";
renderLayerBands(layerRoot, layers);
renderLayerBands(exploreLayerRoot, exploreLayers);
renderMilestones();
renderMarkers(markers, markerRoot);
renderMarkers(exploreMarkers, exploreMarkerRoot);
positionMarkersIn(markerRoot, markers);
positionMarkersIn(exploreMarkerRoot, exploreMarkers);
renderAltitudeLines(lineRoot, [0, 5, 10, 12, 20, 35, 50, 60, 70, 76, 85, 100, 250, 408, 550, 700, 760]);
renderAltitudeLines(exploreLineRoot, [2000, 35786, 100000, 384400], "explore");
setDocumentHeight();
const titleCityImage = titleCity?.querySelector(".title-city__skyline");
if (titleCityImage instanceof HTMLImageElement && !titleCityImage.complete) {
  titleCityImage.addEventListener("load", () => {
    positionTitleCity();
    positionIntro();
  });
}
requestAnimationFrame(() => {
  positionIntro();
  scrollToInitialAltitude();
});

window.addEventListener("scroll", updateAltimeter, { passive: true });
window.addEventListener("resize", () => {
  const km = yToAltitude(window.scrollY + window.innerHeight * FOCUS_RATIO);
  setDocumentHeight();
  positionIntro();
  positionMarkersIn(markerRoot, markers);
  positionMarkersIn(exploreMarkerRoot, exploreMarkers);
  scrollToAltitude(km);
});
