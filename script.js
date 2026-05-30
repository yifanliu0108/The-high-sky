const CLIMB_TOP_KM = 760;
const TOP_PADDING = 620;
const FOCUS_RATIO = 0.68;

const layers = [
  {
    name: "Troposphere",
    range: "0–12 km",
    start: 0,
    end: 12,
    gradient: "linear-gradient(to bottom, rgba(72,140,175,0.08), rgba(255,255,255,0.03))",
  },
  {
    name: "Stratosphere",
    range: "12–50 km",
    start: 12,
    end: 50,
    gradient: "linear-gradient(to bottom, rgba(72,88,150,0.1), rgba(55,120,175,0.06))",
  },
  {
    name: "Mesosphere",
    range: "50–85 km",
    start: 50,
    end: 85,
    gradient: "linear-gradient(to bottom, rgba(18,26,58,0.12), rgba(45,55,110,0.07))",
  },
  {
    name: "Thermosphere",
    range: "85–700 km",
    start: 85,
    end: 700,
    gradient: "linear-gradient(to bottom, rgba(4,6,14,0.35), rgba(14,20,48,0.1))",
  },
  {
    name: "Exosphere",
    range: "700+ km",
    start: 700,
    end: CLIMB_TOP_KM,
    gradient: "linear-gradient(to bottom, rgba(3,4,10,0.4), rgba(1,2,6,0.65))",
  },
];

const milestones = [
  {
    alt: 8.8,
    text: "You have climbed to the height of Mount Everest.",
  },
  {
    alt: 12,
    text: "Most weather, rain, and storms live below this line.",
  },
  {
    alt: 100,
    text: "The Kármán line — where space begins for many agencies.",
  },
  {
    alt: 408,
    text: "The International Space Station orbits near here.",
  },
];

const markers = [
  {
    alt: 0,
    offset: 52,
    side: "center",
    title: "Sea level",
    text: "Roughly 8 billion people share this thin shell of air. Most greenhouse gases, soot, and water vapor are added here — from power plants, farms, traffic, forests, and fires.",
    data: "NASA GISS: global temperature +1.36 °C since 1880 (2024 baseline).",
    image: "images/shanghai.jpg",
    imageAlt: "Hazy skyline with air pollution near the ground",
    credit: "Lars Plougmann / CC BY-SA 2.0 (Wikimedia Commons)",
  },
  {
    alt: 1.4,
    offset: -220,
    mobileOffset: -300,
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
    alt: 10.7,
    side: "right",
    title: "Cruising altitude",
    text: "Jet traffic cruises near the top of weather. Aviation adds CO₂; some contrails trap extra heat — a technology footprint written across the sky.",
    data: "Typical cruise: ~10–12 km · ~900 km/h ground speed.",
    image: "images/contrail.jpg",
    imageAlt: "Military transport aircraft leaving a contrail",
    credit: "U.S. Air Force / public domain (Wikimedia Commons)",
  },
  {
    alt: 12,
    side: "center",
    title: "Tropopause",
    text: "The boundary where turbulent weather gives way to the calm stratosphere. Climate models show this ceiling rising as the lower atmosphere warms.",
    data: "NASA Earth Observatory: tropopause height varies with latitude and season.",
    image: "images/limb.jpg",
    imageAlt: "Earth's limb with thin blue atmosphere from orbit",
    credit: "NASA / ISS Expedition 51",
  },
  {
    alt: 18,
    side: "left",
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
    image: "images/terra.jpg",
    imageAlt: "Sand dunes in the Arabian Empty Quarter imaged by NASA Terra",
    credit: "NASA Terra (EOS AM-1) / Wikimedia Commons",
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
    image: "images/aurora.jpg",
    imageAlt: "Aurora borealis over mountains in Norway",
    credit: "Unsplash / Wikimedia Commons",
  },
  {
    alt: 100,
    side: "left",
    title: "Kármán line",
    text: "A common edge-of-space marker. From here, Earth is a bright curve with a fragile blue rim — nearly all breathable air and climate action remain below.",
    data: "100 km: FAI definition of spaceflight altitude.",
    image: "images/limb.jpg",
    imageAlt: "Crescent moon and Earth's thin atmosphere from ISS",
    credit: "NASA / ISS Expedition 51",
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
    title: "Commercial constellations",
    text: "Thousands of Starlink and other satellites operate in low Earth orbit — a new layer of human technology between weather and deep space.",
    data: "SpaceX Starlink shells: ~340–550 km (FCC filings, 2024).",
    image: "images/spacex.jpg",
    imageAlt: "SpaceX Falcon 9 at Vandenberg Air Force Base",
    credit: "SpaceX / public domain (Wikimedia Commons)",
  },
  {
    alt: 705,
    side: "center",
    title: "Earth-observing fleet",
    text: "NASA and partners measure sea level, ice sheets, methane plumes, forest cover, fires, and Earth's energy budget — turning the sky into a climate laboratory.",
    data: "NASA: 25+ active Earth science missions · data free at earthdata.nasa.gov.",
    image: "images/terra.jpg",
    imageAlt: "Earth surface features imaged by NASA Terra satellite",
    credit: "NASA Terra (EOS AM-1) / Wikimedia Commons",
  },
];

const altitudeValue = document.querySelector("#altitude-value");
const layerValue = document.querySelector("#layer-value");
const sky = document.querySelector("#sky");
const markerRoot = document.querySelector("#markers");
const milestoneRoot = document.querySelector("#milestones");
const layerRoot = document.querySelector("#layer-bands");
const lineRoot = document.querySelector("#altitude-lines");
const ending = document.querySelector("#ending");
const intro = document.querySelector(".intro");

function altitudeDistance(km) {
  if (km <= 12) {
    return km * 440;
  }

  if (km <= 50) {
    return 12 * 440 + (km - 12) * 125;
  }

  if (km <= 100) {
    return 12 * 440 + 38 * 125 + (km - 50) * 70;
  }

  return 12 * 440 + 38 * 125 + 50 * 70 + (km - 100) * 12;
}

const CLIMB_HEIGHT = altitudeDistance(CLIMB_TOP_KM);

function altitudeToY(km) {
  return TOP_PADDING + CLIMB_HEIGHT - altitudeDistance(km);
}

function distanceToAltitude(distance) {
  if (distance <= 12 * 440) {
    return distance / 440;
  }

  if (distance <= 12 * 440 + 38 * 125) {
    return 12 + (distance - 12 * 440) / 125;
  }

  if (distance <= 12 * 440 + 38 * 125 + 50 * 70) {
    return 50 + (distance - 12 * 440 - 38 * 125) / 70;
  }

  return 100 + (distance - 12 * 440 - 38 * 125 - 50 * 70) / 12;
}

function yToAltitude(y) {
  const distance = Math.max(0, Math.min(CLIMB_HEIGHT, CLIMB_HEIGHT - (y - TOP_PADDING)));

  return distanceToAltitude(distance);
}

function formatAlt(km) {
  if (km < 10) {
    return km.toFixed(1).replace(".0", "");
  }

  return Math.round(km).toLocaleString("en-US");
}

function activeLayer(km) {
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

function renderLayers() {
  layers.forEach((layer) => {
    const band = document.createElement("section");
    band.className = "layer-band";
    band.style.top = `${altitudeToY(layer.end)}px`;
    band.style.height = `${altitudeToY(layer.start) - altitudeToY(layer.end)}px`;
    band.style.background = layer.gradient;
    band.innerHTML = `
      <div class="layer-band__label">
        <span class="layer-band__name">${layer.name}</span>
        <span class="layer-band__range">${layer.range}</span>
      </div>
    `;
    layerRoot.appendChild(band);
  });
}

function renderMilestones() {
  milestones.forEach((item) => {
    const node = document.createElement("p");
    node.className = "milestone";
    node.textContent = item.text;
    node.style.top = `${altitudeToY(item.alt)}px`;
    milestoneRoot.appendChild(node);
  });
}

function renderMarkers() {
  markers.forEach((item) => {
    const marker = document.createElement("article");
    const seaLevelClass = item.alt === 0 ? " marker--sea-level" : "";
    const dataLine = item.data
      ? `<p class="marker__data">${item.data}</p>`
      : "";

    marker.className = `marker marker--${item.side}${seaLevelClass}`;
    marker.innerHTML = `
      <div class="marker__alt">${formatAlt(item.alt)} km</div>
      ${markerFigure(item)}
      <h2>${item.title}</h2>
      <p class="marker__text">${item.text}</p>
      ${dataLine}
    `;
    markerRoot.appendChild(marker);
  });

  positionMarkers();
}

function markerOffset(item) {
  if (window.innerWidth <= 760 && item.mobileOffset !== undefined) {
    return item.mobileOffset;
  }

  return item.offset || 0;
}

function positionMarkers() {
  [...markerRoot.children].forEach((marker, index) => {
    const item = markers[index];

    marker.style.top = `${altitudeToY(item.alt) + markerOffset(item)}px`;
  });
}

function renderAltitudeLines() {
  [0, 5, 10, 12, 20, 35, 50, 76, 85, 100, 250, 408, 550, 700].forEach((alt) => {
    const line = document.createElement("div");
    line.className = "altitude-line";
    line.style.top = `${altitudeToY(alt)}px`;
    line.innerHTML = `<span>${formatAlt(alt)} km</span>`;
    lineRoot.appendChild(line);
  });
}

function setDocumentHeight() {
  const seaLevel = altitudeToY(0);
  const bottomPadding = window.innerHeight * (1 - FOCUS_RATIO);
  const total = seaLevel + bottomPadding;

  sky.style.height = `${total}px`;
  const introOffset =
    window.innerWidth <= 760
      ? Math.min(520, window.innerHeight * 0.58)
      : Math.min(620, window.innerHeight * 0.62);

  intro.style.top = `${seaLevel - introOffset}px`;
  ending.style.top = `${Math.max(96, altitudeToY(CLIMB_TOP_KM) - 380)}px`;
}

function updateAltimeter() {
  const focusY = window.scrollY + window.innerHeight * FOCUS_RATIO;
  const km = Math.max(0, Math.min(CLIMB_TOP_KM, yToAltitude(focusY)));
  altitudeValue.textContent = formatAlt(km);
  layerValue.textContent = activeLayer(km).name;
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

  const km = Math.max(0, Math.min(CLIMB_TOP_KM, requested));
  scrollToAltitude(km);
}

history.scrollRestoration = "manual";
renderLayers();
renderMilestones();
renderMarkers();
renderAltitudeLines();
setDocumentHeight();
requestAnimationFrame(scrollToInitialAltitude);

window.addEventListener("scroll", updateAltimeter, { passive: true });
window.addEventListener("resize", () => {
  const km = yToAltitude(window.scrollY + window.innerHeight * FOCUS_RATIO);
  setDocumentHeight();
  positionMarkers();
  scrollToAltitude(km);
});
