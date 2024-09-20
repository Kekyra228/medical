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
