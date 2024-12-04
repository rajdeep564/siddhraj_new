document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const menuWrapper = document.querySelector('.menu-wrapper');
  const navBackground = document.querySelector('.nav-background');

  // Toggle menu and background on click
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      navBackground.classList.toggle('open'); // Toggle background
  });

  // Close the menu if clicked outside
  document.addEventListener('click', (e) => {
      if (!menuWrapper.contains(e.target)) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
          navBackground.classList.remove('open'); // Hide background
      }
  });

});








document.addEventListener("DOMContentLoaded", function () {
    const commercialRadio = document.getElementById("commercial");
    const residentialRadio = document.getElementById("residential");
    const commercialSection = document.querySelector(".project_info_commercial");
    const residentialSection = document.querySelector(".project_info_residential");

    commercialRadio.addEventListener("change", function () {
        if (commercialRadio.checked) {
            commercialSection.style.display = "flex";
            residentialSection.style.display = "none";
        }
    });

    residentialRadio.addEventListener("change", function () {
        if (residentialRadio.checked) {
            residentialSection.style.display = "flex";
            commercialSection.style.display = "none";
        }
    });
});






