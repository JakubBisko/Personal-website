const items = document.querySelectorAll('.float-item, .float-item2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
});

items.forEach(item => observer.observe(item));
