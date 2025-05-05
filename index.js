function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
      });
  });
} else {
  console.error('Contact form element not found.');
}
  // Smooth scroll (optional for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

  });
  document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
  
    boxes.forEach(box => {
      const percent = parseInt(box.getAttribute("data-percent"));
      const number = box.querySelector(".number");
      const circular = box.querySelector(".circular");
  
      let current = 0;
  
      const interval = setInterval(() => {
        if (current <= percent) {
          number.textContent = `${current}%`;
          circular.style.background = `conic-gradient(yellowgreen ${current * 3.6}deg, #333 ${current * 3.6}deg)`;
          current++;
        } else {
          clearInterval(interval);
        }
      }, 15); // speed of count
    });
  });
  


