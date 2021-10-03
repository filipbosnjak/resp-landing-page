window.addEventListener("load", () => {
  const toggleMenu = (togglerC, navC) => {
    const toggler = document.querySelector(togglerC);
    const nav = document.querySelector(navC);

    if (toggler && nav) {
      toggler.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  };

  toggleMenu(".navToggler", ".menu");

  let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 20,
    slidesPerView: 0,
    freeMode: true,
    watchSlidesProgress: true,
  });
  let galleryTop = new Swiper(".gallery-top", {
    loop: true,

    thumbs: {
      swiper: galleryThumbs,
    },
  });

  let controls = document.querySelectorAll(".img");

  const animate = () => {
    gsap.from(".subtitle", {
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
      y: -20,
    });
    gsap.from(".title", {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      y: -20,
    });
    gsap.from(".description", {
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      y: -20,
    });
    gsap.from(".button", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      x: -60,
    });
  };
  controls.forEach((c) => c.addEventListener("click", animate));
});
