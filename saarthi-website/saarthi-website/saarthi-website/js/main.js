// Basic JavaScript for site functionality
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll("a[href^=\"#\"]");
  for (const link of links) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }
});
