// import "swiper/swiper-bundle.min.css";

$(document).ready(function () {
  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".doctor-type-button").click(function () {
    $(".doctor-type-button").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  $(".doctor-btn").click(function () {
    $(".doctor-btn").removeClass("active");
    $(this).addClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: Math.min(
      3,
      document.querySelectorAll(".swiper-slide").length
    ),
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
});

$(window).on("scroll", function () {
  let scrollTop = $(this).scrollTop();

  // Движение первой строки влево
  $("#partners-row1").css({
    transform: "translateX(" + -scrollTop * 0.2 + "px)",
  });

  // Движение второй строки вправо
  $("#partners-row2").css({
    transform: "translateX(" + scrollTop * 0.2 + "px)",
  });
});
