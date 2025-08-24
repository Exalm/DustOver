particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#000000' },    // Чёрный цвет частиц
    shape: { type: 'circle' },
    opacity: { value: 0.6, random: true },
    size: { value: 16, random: true },
    move: { enable: true, speed: 2, out_mode: 'out' },
    line_linked: { enable: true, distance: 150, color: '#000000', opacity: 0.3, width: 1 }  // Цвет линий
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }},
    modes: { grab: { distance: 140, line_linked: { opacity: 0.4 } }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});
