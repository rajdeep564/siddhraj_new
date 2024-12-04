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
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDfxJAYl5ch5I2fiO8wZqgJeT2c2gESoE8EH86Nuhpv--qmBKW2s-XZDeeCIT-mYDI/exec'; // Replace with your Google Apps Script URL
const contactForm = document.getElementById('contactForm');
const spinner = document.createElement('div'); // Spinner
const successOverlay = document.createElement('div'); // Success popup

// Spinner Styling
spinner.style.display = 'none';
spinner.style.position = 'fixed';
spinner.style.top = '50%';
spinner.style.left = '50%';
spinner.style.transform = 'translate(-50%, -50%)';
spinner.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
document.body.appendChild(spinner);

// Success Popup Styling
successOverlay.style.display = 'none';
successOverlay.style.position = 'fixed';
successOverlay.style.top = '50%';
successOverlay.style.left = '50%';
successOverlay.style.transform = 'translate(-50%, -50%)';
successOverlay.style.padding = '20px';
successOverlay.style.backgroundColor = '#4CAF50';
successOverlay.style.color = 'white';
successOverlay.style.textAlign = 'center';
successOverlay.style.borderRadius = '8px';
successOverlay.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
successOverlay.innerHTML = `
  <h4>Success!</h4>
  <p>Your message has been submitted successfully.</p>
  <button id="closeSuccessBtn" style="padding: 10px 15px; background: white; color: #4CAF50; border: none; border-radius: 4px; cursor: pointer;">Close</button>
`;
document.body.appendChild(successOverlay);

// Form Submission Handling
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Collect Form Data
  const formData = new FormData(contactForm);

  // Show Spinner
  spinner.style.display = 'block';

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      spinner.style.display = 'none'; // Hide spinner
      successOverlay.style.display = 'block'; // Show success popup
      contactForm.reset(); // Reset the form

      console.log('Form successfully submitted.', response);
    })
    .catch(error => {
      spinner.style.display = 'none'; // Hide spinner
      console.error('Error during form submission:', error.message);
    });
});

// Close Success Popup
successOverlay.addEventListener('click', (e) => {
  if (e.target.id === 'closeSuccessBtn') {
    successOverlay.style.display = 'none';
  }
});
