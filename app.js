let completed = false;

function toggleCompleted(value) {
    completed = value;
}

function goToSection(i) {
    gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        overwrite: true,
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: 'top bottom',
            end: '+=200%',
            onToggle: (self) => self.isActive && completed && goToSection(i),
        });
    });

    ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
    });
    
    // Toggle completed state after some condition, e.g., after a page load
    toggleCompleted(true);
});
