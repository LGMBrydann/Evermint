/* =========================================================
   EVERMINT OS
   ========================================================= */


/* =========================================================
   GAME DATABASE

   The final launch paths should be adjusted after checking
   the exact folder structure of the web-port fork.
   ========================================================= */

const GAME_MANIFEST = [
  "1",
  "100-player-pong",
  "123movies",
  "1v1",
  "1v1space",
  "2048",
  "2048-multitask",
  "9007199254740992",
  "achievementunlocked",
  "adarkroom",
  "ages-of-conflict",
  "alienhominid",
  "amidst-the-clouds",
  "avalanche",
  "backrooms",
  "bad-ice-cream",
  "bad-ice-cream-2",
  "bad-ice-cream-3",
  "baldis-basics",
  "ball-hop",
  "ballistic-chickens",
  "basketball-stars",
  "betaUI",
  "big-tower-tiny-square",
  "bitlife",
  "blocky-tower",
  "bloonstd",
  "bloonstd2",
  "bloonstd4",
  "bloxorz",
  "bouncybasketball",
  "breaklock",
  "breakout",
  "browserquest",
  "chrome-dino",
  "circlo",
  "cluster-rush",
  "connect3",
  "cookie",
  "core-ball",
  "crossyroad",
  "csgo-clicker",
  "cupcakes",
  "cuttherope",
  "cyber-city-driver",
  "discus",
  "dogeminer",
  "doodlejump",
  "drift-city",
  "driftking",
  "ducklife1",
  "ducklife2",
  "ducklife3",
  "ducklife4",
  "dune",
  "dunkers-fight",
  "eatio",
  "edge-surf",
  "edgenotfound",
  "eel-slap",
  "eggy-car",
  "elasticman",
  "elsasnapchat",
  "endlesswar3",
  "escapingtheprison",
  "evil-glitch",
  "evolution",
  "exo",
  "fallboys",
  "ferge",
  "flappy",
  "floyd",
  "fnaf",
  "fnaf4",
  "fruitninja",
  "geometrydash",
  "goodnight",
  "hextris",
  "idle-breakout",
  "idle-shark",
  "impossiblequiz",
  "interactivebuddy",
  "jetpack-joyride",
  "just-fall",
  "just-one-boss",
  "kitchen-gun-game",
  "kittencannon",
  "krunker",
  "learntofly",
  "learntofly2",
  "mario",
  "minecraft",
  "minecraft-js",
  "motox3m",
  "motox3m-pool",
  "motox3m-spooky",
  "motox3m-winter",
  "motox3m2",
  "multiplayer-pong",
  "pacman",
  "paperio",
  "papery-planes",
  "particle-clicker",
  "pokemonfirered",
  "pokey-stick",
  "pong",
  "pushback",
  "racer",
  "radiusraid",
  "restaurant-rush",
  "retrobowl",
  "retrohaunt",
  "rooftop-snipers-2",
  "run3",
  "sans",
  "slope",
  "spaceinvaders",
  "stack",
  "stack-ball",
  "station-meltdown",
  "steal-this-election",
  "subwaysurfershouston",
  "superhot",
  "temple-run-2",
  "tetris",
  "thesquare",
  "tic-tac-toe",
  "tic-tac-toe-ai",
  "timeshooter",
  "tomrun",
  "towermaster",
  "tunnelrush",
  "tv-static",
  "twerk-race-3d",
  "twitch-tetris",
  "tyronetetris",
  "veloce",
  "vex3",
  "vex4",
  "vex5",
  "vex6",
  "vex7",
  "wallsmash",
  "waterworks",
  "weavesilk",
  "webgl-fluid-simulation",
  "webretro",
  "whac-a-mole",
  "wordle",
  "worlds-hardest-game",
  "worlds-hardest-game-2",
  "x-trial-racing",
  "xx142-b2exe",
  "yoshifabrication",
  "you-are-bezos",
  "zombs-royale",
  "zoro"
];

const FEATURED_GAMES = new Set([
  "baldis-basics",
  "bloxorz",
  "chrome-dino",
  "cookie",
  "cuttherope",
  "driftking",
  "ducklife4",
  "fallboys",
  "fnaf",
  "geometrydash",
  "jetpack-joyride",
  "minecraft",
  "motox3m",
  "pacman",
  "pong",
  "slope",
  "spaceinvaders",
  "station-meltdown",
  "superhot",
  "temple-run-2",
  "tetris",
  "vex3",
  "wordle"
]);

const ICON_CATALOG = [
  "100pong.webp",
  "10m.webp",
  "123movies.webp",
  "1v1.webp",
  "1v1space.webp",
  "2048.webp",
  "900.webp",
  "BAS.webp",
  "BrowserQuest.webp",
  "CSGO.webp",
  "Dogecoin.webp",
  "PokemonFireRed.webp",
  "Racer.webp",
  "Rooftop-Snipers.webp",
  "Station-Meltdown.webp",
  "SubwayMonaco.webp",
  "VELOCE.webp",
  "Whac-A-Mole.webp",
  "YFS.webp",
  "ache.webp",
  "adarkroom.webp",
  "ages-of-conflict.webp",
  "alienhominid.webp",
  "amidst-the-clouds.webp",
  "avalanche.webp",
  "backrooms.webp",
  "bad-ice-cream-2.webp",
  "bad-ice-cream-3.webp",
  "bad-ice-cream.webp",
  "baldis-basics.webp",
  "ballhop.webp",
  "ballistic-chickens.webp",
  "basketball.webp",
  "biters.webp",
  "bitlife.webp",
  "blocky.webp",
  "bloonstd.webp",
  "bloonstd2.webp",
  "bloonstd4.webp",
  "bloxorz.webp",
  "box.webp",
  "breaklock.webp",
  "breakout.webp",
  "btts.webp",
  "chrom.webp",
  "circlo.webp",
  "cluster.webp",
  "con3.webp",
  "cookie.webp",
  "coreball.webp",
  "crossyroad.webp",
  "ctr.webp",
  "cupcakes.webp",
  "cyber.webp",
  "doodle.webp",
  "driftc.webp",
  "driftking.webp",
  "ducklife.webp",
  "ducklife2.webp",
  "ducklife3.webp",
  "ducklife4.webp",
  "dune.webp",
  "dunk.webp",
  "eatio.webp",
  "edge-surf.webp",
  "edgenotfound.webp",
  "eel-slap.webp",
  "eggy-car.webp",
  "elasticman.webp",
  "elec.webp",
  "endlesswar3.webp",
  "evil-glitch.webp",
  "evolution.webp",
  "excapingtheprison.webp",
  "exo.webp",
  "fall-boys.webp",
  "ferge.webp",
  "flappy.webp",
  "fliphero.webp",
  "fnaf.webp",
  "fnf-vs-lofi-girl.webp",
  "fridaynightfunkin.webp",
  "fruitninja.webp",
  "funnyshooter.webp",
  "geodash.webp",
  "gn.webp",
  "hextrt.webp",
  "idlebreakout.webp",
  "impossiblequiz.webp",
  "interactivebuddy.webp",
  "jetpack-joyride.webp",
  "just-fall.webp",
  "just-one-boss.webp",
  "kitchen-gun-game.webp",
  "kittencannon.webp",
  "krunker.webp",
  "learntofly.webp",
  "learntofly2.webp",
  "mario.webp",
  "meltdown.webp",
  "minecraft.webp",
  "moto-spook.webp",
  "motox3m-pool.webp",
  "motox3m-winter.webp",
  "motox3m.webp",
  "motox3m2.webp",
  "multit.webp",
  "ninjacut.webp",
  "one.webp",
  "pacman.webp",
  "paperio.webp",
  "paperplane.webp",
  "parclick.webp",
  "pickyback.webp",
  "pogy.webp",
  "pong.webp",
  "prox.webp",
  "pushback.webp",
  "raid.webp",
  "resr.webp",
  "retrobowl.webp",
  "retrohaunt.webp",
  "rooftopsn.webp",
  "run3.webp",
  "sans.webp",
  "sharkgame.webp",
  "slope.webp",
  "spaceinv.webp",
  "stack.webp",
  "stackball.webp",
  "subsan.webp",
  "subway.webp",
  "subwaysurferbeijing.webp",
  "subwaysurfershouston.webp",
  "superhot.webp",
  "sus.webp",
  "templerun.webp",
  "tetris.webp",
  "thesquare.webp",
  "timeshooters.webp",
  "toe.webp",
  "toe2.webp",
  "toeai.webp",
  "tomrun.webp",
  "towermaster.webp",
  "tunnelrush.webp",
  "tv-static.webp",
  "twerk-race-3d.webp",
  "twitch-tetris.webp",
  "vex3.webp",
  "vex4.webp",
  "vex5.webp",
  "vex6.webp",
  "vex7.webp",
  "wallsmash.webp",
  "waterworks.webp",
  "weavesilk.webp",
  "webgl-fluid-simulation.webp",
  "webretro.webp",
  "whg.webp",
  "wordle.webp",
  "xtr.webp",
  "xx142-b2exe.webp",
  "yoshifabrication.webp",
  "you-are-bezos.webp",
  "zombs-royale.webp",
  "zoro.webp"
];

function normalizeAssetName(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function formatGameName(gameId) {
  return gameId
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map(part => {
      if (!part) {
        return "";
      }

      if (/^\d/.test(part)) {
        return part;
      }

      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function inferGameCategory(gameId) {
  const id = gameId.toLowerCase();

  if (/(horror|slender|fnaf|backrooms|evil|haunt|ghost|killer|spooky|monster|sans|bendy|tattletail|blood|night|scary)/.test(id)) {
    return "Horror";
  }

  if (/(race|racer|car|drift|truck|speed|driver|motox|trial|bike|track|drive)/.test(id)) {
    return "Racing";
  }

  if (/(platform|jump|run|dash|tower|tunnel|flappy|slope|stack|ball|mario|temple|vex|breakout|pong|space|portal|geodash)/.test(id)) {
    return "Platformer";
  }

  if (/(puzzle|wordle|2048|connect|tic|mine|logic|quiz|hardest|breaklock|match)/.test(id)) {
    return "Puzzle";
  }

  if (/(rpg|pokemon|adventur|story|simulator|yume|omori|kindergarten|school|dungeon|quest)/.test(id)) {
    return "RPG";
  }

  if (/(shoot|gun|battle|strike|csgo|bullet|aim|combat|arena|blast|shot)/.test(id)) {
    return "Action";
  }

  if (/(sport|basketball|football|soccer|tennis|golf|ski|athlet)/.test(id)) {
    return "Sports";
  }

  if (/(idle|clicker|farm|cookie|zomb|builder|sim)/.test(id)) {
    return "Idle";
  }

  return "Arcade";
}

function resolveGameIcon(gameId) {
  const normalizedGame = normalizeAssetName(gameId);

  const exactMatch = ICON_CATALOG.find(icon => {
    const baseName = icon.replace(/\.webp$/i, "");
    return normalizeAssetName(baseName) === normalizedGame;
  });

  if (exactMatch) {
    return `/icons/${exactMatch}`;
  }

  const fallbackMatch = [...ICON_CATALOG]
    .map(icon => {
      const baseName = icon.replace(/\.webp$/i, "");
      const normalizedIcon = normalizeAssetName(baseName);

      let score = 0;

      if (normalizedIcon.includes(normalizedGame) || normalizedGame.includes(normalizedIcon)) {
        score += 25;
      }

      if (normalizedIcon.startsWith(normalizedGame.slice(0, 3)) || normalizedGame.startsWith(normalizedIcon.slice(0, 3))) {
        score += 8;
      }

      if (normalizedIcon.replace(/s$/, "") === normalizedGame.replace(/s$/, "")) {
        score += 12;
      }

      return { icon, score };
    })
    .sort((a, b) => b.score - a.score)
    .find(item => item.score > 0);

  if (fallbackMatch) {
    return `/icons/${fallbackMatch.icon}`;
  }

  return "/icons/logo.png";
}

const GAMES = GAME_MANIFEST.map(gameId => ({
  id: gameId,
  name: formatGameName(gameId),
  category: inferGameCategory(gameId),
  icon: resolveGameIcon(gameId),
  featured: FEATURED_GAMES.has(gameId)
}));


const DEFAULT_SCRAMJET_WSS = "wss://xylora.org";

/* =========================================================
   STATE
   ========================================================= */

const state = {

  filter: "all",

  category: null,

  search: "",

  favorites:
    JSON.parse(
      localStorage.getItem(
        "evermint-favorites"
      ) || "[]"
    ),

  recent:
    JSON.parse(
      localStorage.getItem(
        "evermint-recent"
      ) || "[]"
    ),

  scramjetBackend:
    localStorage.getItem(
      "evermint-scramjet-backend"
    ) || DEFAULT_SCRAMJET_WSS,

  scramjetEnabled:
    localStorage.getItem(
      "evermint-scramjet-enabled"
    ) !== "false",

  scramjetController: null,
  scramjetFrame: null

};


/* =========================================================
   HELPERS
   ========================================================= */

function $(selector) {

  return document.querySelector(
    selector
  );

}


function $$(selector) {

  return [
    ...document.querySelectorAll(
      selector
    )
  ];

}


function escapeHTML(value) {

  return value.replace(
    /[&<>"']/g,
    character => {

      const entities = {

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

      };

      return entities[character];

    }
  );

}


/* =========================================================
   STORAGE
   ========================================================= */

function saveState() {

  localStorage.setItem(
    "evermint-favorites",
    JSON.stringify(
      state.favorites
    )
  );

  localStorage.setItem(
    "evermint-recent",
    JSON.stringify(
      state.recent
    )
  );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {

  const toast = $("#toast");

  toast.textContent = message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimer
  );

  toastTimer = setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );

    },
    2200
  );

}


/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

  const clock = $("#clock");

  if (!clock) return;

  clock.textContent =
    new Intl.DateTimeFormat(
      undefined,
      {
        hour: "numeric",
        minute: "2-digit"
      }
    ).format(
      new Date()
    );

}

updateClock();

setInterval(
  updateClock,
  1000
);


/* =========================================================
   WINDOW MANAGEMENT
   ========================================================= */

let highestZIndex = 20;


function focusWindow(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  highestZIndex++;

  windowElement.style.zIndex =
    highestZIndex;

  $$(".window").forEach(
    element => {

      element.classList.remove(
        "active"
      );

    }
  );

  windowElement.classList.add(
    "active"
  );

  updateTaskbar();

}


function openApp(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  windowElement.classList.remove(
    "hidden"
  );

  focusWindow(
    app
  );

  $("#start-menu")
    .classList
    .add("hidden");

}


function closeApp(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  windowElement.classList.add(
    "hidden"
  );

  updateTaskbar();

}


function minimizeApp(app) {

  closeApp(
    app
  );

}


function maximizeApp(app) {

  const windowElement =
    document.querySelector(
      `#window-${app}`
    );

  if (!windowElement) {
    return;
  }

  windowElement.classList.toggle(
    "maximized"
  );

  focusWindow(
    app
  );

}


/* =========================================================
   TASKBAR
   ========================================================= */

function updateTaskbar() {

  const taskbar =
    $("#taskbar-apps");

  taskbar.innerHTML = "";

  const applications = {

    games: "🎮 Games",

    browser: "🌐 Browser",

    settings: "⚙️ Settings"

  };


  Object.entries(
    applications
  ).forEach(
    ([app, label]) => {

      const windowElement =
        document.querySelector(
          `#window-${app}`
        );

      if (
        !windowElement ||
        windowElement.classList.contains(
          "hidden"
        )
      ) {
        return;
      }

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "taskbar-app";

      button.textContent =
        label;

      button.addEventListener(
        "click",
        () => {

          if (
            windowElement.classList.contains(
              "hidden"
            )
          ) {

            openApp(app);

          } else {

            focusWindow(app);

          }

        }
      );

      taskbar.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   GAME LIBRARY
   ========================================================= */

function getFilteredGames() {

  const query =
    state.search
      .trim()
      .toLowerCase();


  return GAMES.filter(
    game => {

      if (
        state.filter ===
        "featured" &&
        !game.featured
      ) {
        return false;
      }


      if (
        state.filter ===
        "recent" &&
        !state.recent.includes(
          game.id
        )
      ) {
        return false;
      }


      if (
        state.filter ===
        "favorites" &&
        !state.favorites.includes(
          game.id
        )
      ) {
        return false;
      }


      if (
        state.category &&
        game.category !==
        state.category
      ) {
        return false;
      }


      if (
        query &&
        !`${game.name} ${game.category}`
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }


      return true;

    }
  );

}


function renderGames() {

  const grid =
    $("#game-grid");

  const games =
    getFilteredGames();


  $("#game-count").textContent =
    `${games.length} game${
      games.length === 1
        ? ""
        : "s"
    } in your library`;


  if (!games.length) {

    grid.innerHTML = `

      <div
        style="
          grid-column: 1 / -1;
          padding: 60px 20px;
          text-align: center;
          color: var(--muted);
        "
      >

        <div
          style="font-size: 38px;"
        >
          🌱
        </div>

        <h3
          style="color: var(--text);"
        >
          Nothing here yet
        </h3>

        <p>
          Try another search or category.
        </p>

      </div>

    `;

    return;

  }


  grid.innerHTML =
    games
      .map(
        (game, index) => {

          const favorite =
            state.favorites.includes(
              game.id
            );


          const coverMarkup = game.icon.startsWith("/icons/")
            ? `<img src="${escapeHTML(game.icon)}" alt="${escapeHTML(game.name)}" loading="lazy">`
            : `<span class="game-cover-emoji">${escapeHTML(game.icon || "🎮")}</span>`;

          return `

            <article
              class="game-card"
              data-game="${escapeHTML(game.id)}"
            >

              <div
                class="
                  game-cover
                  cover-${index % 4}
                "
              >
                ${coverMarkup}
              </div>


              <button
                class="
                  favorite-button
                  ${
                    favorite
                      ? "active"
                      : ""
                  }
                "
                data-favorite="${escapeHTML(game.id)}"
                aria-label="Favorite"
              >
                ${
                  favorite
                    ? "♥"
                    : "♡"
                }
              </button>


              <div class="game-info">

                <div class="game-name">
                  ${escapeHTML(game.name)}
                </div>

                <div class="game-category">
                  ${escapeHTML(game.category)}
                </div>

              </div>

            </article>

          `;

        }
      )
      .join("");


  $$(".game-card").forEach(
    card => {

      card.addEventListener(
        "click",
        event => {

          if (
            event.target.closest(
              "[data-favorite]"
            )
          ) {
            return;
          }

          launchGame(
            card.dataset.game
          );

        }
      );

    }
  );


  $$("[data-favorite]").forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          const id =
            button.dataset.favorite;


          if (
            state.favorites.includes(
              id
            )
          ) {

            state.favorites =
              state.favorites.filter(
                item =>
                  item !== id
              );

          } else {

            state.favorites = [
              id,
              ...state.favorites
            ];

          }


          saveState();

          renderGames();

        }
      );

    }
  );

}


/* =========================================================
   GAME LAUNCHER
   ========================================================= */

function launchGame(id) {

  const game =
    GAMES.find(
      item =>
        item.id === id
    );

  if (!game) {
    return;
  }


  state.recent = [
    id,
    ...state.recent.filter(
      item =>
        item !== id
    )
  ].slice(0, 12);


  saveState();


  /*
    IMPORTANT:

    This is centralized so we only need to change the
    launch path here after confirming the exact structure
    of the port in your fork.

    Example:

      games/<game-id>/

    If the actual port lives elsewhere, change this line.
  */

  const launchPath =
    `lessons/${game.id}/`;


  showToast(
    `Opening ${game.name}...`
  );


  setTimeout(
    () => {

      window.location.href =
        launchPath;

    },
    250
  );

}


/* =========================================================
   DESKTOP / START MENU
   ========================================================= */

$$("[data-open]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        openApp(
          button.dataset.open
        );

      }
    );

  }
);


$("#start-button")
  .addEventListener(
    "click",
    event => {

      event.stopPropagation();

      $("#start-menu")
        .classList
        .toggle("hidden");

    }
  );


document.addEventListener(
  "click",
  event => {

    if (
      !event.target.closest(
        "#start-menu"
      ) &&
      !event.target.closest(
        "#start-button"
      )
    ) {

      $("#start-menu")
        .classList
        .add("hidden");

    }

  }
);


/* =========================================================
   WINDOW BUTTONS
   ========================================================= */

$$("[data-close]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        closeApp(
          button.dataset.close
        );

      }
    );

  }
);


$$("[data-minimize]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        minimizeApp(
          button.dataset.minimize
        );

      }
    );

  }
);


$$("[data-maximize]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        maximizeApp(
          button.dataset.maximize
        );

      }
    );

  }
);


$$(".window").forEach(
  windowElement => {

    windowElement.addEventListener(
      "pointerdown",
      () => {

        focusWindow(
          windowElement.dataset.app
        );

      }
    );

  }
);


/* =========================================================
   GAME FILTERS
   ========================================================= */

$$("[data-filter]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        state.filter =
          button.dataset.filter;

        state.category =
          null;


        $$(".sidebar-item")
          .forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        renderGames();

      }
    );

  }
);


$$("[data-category]").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        state.category =
          button.dataset.category;

        state.filter =
          "all";


        $$(".sidebar-item")
          .forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        renderGames();

      }
    );

  }
);


/* =========================================================
   GAME SEARCH
   ========================================================= */

$("#game-search-input")
  .addEventListener(
    "input",
    event => {

      state.search =
        event.target.value;

      renderGames();

    }
  );


/* =========================================================
   START SEARCH
   ========================================================= */

$("#start-search-input")
  .addEventListener(
    "input",
    event => {

      const query =
        event.target.value
          .trim()
          .toLowerCase();


      if (!query) {
        return;
      }


      const game =
        GAMES.find(
          item =>
            item.name
              .toLowerCase()
              .includes(query)
        );


      if (!game) {
        return;
      }


      openApp(
        "games"
      );


      $("#game-search-input")
        .value =
        event.target.value;


      state.search =
        event.target.value;


      renderGames();

    }
  );


/* =========================================================
   BROWSER
   ========================================================= */

function updateBrowserStatus(message) {

  const status = $("#browser-status");

  if (status) {
    status.textContent = message;
  }

}

function getScramjetBackendUrl() {

  const value =
    localStorage.getItem(
      "evermint-scramjet-backend"
    ) || DEFAULT_SCRAMJET_WSS;

  return value.trim() || DEFAULT_SCRAMJET_WSS;

}

function getScramjetEnabled() {

  return localStorage.getItem(
    "evermint-scramjet-enabled"
  ) !== "false";

}

function loadScript(src) {

  return new Promise((resolve, reject) => {

    const existing = document.querySelector(`script[src="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }

      existing.addEventListener(
        "load",
        () => {
          existing.dataset.loaded = "true";
          resolve();
        },
        { once: true }
      );

      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true }
      );

      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);

  });

}

async function ensureScramjetRuntime() {

  if (window.$scramjet && window.$scramjetController) {
    return true;
  }

  try {
    await loadScript("/vendor/scramjet/scramjet.all.js");

    if (!window.$scramjet) {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error("Scramjet runtime did not initialize.")), 10000);
        const check = () => {
          if (window.$scramjet) {
            clearTimeout(timeout);
            resolve();
            return;
          }

          requestAnimationFrame(check);
        };

        check();
      });
    }

    await loadScript("/vendor/scramjet/controller.api.js");
  } catch (error) {
    console.error("Scramjet runtime failed to load", error);
    return false;
  }

  return Boolean(
    window.$scramjet && window.$scramjetController
  );

}

async function initializeScramjetController() {

  const backendUrl = getScramjetBackendUrl();

  if (!getScramjetEnabled() || !backendUrl) {
    return false;
  }

  try {
    if (!await ensureScramjetRuntime()) {
      return false;
    }

    if (!("serviceWorker" in navigator)) {
      return false;
    }

    if (!state.scramjetController) {
      await navigator.serviceWorker.register(
        "/vendor/scramjet/controller.sw.js",
        { scope: "/" }
      );

      await navigator.serviceWorker.ready;

      const transport = window.LibcurlTransport
        ? new window.LibcurlTransport.LibcurlClient({ wisp: backendUrl })
        : null;

      state.scramjetController = new window.$scramjetController.Controller({
        serviceworker: navigator.serviceWorker.controller,
        transport,
        config: {
          prefix: "/~/sj/",
          scramjetPath: "/vendor/scramjet/scramjet.all.js",
          injectPath: "/vendor/scramjet/controller.inject.js",
          wasmPath: "/vendor/scramjet/scramjet.wasm.wasm",
          virtualWasmPath: "scramjet.wasm.js"
        },
        scramjetConfig: {
          flags: {
            allowFailedIntercepts: true
          }
        }
      });

      await state.scramjetController.wait();
    }

    const frame = $("#browser-frame");

    if (!state.scramjetFrame && frame) {
      state.scramjetFrame = state.scramjetController.createFrame(frame);
    }

    if (state.scramjetFrame) {
      updateBrowserStatus("Scramjet proxy connected.");
      return true;
    }

  } catch (error) {
    console.error("Scramjet controller setup failed", error);
    showToast("Scramjet backend could not initialize.");
  }

  return false;

}

function normalizeBrowserUrl(value) {

  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  if (
    /^https?:\/\//i.test(trimmed) ||
    /^about:/i.test(trimmed) ||
    /^data:/i.test(trimmed) ||
    /^blob:/i.test(trimmed) ||
    /^file:\/\//i.test(trimmed)
  ) {
    return trimmed;
  }

  if (/^\d+\.\d+\.\d+\.\d+(?::\d+)?(?:\/.*)?$/i.test(trimmed)) {
    return `http://${trimmed}`;
  }

  if (/^[^\s/]+\.[^\s/]+(?:\/.*)?$/i.test(trimmed)) {
    return `https://${trimmed}`;
  }

  return `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`;

}

function showBrowserHome() {

  const home = $("#browser-home");
  const frame = $("#browser-frame");

  if (home) {
    home.hidden = false;
  }

  if (frame) {
    frame.hidden = true;
    frame.src = "about:blank";
  }

  if (getScramjetEnabled()) {
    updateBrowserStatus("Scramjet proxy ready at wss://xylora.org.");
  } else {
    updateBrowserStatus("Scramjet can be connected here.");
  }

}

async function openBrowserURL(rawUrl) {

  const normalized = normalizeBrowserUrl(rawUrl);

  if (!normalized) {
    showBrowserHome();
    return;
  }

  const home = $("#browser-home");
  const frame = $("#browser-frame");

  if (!frame) {
    return;
  }

  $("#browser-address").value = normalized;

  if (home) {
    home.hidden = true;
  }

  if (state.scramjetFrame && await initializeScramjetController()) {
    frame.hidden = false;
    state.scramjetFrame.go(normalized);
    return;
  }

  frame.hidden = false;
  frame.src = normalized;

}

$("#browser-go")
  .addEventListener(
    "click",
    async () => {

      const address =
        $("#browser-address")
          .value
          .trim();

      if (!address) {
        return;
      }

      await openBrowserURL(address);

    }
  );


$("#browser-address")
  .addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        $("#browser-go").click();

      }

    }
  );


$("#browser-back")
  .addEventListener(
    "click",
    () => {

      const frame = $("#browser-frame");

      if (!frame || frame.hidden) {
        showBrowserHome();
        return;
      }

      if (state.scramjetFrame) {
        state.scramjetFrame.back();
        return;
      }

      try {
        frame.contentWindow.history.back();
      } catch (error) {
        showToast("History access is restricted for that page.");
      }

    }
  );


$("#browser-forward")
  .addEventListener(
    "click",
    () => {

      const frame = $("#browser-frame");

      if (!frame || frame.hidden) {
        showBrowserHome();
        return;
      }

      if (state.scramjetFrame) {
        state.scramjetFrame.forward();
        return;
      }

      try {
        frame.contentWindow.history.forward();
      } catch (error) {
        showToast("History access is restricted for that page.");
      }

    }
  );


$("#browser-reload")
  .addEventListener(
    "click",
    () => {

      const frame = $("#browser-frame");

      if (!frame || frame.hidden) {
        showBrowserHome();
        return;
      }

      if (state.scramjetFrame) {
        state.scramjetFrame.reload();
        return;
      }

      frame.contentWindow.location.reload();

    }
  );


/* =========================================================
   SETTINGS
   ========================================================= */

function applySettings() {

  const accent =
    localStorage.getItem(
      "evermint-accent"
    ) ||
    "#20a464";


  document.documentElement
    .style
    .setProperty(
      "--accent",
      accent
    );


  const wallpaper =
    localStorage.getItem(
      "evermint-wallpaper"
    ) ||
    "mint";


  const desktop =
    $("#desktop");


  desktop.classList.remove(
    "wallpaper-mint",
    "wallpaper-meadow",
    "wallpaper-white"
  );


  desktop.classList.add(
    `wallpaper-${wallpaper}`
  );


  const reducedMotion =
    localStorage.getItem(
      "evermint-reduced-motion"
    ) === "true";


  document.body.classList.toggle(
    "reduce-motion",
    reducedMotion
  );


  $("#accent-color").value =
    accent;


  $("#wallpaper-select").value =
    wallpaper;


  $("#reduced-motion").checked =
    reducedMotion;

  const scramjetEnabled =
    localStorage.getItem(
      "evermint-scramjet-enabled"
    ) !== "false";

  const scramjetBackend =
    localStorage.getItem(
      "evermint-scramjet-backend"
    ) || DEFAULT_SCRAMJET_WSS;

  $("#scramjet-enabled").checked =
    scramjetEnabled;

  $("#scramjet-proxy-url").value =
    scramjetBackend;

}


$("#accent-color")
  .addEventListener(
    "input",
    event => {

      localStorage.setItem(
        "evermint-accent",
        event.target.value
      );

      applySettings();

    }
  );


$("#wallpaper-select")
  .addEventListener(
    "change",
    event => {

      localStorage.setItem(
        "evermint-wallpaper",
        event.target.value
      );

      applySettings();

    }
  );


$("#reduced-motion")
  .addEventListener(
    "change",
    event => {

      localStorage.setItem(
        "evermint-reduced-motion",
        event.target.checked
      );

      applySettings();

    }
  );


$("#scramjet-enabled")
  .addEventListener(
    "change",
    event => {

      localStorage.setItem(
        "evermint-scramjet-enabled",
        event.target.checked
      );

      state.scramjetEnabled = event.target.checked;

      applySettings();

      if (event.target.checked) {
        initializeScramjetController();
      }

    }
  );


$("#scramjet-proxy-url")
  .addEventListener(
    "change",
    event => {

      const nextValue =
        event.target.value.trim() || DEFAULT_SCRAMJET_WSS;

      localStorage.setItem(
        "evermint-scramjet-backend",
        nextValue
      );

      state.scramjetBackend = nextValue;

      applySettings();

      if (state.scramjetEnabled) {
        initializeScramjetController();
      }

    }
  );


$("#reset-settings")
  .addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        "evermint-accent"
      );

      localStorage.removeItem(
        "evermint-wallpaper"
      );

      localStorage.removeItem(
        "evermint-reduced-motion"
      );

      localStorage.setItem(
        "evermint-scramjet-enabled",
        "true"
      );

      localStorage.setItem(
        "evermint-scramjet-backend",
        DEFAULT_SCRAMJET_WSS
      );

      applySettings();

      showToast(
        "Evermint settings reset."
      );

    }
  );


/* =========================================================
   INITIALIZE
   ========================================================= */

renderGames();

applySettings();

updateTaskbar();


/* =========================================================
   BOOT
   ========================================================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        const boot =
          $("#boot-screen");

        boot.classList.add(
          "fade-out"
        );


        setTimeout(
          () => {

            boot.remove();

          },
          400
        );

      },
      1100
    );

  }
);
