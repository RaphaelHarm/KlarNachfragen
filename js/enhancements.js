(() => {
  const skipLink = document.querySelector(".skip-link");
  const href = skipLink?.getAttribute("href") || "";
  if (!skipLink || !href.startsWith("#")) {
    return;
  }

  const target = document.getElementById(href.slice(1));
  if (!(target instanceof HTMLElement)) {
    return;
  }

  skipLink.addEventListener("click", () => {
    window.requestAnimationFrame(() => {
      target.focus({ preventScroll: true });
    });
  });
})();

(() => {
  const form = document.getElementById("portal-login-form");
  const status = document.getElementById("portal-login-status");
  if (!(form instanceof HTMLFormElement) || !(status instanceof HTMLElement)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent =
      "Diese Vorschau sendet keine Daten an einen Server. Verbinden Sie das Formular mit Ihrem Anmeldedienst, um die Anmeldung freizuschalten.";
  });
})();

(() => {
  const form = document.getElementById("portal-register-form");
  const status = document.getElementById("portal-register-status");
  if (!(form instanceof HTMLFormElement) || !(status instanceof HTMLElement)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent =
      "Diese Vorschau sendet keine Registrierungsdaten an einen Server. Verbinden Sie das Formular mit Ihrem Onboarding- oder Identity-Dienst.";
  });
})();

(() => {
  if (window.location.hash !== "#registrierung") {
    return;
  }
  const target = document.getElementById("registrierung");
  if (!(target instanceof HTMLElement)) {
    return;
  }
  window.requestAnimationFrame(() => {
    target.focus({ preventScroll: false });
  });
})();

(() => {
  const banner = document.querySelector(".cookie-banner");
  if (!(banner instanceof HTMLElement)) {
    return;
  }

  const storageKey = "klarnachfragen-cookie-mock";

  const hideBanner = () => {
    banner.hidden = true;
    document.body.classList.remove("has-cookie-banner-mock");
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      /* sessionStorage nicht verfügbar */
    }
  };

  try {
    if (sessionStorage.getItem(storageKey) === "1") {
      hideBanner();
      return;
    }
  } catch {
    /* sessionStorage nicht verfügbar */
  }

  banner.querySelectorAll(".cookie-banner__btn").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }
    button.addEventListener("click", hideBanner);
  });
})();
