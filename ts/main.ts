let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header!.classList.add('rolled');
    } else {
        header!.classList.remove('rolled');
    }
    lastScrollTop = scrollTop;
});

const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      setTimeout(() => {
        entry.target.classList.remove('hidden');
      }, 1500)
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

elements.forEach(element => {
  observer.observe(element);
});
