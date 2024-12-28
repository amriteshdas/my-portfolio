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


// Project Data
const projects = [
    {
        title: "Recipe Finder App",
        description: "Discover delicious recipes instantly by searching with ingredients you already have!",
        image: "rf.png",
        tags: ["HTML", "CSS", "JavaScript", "Edamam API"]
    },
    {
        title: "Weather App",
        description: "A responsive web application that provides real-time weather updates for any location worldwide.",
        image: "wa.png",
        tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"]
    },
    {
        title: "My Portfolio",
        description: "A personal website showcasing my skills, projects, and achievements in web development",
        image: "pf.png",
        tags: ["HTML", "CSS", "JavaScript"]
    }
];

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
function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

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

// 3D Card Effect
function handle3DCardEffect() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
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
    renderProjects();
    renderSkills();
    handle3DCardEffect();
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

