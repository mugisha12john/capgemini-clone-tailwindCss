const showNav = document.getElementById("showNav");
const navMobile = document.getElementById("nav-mobile");

showNav.addEventListener("click", () => {
  if (navMobile.classList.toggle("hidden")) {
    showNav.innerHTML = `<img src="/images/icons8-menu-30.png" class="w-6" alt="" />`;
  } else {
    showNav.innerHTML = `<img src="/images/icons8-cancel-24.png" class="w-6" alt="" />`;
  }
});
