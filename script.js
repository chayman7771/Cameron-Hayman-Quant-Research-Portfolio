// Enable full-page scroll snapping
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".snap-section");

  sections.forEach((section) => {
    section.style.scrollSnapAlign = "start";
    section.style.scrollSnapStop = "always";
    section.style.minHeight = "100vh";
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.justifyContent = "center";
    section.style.padding = "2rem 1rem";
  });

  document.body.style.scrollSnapType = "y mandatory";
  document.documentElement.style.scrollBehavior = "smooth";
});
