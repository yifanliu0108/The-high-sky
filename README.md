# The High Sky

A static, single-page scroll experience inspired by [The Deep Sea](https://neal.fun/deep-sea/) — but inverted into a climb through atmosphere layers, climate change, human technology, and NASA Earth science.

**Live site:** [yifanliu0108.github.io/The-high-sky](https://yifanliu0108.github.io/The-high-sky/)

## View locally

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

## Project structure

```
├── index.html          # Page structure, intro, ending, footer
├── script.js           # Altitude math, markers, sky themes, scroll logic
├── styles.css          # Layout, Day/Dusk/Night themes, marker cards
├── audio/
│   └── meditation.mp3  # Background music (optional toggle)
└── images/
    ├── city_background/   # Day, dusk, and night skyline overlays
    └── *.jpg              # Marker photos (NASA, NOAA, Wikimedia)
```

## Features

- Scroll from sea level to the Moon (~384,400 km) with altitude markers and layer bands
- **Day · Dusk · Night** city skyline themes (saved in `localStorage`)
- Optional background music — Massenet’s *Méditation* from *Thaïs*
- Apollo 8 explore section with Saturn V rocket animation

## Credits

Photo sources are credited at each stop on the page. Footer links include NASA Earth Science, NOAA Climate.gov, and related references.

## License

Content and code in this repository are shared for educational use. Third-party images and music retain their original licenses (see page credits).
