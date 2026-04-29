const themeToggle = document.getElementById("input");
const body = document.body;

const setTheme = (mode) => {
  body.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
};

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
setTheme(initialTheme);

if (themeToggle) {
  themeToggle.checked = initialTheme === "dark";
  themeToggle.addEventListener("change", () => {
    setTheme(themeToggle.checked ? "dark" : "light");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));

  document.querySelectorAll(".stagger").forEach((group) => {
    group.querySelectorAll(".stagger-item").forEach((item, index) => {
      item.style.setProperty("--delay", `${index * 70}ms`);
    });
  });
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuOverlay = document.getElementById("menu-overlay");

if (menuToggle && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    if (menuOverlay) menuOverlay.classList.remove("active");
  };

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    if (menuOverlay) menuOverlay.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalMap = [
    { modalId: "modal-projeto", openId: "open-modal", closeId: "close-modal" },
    { modalId: "modal-projeto-2", openId: "open-modal-2", closeId: "close-modal-2" },
    { modalId: "modal-projeto-3", openId: "open-modal-3", closeId: "close-modal-3" },
    { modalId: "modal-projeto-4", openId: "open-modal-4", closeId: "close-modal-4" },
  ];

modalMap.forEach(({ modalId, openId, closeId }) => {
  const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openId);
    const closeBtn = document.getElementById(closeId);

    if (!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("game-start");
  const stopBtn = document.getElementById("game-stop");
  const resetBtn = document.getElementById("game-reset");
  const scoreEl = document.getElementById("game-score");
  const streakEl = document.getElementById("game-streak");
  const bestEl = document.getElementById("game-best");
  const messageEl = document.getElementById("game-message");
  const indicator = document.getElementById("game-indicator");
  const target = document.getElementById("game-target");
  const track = document.querySelector(".game-track");

  if (!startBtn || !stopBtn || !resetBtn || !scoreEl || !streakEl || !bestEl || !messageEl || !indicator || !target || !track) {
    return;
  }

  let running = false;
  let rafId = 0;
  let pos = 0.1;
  let dir = 1;
  let lastTime = 0;
  let score = 0;
  let streak = 0;
  let targetLeft = 0.3;
  let targetWidth = 0.18;
  const bestKey = "pulseSyncBest";
  const storedBest = Number(localStorage.getItem(bestKey)) || 0;

  bestEl.textContent = storedBest.toString();

  const setTarget = () => {
    targetWidth = 0.14 + Math.random() * 0.12;
    targetLeft = Math.random() * (1 - targetWidth);
    target.style.width = `${targetWidth * 100}%`;
    target.style.left = `${targetLeft * 100}%`;
  };

  const updateIndicator = () => {
    const trackWidth = track.clientWidth;
    const indicatorWidth = indicator.offsetWidth;
    const maxLeft = Math.max(trackWidth - indicatorWidth, 0);
    const leftPx = pos * maxLeft;
    indicator.style.left = `${leftPx}px`;
  };

  const animate = (time) => {
    if (!running) return;
    if (!lastTime) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;
    const speed = 0.0012;
    pos += dir * speed * delta;
    if (pos >= 1) {
      pos = 1;
      dir = -1;
    }
    if (pos <= 0) {
      pos = 0;
      dir = 1;
    }
    updateIndicator();
    rafId = requestAnimationFrame(animate);
  };

  const setMessage = (text, isSuccess) => {
    messageEl.textContent = text;
    messageEl.style.color = isSuccess ? "var(--accent)" : "var(--text)";
  };

  startBtn.addEventListener("click", () => {
    if (running) return;
    running = true;
    stopBtn.disabled = false;
    startBtn.disabled = true;
    setMessage("Valendo! Pare no alvo.", true);
    lastTime = 0;
    rafId = requestAnimationFrame(animate);
  });

  stopBtn.addEventListener("click", () => {
    if (!running) return;
    running = false;
    cancelAnimationFrame(rafId);
    stopBtn.disabled = true;
    startBtn.disabled = false;

    const trackWidth = track.clientWidth;
    const indicatorWidth = indicator.offsetWidth;
    const indicatorLeft = pos * Math.max(trackWidth - indicatorWidth, 0);
    const indicatorCenter = (indicatorLeft + indicatorWidth / 2) / trackWidth;
    const hit = indicatorCenter >= targetLeft && indicatorCenter <= targetLeft + targetWidth;

    if (hit) {
      streak += 1;
      score += 10 + streak * 2;
      setMessage("Boa! Acertou em cheio.", true);
      setTarget();
    } else {
      streak = 0;
      score = Math.max(score - 5, 0);
      setMessage("Quase! Tente de novo.", false);
    }

    scoreEl.textContent = score.toString();
    streakEl.textContent = streak.toString();

    const bestScore = Number(bestEl.textContent) || 0;
    if (score > bestScore) {
      bestEl.textContent = score.toString();
      localStorage.setItem(bestKey, score.toString());
    }
  });

  resetBtn.addEventListener("click", () => {
    running = false;
    cancelAnimationFrame(rafId);
    pos = 0.1;
    dir = 1;
    score = 0;
    streak = 0;
    scoreEl.textContent = "0";
    streakEl.textContent = "0";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    setTarget();
    updateIndicator();
    setMessage("Pronto para testar seus reflexos?", false);
  });

  window.addEventListener("resize", updateIndicator);
  setTarget();
  updateIndicator();
});
