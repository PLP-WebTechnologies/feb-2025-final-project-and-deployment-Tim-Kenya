const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector("nav ul");

mobileNavToggle.addEventListener('click', () => {
    const isExpanded = primaryNavigation.getAttribute('data-visible') === "true" || false;
    primaryNavigation.setAttribute('data-visible', !isExpanded);
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
});
