document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });


    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));



    const themeToggleBtn = document.getElementById('theme-toggle');
    let isDarkMode = false;

    themeToggleBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#121212' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';

    });
});

const themeToggleBtn = document.getElementById('input');
let isDarkMode = themeToggleBtn.checked;

function aplicarTema() {
    document.body.style.backgroundColor = isDarkMode ? '#121212' : '#fff';
    document.body.style.color = isDarkMode ? '#fff' : '#333';
}

themeToggleBtn.addEventListener('change', () => {
    isDarkMode = themeToggleBtn.checked;
    aplicarTema();
});


document.addEventListener('DOMContentLoaded', aplicarTema);


const backToTopBtn = document.getElementById('back-to-top');

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.gif-video');

    videos.forEach((video) => {

        video.play().catch(error => {
            console.error("Autoplay falhou, o navegador bloqueou:", error);
        });


        video.addEventListener('click', () => {
            video.currentTime = 0;
            video.play();
        });


        video.addEventListener('ended', () => {
            video.pause();
        });


        video.addEventListener('dragstart', (e) => e.preventDefault());
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-projeto");
    const openBtn = document.getElementById("open-modal");
    const closeBtn = document.getElementById("close-modal");

    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    [["2", "modal-projeto-2"], ["3", "modal-projeto-3"], ["4", "modal-projeto-4"]].forEach(([id, modalId]) => {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById("open-modal-" + id);
        const closeBtn = document.getElementById("close-modal-" + id);

        openBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});


document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
});
