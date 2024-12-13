let loadingfunc = () => {
  setTimeout(() => {
    document.getElementById("top-content3").classList.remove("loading");
  }, 1000);
};

function openMenu() {
  document.getElementById("menu-container").style.zIndex = 20;
  document.getElementById("menu-wrapper").style.zIndex = 10;
  document.getElementById("menu-wrapper").classList.remove("not-active");
  document.getElementById("menu-container").classList.remove("not-active");
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
    document.getElementById("menu-container").style.zIndex = 0;
    document.getElementById("inner-content").classList.remove("not-active");

  }, 600);
  setTimeout(() => {
    document.getElementById("menu-wrapper").style.zIndex = 0;
    document.getElementById("inner-content").classList.add("not-active");
  }, 700);
}
