/**
 * GitHub Pages (Project Sites): Ohne Schrägstrich am Ende von /repo-name
 * werden relative Pfade wie css/styles.css zu /css/styles.css aufgelöst.
 * Kurze Weiterleitung auf /repo-name/ behebt das für Styles und Skripte.
 */
(function () {
  const host = window.location.hostname;
  if (!host.endsWith(".github.io")) {
    return;
  }

  const path = window.location.pathname;
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 1 && !path.endsWith("/") && !/\.[a-z0-9]+$/i.test(segments[0])) {
    window.location.replace(
      `${window.location.origin}/${segments[0]}/${window.location.search}${window.location.hash}`
    );
  }
})();
