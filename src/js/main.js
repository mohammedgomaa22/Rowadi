/* Main JS - Rowadi Coming Soon */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }
});

/* ========== PAGE PRELOADER ========== */
window.addEventListener("load", function () {
  const pre = document.getElementById("preloader");
  if (pre) {
    setTimeout(() => {
      pre.classList.add("hide");
    }, 500);
  }
});
