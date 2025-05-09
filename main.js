// const toggleTax = document.querySelector(".toggle-tax");

// document.querySelector(".btn3").addEventListener("click", function () {
//   toggleTax.classList.toggle("active");
// });
$(".btn3").click(function () {
  $(".toggle-tax").slideToggle("slow");
});

const rm__hamburger = document.querySelector(".rm__hamburger");
const menuBox = document.querySelector(".menu-box");

rm__hamburger.addEventListener("click", function () {
  menuBox.classList.toggle("active");

  if (menuBox.classList.contains("active")) {
    $("body").css("overflow", "hidden");
    // Tắt cuộn
  } else {
    $("body").css("overflow", "auto");
    // Bật cuộn
  }
});
