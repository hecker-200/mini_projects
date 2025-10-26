const hourhand = document.getElementById('hour');
const minhand = document.getElementById('minute');
const sechand = document.getElementById('second');
const dig = document.getElementById('digital-time');

function updatetime() {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const secDeg = s * 6;
  const minDeg = (m * 6) + (s * 0.1);
  const hourDeg = (h % 12) * 30 + (m * 0.5);

  hourhand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minhand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  sechand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;

  // ✅ Auto AM/PM using built-in format
  dig.textContent = now.toLocaleTimeString('en-US');
}

setInterval(updatetime, 1000);
updatetime();



/* ✅ THEME SWITCHER */
const bgchange = document.getElementById('themeDropdown');
const body = document.body;

bgchange.addEventListener('change', () => {
  const theme = bgchange.value;

  const backgrounds = {
    carbon: 'linear-gradient(145deg, #0D0D0D 0%, #1A1A1A 40%, #2E2E2E 100%)',
    crimson: 'linear-gradient(145deg, #0A0000 0%, #2A0005 40%, #600000 80%, #1A0000 100%)',
    sapphire: 'linear-gradient(145deg, #000819 0%, #001A3A 40%, #002B50 70%, #00335B 100%)',
    onyx: 'linear-gradient(145deg, #000000 0%, #1A0F00 45%, #4A3500 80%, #8C6B1A 100%)',
    obsidian: 'linear-gradient(145deg, #030303 0%, #1B1205 35%, #3C2500 70%, #A67C00 100%)',
    emerald: 'linear-gradient(145deg, #001009 0%, #002414 35%, #00462A 75%, #007047 100%)',
    graphite: 'linear-gradient(145deg, #111111 0%, #1C1C1C 40%, #303030 80%, #4A4A4A 100%)',
    nebula: 'linear-gradient(150deg, #00020F 0%, #1A0033 35%, #2E003E 70%, #4B1B1B 100%)'
  };

  body.style.background = backgrounds[theme] || body.style.background;
});
