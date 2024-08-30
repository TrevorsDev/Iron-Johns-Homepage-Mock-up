document.addEventListener("DOMContentLoaded", function() {
  let lastScrollTop = 0;
  const logo = document.querySelector('.header-image');

  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      logo.style.height = '50px';
    } else {
      // Scrolling up
      logo.style.height = '130px';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

console.log("Script loaded successfully!");
