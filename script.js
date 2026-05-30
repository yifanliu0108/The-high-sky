const CLIMB_TOP_KM = 760;
const TOP_PADDING = 620;
const FOCUS_RATIO = 0.68;

const layers = [
  {
    name: "Troposphere",
    range: "0-12 km",
    start: 0,
    end: 12,
    gradient: "linear-gradient(to bottom, rgba(81,179,218,0.1), rgba(255,255,255,0.04))",
  },
  {
    name: "Stratosphere",
    range: "12-50 km",
    start: 12,
    end: 50,
    gradient: "linear-gradient(to bottom, rgba(90,89,189,0.11), rgba(68,164,219,0.08))",
  },
  {
    name: "Mesosphere",
    range: "50-85 km",
    start: 50,
    end: 85,
    gradient: "linear-gradient(to bottom, rgba(23,33,80,0.14), rgba(59,70,143,0.08))",
  },
  {
    name: "Thermosphere",
    range: "85-700 km",
    start: 85,
    end: 700,
    gradient: "linear-gradient(to bottom, rgba(5,7,16,0.4), rgba(17,23,58,0.12))",
  },
  {
    name: "Exosphere",
    range: "700+ km",
    start: 700,
    end: CLIMB_TOP_KM,
    gradient: "linear-gradient(to bottom, rgba(5,7,16,0.38), rgba(1,2,7,0.72))",
  },
];

const markers = [
  {
    alt: 0,
    offset: 92,
    side: "center",
    visual: "city",
    title: "Sea level",
    text: "The climate story starts in the lowest air: heat, water vapor, smoke, and fossil-fuel emissions are concentrated close to where people live.",
  },
  {
    alt: 0.5,
    offset: -220,
    mobileOffset: -460,
    side: "left",
    visual: "heat",
    title: "Urban heat",
    text: "Streets and buildings store warmth. As the baseline climate warms, heat waves become harder on bodies, power grids, crops, and city nights.",
  },
  {
    alt: 2,
    side: "right",
    visual: "molecule",
    title: "Boundary layer",
    text: "Carbon dioxide, methane, and soot rise from traffic, farms, power plants, fires, and industry before winds spread them around the planet.",
  },
  {
    alt: 5.5,
    side: "center",
    visual: "cloud",
    title: "Most weather lives below",
    text: "The lower sky holds almost all of the water vapor that feeds rain, snow, drought, storms, and the heavier downpours of a warmer atmosphere.",
  },
  {
    alt: 8.8,
    side: "left",
    visual: "mountain",
    title: "Mount Everest",
    text: "Even the highest peaks sit inside the troposphere. Warming air pushes glaciers uphill and changes downstream water supply.",
  },
  {
    alt: 10.7,
    side: "right",
    visual: "plane",
    title: "Jet stream lanes",
    text: "Airliners cruise near the top of weather. Aviation adds carbon dioxide, and some contrails can trap extra heat at night.",
  },
  {
    alt: 12,
    side: "center",
    visual: "cloud",
    title: "Tropopause",
    text: "Here the stormy troposphere gives way to the calmer stratosphere. A warmer lower atmosphere can lift this boundary higher.",
  },
  {
    alt: 18,
    side: "left",
    visual: "balloon",
    title: "Weather balloon",
    text: "Balloon instruments profile temperature, wind, humidity, and ozone, building vertical records that show how the atmosphere is changing.",
  },
  {
    alt: 25,
    side: "right",
    visual: "ozone",
    title: "Ozone layer",
    text: "The ozone shield filters ultraviolet light. Cutting ozone-depleting chemicals also helped avoid extra warming because many of them trap heat.",
  },
  {
    alt: 35,
    side: "center",
    visual: "molecule",
    title: "A greenhouse fingerprint",
    text: "Added greenhouse gases warm the lower atmosphere while the stratosphere cools, a vertical pattern that points to heat being trapped below.",
  },
  {
    alt: 50,
    side: "left",
    visual: "meteor",
    title: "Stratopause",
    text: "The air is extremely thin here. Below this line, climate systems still contain the clouds, ozone chemistry, and greenhouse gases that shape the surface.",
  },
  {
    alt: 76,
    side: "right",
    visual: "ice",
    title: "Noctilucent clouds",
    text: "These faint ice clouds form near the edge of space. Scientists watch them because the upper atmosphere reacts to changing temperature and water vapor.",
  },
  {
    alt: 85,
    side: "center",
    visual: "meteor",
    title: "Mesopause",
    text: "This is one of the coldest regions around Earth, a reminder that climate change is not a simple warming everywhere at every height.",
  },
  {
    alt: 100,
    side: "left",
    visual: "earth",
    title: "Karman line",
    text: "At the usual edge-of-space marker, Earth looks like a bright curve with a blue rim. Nearly all the breathable air and climate action are below.",
  },
  {
    alt: 250,
    side: "right",
    visual: "aurora",
    title: "Aurora and ionosphere",
    text: "Solar particles light the upper atmosphere. Far below, greenhouse gases keep altering how energy moves through the whole column of air.",
  },
  {
    alt: 408,
    side: "left",
    visual: "station",
    title: "International Space Station",
    text: "From orbit, crews see smoke plumes, hurricanes, shrinking ice, expanding cities, and the thin atmosphere connecting every climate signal.",
  },
  {
    alt: 705,
    side: "right",
    visual: "satellite",
    title: "Earth-observing satellites",
    text: "Satellites measure sea level, ice sheets, clouds, fires, forests, methane leaks, carbon dioxide, and the planet's energy balance.",
  },
];

const altitudeValue = document.querySelector("#altitude-value");
const layerValue = document.querySelector("#layer-value");
const sky = document.querySelector("#sky");
const markerRoot = document.querySelector("#markers");
const layerRoot = document.querySelector("#layer-bands");
const lineRoot = document.querySelector("#altitude-lines");
const ending = document.querySelector("#ending");
const intro = document.querySelector(".intro");
const surface = document.querySelector(".surface");

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

function visualMarkup(type) {
  const fragments = {
    city: '<div class="visual visual--city"><span></span><span></span><span></span><span></span></div>',
    heat: '<div class="visual visual--heat"><span></span></div>',
    molecule: '<div class="visual visual--molecule"><span>CO2</span><i>O</i><i>O</i></div>',
    cloud: '<div class="visual visual--cloud"><i></i></div>',
    mountain: '<div class="visual visual--mountain"></div>',
    plane: '<div class="visual visual--plane"><i></i></div>',
    balloon: '<div class="visual visual--balloon"><i></i></div>',
    ozone: '<div class="visual visual--ozone"><i></i></div>',
    meteor: '<div class="visual visual--meteor"></div>',
    aurora: '<div class="visual visual--aurora"><i></i><i></i></div>',
    satellite: '<div class="visual visual--satellite"><span></span><span></span></div>',
    station: '<div class="visual visual--station"><span></span><span></span></div>',
    earth: '<div class="visual visual--earth"></div>',
    ice: '<div class="visual visual--ice"></div>',
  };

  return fragments[type] || fragments.cloud;
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

function renderMarkers() {
  markers.forEach((item) => {
    const marker = document.createElement("article");
    const seaLevelClass = item.alt === 0 ? " marker--sea-level" : "";

    marker.className = `marker marker--${item.side} marker--${item.visual}${seaLevelClass}`;
    marker.innerHTML = `
      <div class="marker__alt">${formatAlt(item.alt)} km high</div>
      <div class="marker__visual" aria-hidden="true">${visualMarkup(item.visual)}</div>
      <h2>${item.title}</h2>
      <p>${item.text}</p>
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
  [0, 5, 10, 12, 20, 35, 50, 76, 85, 100, 250, 408, 700].forEach((alt) => {
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
  surface.style.top = `${seaLevel - 260}px`;
  const introOffset =
    window.innerWidth <= 760
      ? Math.min(560, window.innerHeight * 0.6)
      : Math.min(650, window.innerHeight * 0.64);

  intro.style.top = `${seaLevel - introOffset}px`;
  ending.style.top = `${Math.max(96, altitudeToY(CLIMB_TOP_KM) - 420)}px`;
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
