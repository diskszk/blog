document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(
    "a[href^='http']:not([href*='" + window.location.hostname + "'])",
  );
  links.forEach(function (link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
