let loadingfunc = () => {
  setTimeout(() => {
    document.getElementById("top-conpart2").classList.remove("loading");
  }, 1000);
};

function openMenu() {

  document.getElementById("menu-wrapper").classList.remove("displayNone")
  document.getElementById("menu-container").classList.remove("displayNone")
  document.getElementById("navbar-contact").classList.remove("displayNone")
  setTimeout(() => {
    document.getElementById("menu-container").style.zIndex = 20;
    document.getElementById("menu-wrapper").style.zIndex = 10;
    document.getElementById("menu-wrapper").classList.remove("not-active");
    document.getElementById("menu-container").classList.remove("not-active");
  }, 1);
  setTimeout(() => {
    document.getElementById("inner-content").classList.remove("not-active");
  }, 300);
  setTimeout(() => {
    document.getElementById("menu-links").style.opacity = 1;
    document.getElementById("menu-links").style.transform = "translateY(0)";
  }, 400);
}

function closeMenu() {
  document.getElementById("menu-links").style.opacity = 0;
  document.getElementById("menu-links").style.transform = "translateY(4rem)";

  setTimeout(() => {
    document.getElementById("menu-wrapper").classList.add("not-active");
    document.getElementById("menu-container").classList.add("not-active");
  }, 500);

  setTimeout(() => {
    document.getElementById("menu-wrapper").style.zIndex = 0;
    document.getElementById("inner-content").classList.add("not-active");
  }, 700);
  setTimeout(() => {
    document.getElementById("menu-wrapper").classList.add("displayNone")
    document.getElementById("menu-container").classList.add("displayNone")
    document.getElementById("navbar-contact").classList.add("displayNone")
  }, 1000);
}
