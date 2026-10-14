const PALETTE_SIZE = 6; // at least 5 required

const paletteEl = document.getElementById("palette");
const toastEl = document.getElementById("toast");
const generateBtn = document.getElementById("generate-btn");
let toastTimer;

// Random hex colour using Math.random
function randomHex() {
  const value = Math.floor(Math.random() * 0x1000000);
  return "#" + value.toString(16).padStart(6, "0").toUpperCase();
}

// Pick black or white text depending on how light the colour is
function readableTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#111111" : "#ffffff";
}

// Render swatches into the DOM
function renderPalette() {
  paletteEl.innerHTML = "";
  for (let i = 0; i < PALETTE_SIZE; i++) {
    const hex = randomHex();
    const swatch = document.createElement("button");
    swatch.className = "swatch";
    swatch.type = "button";
    swatch.textContent = hex;
    swatch.style.backgroundColor = hex;
    swatch.style.color = readableTextColor(hex);
    swatch.setAttribute("aria-label", "Copy colour " + hex);
    swatch.addEventListener("click", () => copyToClipboard(hex));
    paletteEl.appendChild(swatch);
  }
}

// Copy using the Clipboard API, with a fallback for older browsers
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    showToast("Copied " + text + " to clipboard!");
  } catch (err) {
    showToast("Could not copy. Please copy manually.");
  }
}

// Brief confirmation message
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1600);
}

generateBtn.addEventListener("click", renderPalette);
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    renderPalette();
  }
});

renderPalette();