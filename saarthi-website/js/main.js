document.addEventListener('DOMContentLoaded', function() {
  // Voice wave animation control
  const voiceWave = document.querySelector('.voice-wave');
  if (voiceWave) {
    setTimeout(() => {
      voiceWave.classList.add('active');
    }, 1000);
  }
  
  // Number counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const targetValue = parseInt(element.getAttribute('data-value') || element.textContent);
        
        animateCounter(element, 0, targetValue, 2000);
        observer.unobserve(element);
      }
    });
  }, observerOptions);
  
  statNumbers.forEach(number => {
    observer.observe(number);
  });
  
  function animateCounter(element, start, end, duration) {
    let startTime = null;
    const suffix = element.getAttribute('data-suffix') || '';
    
    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + suffix;
      
      if (progress < 1) {
        window.requestAnimationFrame(animation);
      }
    }
    
    window.requestAnimationFrame(animation);
  }
  
  // Cake layer interactions
  const cakeLayers = document.querySelectorAll('.cake-layer');
  
  cakeLayers.forEach(layer => {
    layer.addEventListener('click', function() {
      // Simple animation on click
      this.classList.add('pulse');
      setTimeout(() => {
        this.classList.remove('pulse');
      }, 500);
    });
  });
  
  // Tab switching functionality (for pricing page)
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Hide all tabs
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Remove active class from buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Show selected tab
      if (tabId && document.getElementById(tabId)) {
        document.getElementById(tabId).classList.add('active');
        this.classList.add('active');
      }
    });
  });
  
  // Voice AI demo effect
  const demoButton = document.querySelector('.demo-voice-ai');
  if (demoButton) {
    demoButton.addEventListener('click', function() {
      const wave = document.querySelector('.voice-wave');
      if (wave) {
        wave.classList.toggle('speaking');
      }
      
      if (wave && wave.classList.contains('speaking')) {
        this.textContent = 'Stop Demo';
      } else {
        this.textContent = 'Demo Voice AI';
      }
    });
  }
  
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('nav a, .scroll-link');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Chatbot toggle
  const chatWidget = document.querySelector('.chat-widget');
  if (chatWidget) {
    chatWidget.addEventListener('click', function() {
      alert('AI Assistant coming soon!');
    });
  }
});

// Add CSS class when elements come into view
const fadeElements = document.querySelectorAll('.fade-in');
if (fadeElements.length > 0) {
  const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  fadeElements.forEach(element => {
    appearOnScroll.observe(element);
  });
}
