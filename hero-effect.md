<!--------- Osmo [https://osmo.supply/] --------->
<section class="willem-header is--loading is--hidden">
  <div class="willem-loader">
    <div class="willem__h1">
      <div class="willem__h1-start">
        <span class="willem__letter">W</span>
        <span class="willem__letter">i</span>
        <span class="willem__letter">l</span>
      </div>
      <div class="willem-loader__box">
        <div class="willem-loader__box-inner">
          <div class="willem__growing-image">
            <div class="willem__growing-image-wrap">
              <img class="willem__cover-image-extra is--1" src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724bc_minimalist-architecture-2.avif" loading="lazy" alt="">
              <img class="willem__cover-image-extra is--2" src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724cf_minimalist-architecture-4.avif" loading="lazy" alt="">
              <img class="willem__cover-image-extra is--3" src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724c5_minimalist-architecture-3.avif" loading="lazy" alt="">
              <img class="willem__cover-image" src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724b0_minimalist-architecture-1.avif" loading="lazy" alt=""></div>
          </div>
        </div>
      </div>
      <div class="willem__h1-end">
        <span class="willem__letter">l</span>
        <span class="willem__letter">e</span>
        <span class="willem__letter">m</span></div>
    </div>
  </div>
  <div class="willem-header__content">
    <div class="willem-header__top">
      <nav class="willen-nav">
        <div class="willem-nav__start">
          <a href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=willem-loading-animation" target="_blank" class="willem-nav__link">Osmo ©</a>
        </div>
        <div class="willem-nav__end">
          <div class="willem-nav__links">
            <a href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=willem-loading-animation" target="_blank" class="willem-nav__link">Projects,</a>
            <a href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=willem-loading-animation" target="_blank" class="willem-nav__link">Services,</a>
            <a href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=willem-loading-animation" target="_blank" class="willem-nav__link">Blog (13)</a>
          </div>
          <div class="willem-nav__cta">
            <a href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=willem-loading-animation" target="_blank" class="willem-nav__link">Get in touch</a>
          </div>
        </div>
      </nav>
    </div>
    <div class="willem-header__bottom">
      <div class="willem__h1">
        <span class="willem__letter-white">W</span>
        <span class="willem__letter-white">i</span>
        <span class="willem__letter-white">l</span>
        <span class="willem__letter-white">l</span>
        <span class="willem__letter-white">e</span>
        <span class="willem__letter-white">m </span>
        <span class="willem__letter-white is--space">©</span>
      </div>
      <p class="osmo-credits__p">Resource by <a href="https://www.osmo.supply?utm_source=codepen&utm_medium=pen&utm_campaign=willem-loading-animation" target="_blank" class="osmo-credits__p-a">Osmo</a>
  </p>
    </div>
  </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>

CSS

/* ------- Osmo [https://osmo.supply/] ------- */
/* Osmo UI: https://slater.app/10324/23333.css */

body {
  background-color: #f4f4f4;
  font-family: PP Neue Montreal, Arial, sans-serif;
  color: #201d1d;
  font-weight: 400;
  margin: 0;
  padding: 0;
  overscroll-behavior: none;
  min-height: 100%;
  cursor: url("https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b239d7aeb290a31ac5_cursor-default%402x.svg")
      2 0,
    auto;
}

a,
button {
  cursor: url("https://cdn.prod.website-files.com/6708f85ff3d3cba6aff436fb/671251b212e6b71494aa67ff_cursor-pointer%402x.svg")
      12 0,
    pointer;
}

/* Disable Scroll on Loading */
main:has(.willem-header.is--loading) {
  height: 100dvh;
}

.willem-header {
  color: #f4f4f4;
  position: relative;
  overflow: hidden;
}

/* Loading: Hidden */
.willem-header.is--loading.is--hidden {
  display: none;
}

.willem-loader {
  color: #201d1d;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}

.willem__h1 {
  white-space: nowrap;
  justify-content: center;
  font-size: 12.5em;
  font-weight: 500;
  line-height: .75;
  display: flex;
  position: relative;
}

.willem__h1-start {
  justify-content: flex-end;
  width: 1.5256em;
  display: flex;
  overflow: hidden;
}

.willem__h1-end {
  justify-content: flex-start;
  width: 1.525em;
  display: flex;
  overflow: hidden;
}

.willem__letter {
  display: block;
  position: relative;
}

.willem__letter-white.is--space {
  margin-left: .25em;
}

.willem-loader__box {
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 0;
  display: flex;
  position: relative;
}

.willem-loader__box-inner {
  justify-content: center;
  align-items: center;
  min-width: 1em;
  height: 95%;
  display: flex;
  position: relative;
}

.willem__growing-image {
  justify-content: center;
  align-items: center;
  width: 0%;
  height: 100%;
  display: flex;
  position: absolute;
  overflow: hidden;
}

.willem__growing-image-wrap {
  width: 100%;
  min-width: 1em;
  height: 100%;
  position: absolute;
}

.willem__cover-image {
  pointer-events: none;
  object-fit: cover;
  -webkit-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.willem__cover-image-extra {
  pointer-events: none;
  object-fit: cover;
  -webkit-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.willem__cover-image-extra.is--1 {
  z-index: 3;
}

.willem__cover-image-extra.is--2 {
  z-index: 2;
}

.willem__cover-image-extra.is--3 {
  z-index: 1;
}

.willem-header__content {
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100dvh;
  padding: 3em;
  display: flex;
  position: relative;
}

.willem-header__top {
  width: 100%;
  position: relative;
}

.willem-header__bottom {
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
}

.willen-nav {
  display: flex;
  position: relative;
  overflow: hidden;
}

.willem-nav__start {
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  display: flex;
}

.willem-nav__end {
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  display: flex;
}

.willem-nav__cta {
  display: flex;
}

.willem-nav__links {
  grid-column-gap: .5em;
  grid-row-gap: .5em;
  display: flex;
}

.willem-nav__link {
  color: inherit;
  font-size: 1.3125em;
  line-height: 1.3;
  text-decoration: none;
  position: relative;
}

.willem__letter-white {
  display: block;
  position: relative;
}

@media screen and (max-width: 991px) {
  .willem__h1 {
    font-size: 9em;
  }

  .willem-nav__links {
    grid-column-gap: 0em;
    grid-row-gap: 0em;
    flex-flow: column;
  }
}

@media screen and (max-width: 767px) {
  .willem__h1 {
    font-size: 5.5em;
  }

  .willem-nav__start {
    width: 65%;
  }

  .willem-nav__end {
    grid-column-gap: 1.5em;
    grid-row-gap: 1.5em;
    flex-flow: column;
    width: 45%;
  }
}

.osmo-credits__p {
  pointer-events: auto;
  text-align: center;
  margin: 0;
  font-family: PP Neue Montreal, Arial, sans-serif;
  font-size: 1.125em;
  font-weight: 500;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.6);
}

.osmo-credits__p-a {
  color: #f4f4f4;
}

@media screen and (max-width: 991px) {
  .osmo-credits__p {
    display: none;
  }
}

@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://cdn.prod.website-files.com/6819ed8312518f61b84824df/6819ed8312518f61b84825ba_PPNeueMontreal-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

JS

// ------- Osmo [https://osmo.supply/] ------- //

function initWillemLoadingAnimation() {

  const container = document.querySelector(".willem-header");
  const loadingLetter = container.querySelectorAll(".willem__letter");
  const box = container.querySelectorAll(".willem-loader__box");
  const growingImage = container.querySelectorAll(".willem__growing-image");
  const headingStart = container.querySelectorAll(".willem__h1-start");
  const headingEnd = container.querySelectorAll(".willem__h1-end");
  const coverImageExtra = container.querySelectorAll(".willem__cover-image-extra");
  const headerLetter = container.querySelectorAll(".willem__letter-white");
  const navLinks = container.querySelectorAll(".willen-nav a, .osmo-credits__p");
  
  
  /* GSAP Timeline */
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
    onStart: () => {
      container.classList.remove('is--hidden');
    }
  });
  
  /* Start of Timeline */
  if (loadingLetter) {
    tl.from(loadingLetter, {
      yPercent: 100,
      stagger: 0.025,
      duration: 1.25
    });
  }
  
  if (box.length) {
    tl.fromTo(box, {
      width: "0em",
    },{
      width: "1em",
      duration: 1.25
    }, "< 1.25");
  }

  if (box.length) {
    tl.fromTo(growingImage, {
      width: "0%",
    },{
      width: "100%",
      duration: 1.25
    }, "<");
  }
  
  if (headingStart.length) {
    tl.fromTo(headingStart, {
      x: "0em",
    },{
      x: "-0.05em",
      duration: 1.25
    }, "<");
  }
  
  if (headingEnd.length) {
    tl.fromTo(headingEnd, {
      x: "0em",
    },{
      x: "0.05em",
      duration: 1.25
    }, "<");
  }

  if (coverImageExtra.length) {
    tl.fromTo(coverImageExtra, {
      opacity: 1,
    },{
      opacity: 0,
      duration: 0.05,
      ease: "none",
      stagger: 0.5
    }, "-=0.05");
  }
    
  if (growingImage.length) {
    tl.to(growingImage, {
      width: "100vw",
      height: "100dvh",
      duration: 2
    }, "< 1.25");
  }
  
  if (box.length) {
    tl.to(box, {
      width: "110vw",
      duration: 2
    }, "<");
  }
  
  if (headerLetter.length) {
    tl.from(headerLetter, {
      yPercent: 100,
      duration: 1.25,
      ease: "expo.out",
      stagger: 0.025
    }, "< 1.2");
  }

  if (navLinks.length) {
    tl.from(navLinks, {
      yPercent: 100,
      duration: 1.25,
      ease: "expo.out",
      stagger: 0.1
    }, "<");
  }
}

// Initialize Willem Loading Animation
document.addEventListener('DOMContentLoaded', () => {
  initWillemLoadingAnimation();
});