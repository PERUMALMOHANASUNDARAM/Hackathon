document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const formattedDate = now.toLocaleDateString('en-US', options);
      document.getElementById('current-date').textContent = formattedDate;
    }
  
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
  
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });