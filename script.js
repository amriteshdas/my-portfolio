// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 15 + 'px';
        cursorFollower.style.top = e.clientY - 15 + 'px';
    }, 100);
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#6C63FF'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6C63FF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Enhanced Typing Animation
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.querySelector(".typing-text").innerHTML = text.substring(0, i+1) + '<span class="typing-cursor">|</span>';

        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function startTextAnimation(i) {
    if (i < textArray.length) {
        typeWriter(textArray[i], 0, function() {
            setTimeout(function() {
                document.querySelector(".typing-text").innerHTML = '';
                startTextAnimation(i + 1);
            }, 1000);
        });
    } else {
        setTimeout(function() {
            startTextAnimation(0);
        }, 1000);
    }
}

const textArray = [
    "I'm a Photographer",
    "I'm a Web Developer",
    "I'm a Problem Solver",
    "I'm a Tech Enthusiast"
];

// Start the typing animation
startTextAnimation(0);


// Project
const track = document.querySelector('.carousel-track');
track.innerHTML += track.innerHTML; // clone the cards to allow smooth infinite scroll

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");
  // Duplicate for seamless infinite scroll
  track.innerHTML += track.innerHTML;

  const wrapper = track.parentElement;
  let isDragging = false,
      startX = 0,
      scrollStart = 0;

  // Auto scroll settings
  let autoScroll = true,
      autoSpeed = 0.5; // pixels per frame

  function step() {
    if (autoScroll && !isDragging) {
      wrapper.scrollLeft += autoSpeed;
      // Reset scroll position for seamless loop
      if (wrapper.scrollLeft >= track.scrollWidth / 2) {
        wrapper.scrollLeft = 0;
      }
    }
    requestAnimationFrame(step);
  }
  step();

  // Mouse drag
  wrapper.addEventListener("mousedown", e => {
    isDragging = true;
    autoScroll = false;
    startX = e.pageX - wrapper.offsetLeft;
    scrollStart = wrapper.scrollLeft;
  });

  wrapper.addEventListener("mouseup", () => {
    isDragging = false;
    autoScroll = true;
  });

  wrapper.addEventListener("mouseleave", () => {
    isDragging = false;
    autoScroll = true;
  });

  wrapper.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (startX - x);
    wrapper.scrollLeft = scrollStart + walk;
  });

  // Mobile touch support
  let touchStartX = 0,
      touchStartScroll = 0;

  wrapper.addEventListener("touchstart", e => {
    isDragging = true;
    autoScroll = false;
    touchStartX = e.touches[0].pageX;
    touchStartScroll = wrapper.scrollLeft;
  });

  wrapper.addEventListener("touchend", () => {
    isDragging = false;
    autoScroll = true;
  });

  wrapper.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = touchStartX - x;
    wrapper.scrollLeft = touchStartScroll + walk;
  });
});




// Skills Data
const skills = [
    { name: "HTML5", icon: "fa-html5" },
    { name: "CSS3", icon: "fa-css3-alt" },
    { name: "JavaScript", icon: "fa-js" },
    { name: "C", icon: "fa-solid fa-c" },
    { name: "Python", icon: "fa-python" },
    { name: "Git", icon: "fa-git-alt" }
    
];

// Render Projects


// Render Skills
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <i class="fab ${skill.icon} skill-icon"></i>
            <h3>${skill.name}</h3>
        </div>
    `).join('');
}

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}



// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    startTextAnimation(0);
    
    function handleButtonHover() {
        const ctaButton = document.querySelector('.cta-button');
        const arrow = ctaButton.querySelector('.arrow');
        
        ctaButton.addEventListener('mouseenter', () => {
            arrow.style.transform = 'translateX(3px)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            arrow.style.transform = 'translateX(0)';
        });
    }

    // Call the function to initialize the button hover effect
    handleButtonHover();
});

// Scroll Event Listeners
window.addEventListener('scroll', reveal);
reveal();

