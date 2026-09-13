window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.photo-gallery');
    const element = document.getElementById('photo-carousel');
    const toggle = document.getElementById('gallery-toggle');
    const position = document.getElementById('gallery-position');
    const slides = Array.from(element.querySelectorAll('.carousel-item'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const carousel = new bootstrap.Carousel(element, {
        interval: false,
        ride: false,
        pause: false,
        touch: true,
        keyboard: true,
        wrap: true
    });
    let playing = !reducedMotion.matches;

    const updateControls = () => {
        toggle.textContent = playing ? 'Pause slideshow' : 'Play slideshow';
        toggle.setAttribute('aria-pressed', String(!playing));
        position.setAttribute('aria-live', playing ? 'off' : 'polite');
    };
    const updatePosition = () => {
        const index = slides.findIndex(slide => slide.classList.contains('active'));
        position.textContent = `${index + 1} / ${slides.length} · ${slides[index].querySelector('img').alt}`;
    };

    toggle.addEventListener('click', () => {
        playing = !playing;
        updateControls();
    });
    reducedMotion.addEventListener('change', () => {
        playing = !reducedMotion.matches;
        updateControls();
    });
    element.addEventListener('slid.bs.carousel', updatePosition);
    setInterval(() => {
        if (playing && !document.hidden && !gallery.matches(':hover') && !gallery.contains(document.activeElement)) {
            carousel.next();
        }
    }, 5000);
    updateControls();
    updatePosition();
});
