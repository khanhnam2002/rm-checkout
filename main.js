// const toggleTax = document.querySelector(".toggle-tax");

// document.querySelector(".btn3").addEventListener("click", function () {
//   toggleTax.classList.toggle("active");
// });
$(".btn3").click(function () {
  $(".toggle-tax").slideToggle("slow");
});

const menuToggle = document.querySelector(".menu-toggle");
const menuBox = document.querySelector(".menu-box");

menuToggle.addEventListener("click", function () {
  menuBox.classList.toggle("active");

  if (menuBox.classList.contains("active")) {
    $("body").css("overflow", "hidden"); // Tắt cuộn
  } else {
    $("body").css("overflow", "auto"); // Bật cuộn
  }
});
