// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Skill bars animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  const skillSection = document.getElementById('skills');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.width = width + '%';
          bar.parentElement.parentElement.classList.add('animate');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(skillSection);
};

// Contact form handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
  
  // Simple validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    alert('Please fill in all fields');
    return;
  }
  
  if (!isValidEmail(data.email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Simulate form submission
  const submitButton = contactForm.querySelector('.btn-primary');
  const originalText = submitButton.textContent;
  
  submitButton.textContent = 'Sending...';
  submitButton.style.opacity = '0.7';
  
  setTimeout(() => {
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
    submitButton.textContent = originalText;
    submitButton.style.opacity = '1';
  }, 2000);
});

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');
  
  if (heroContent && heroImage) {
    heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});

// Fade in animation on scroll
const observeElements = () => {
  const elements = document.querySelectorAll('.project-card, .skill-item, .timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => {
    observer.observe(el);
  });
};

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 20, 25, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 20, 25, 0.95)';
  }
});

// Initialize animations and observers
document.addEventListener('DOMContentLoaded', () => {
  animateSkillBars();
  observeElements();
});

// Typing effect for hero title (optional enhancement)
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
};

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effect to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Preloader (optional)
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});