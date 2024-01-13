document.addEventListener("DOMContentLoaded", function () {
  
	AOS.init({
		once: true,
		duration: 1000
	});

  var swiper = new Swiper(".donasiSlider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
    },
  });

  var targetDate = new Date("March 12, 2024 00:00:00").getTime();

  var countdownInterval = setInterval(function () {
    var now = new Date().getTime();

    var timeDifference = targetDate - now;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = days;
    document.getElementById("jam").innerHTML = hours;
    document.getElementById("menit").innerHTML = minutes;
    document.getElementById("detik").innerHTML = seconds;

    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById("hari").innerHTML = 0;
      document.getElementById("jam").innerHTML = 0;
      document.getElementById("menit").innerHTML = 0;
      document.getElementById("detik").innerHTML = 0;
    }
  }, 1000);

  var currentYear = new Date().getFullYear();
  var copyrightElement = document.getElementById("copyright");
  copyrightElement.innerHTML =
    "Copyright © " + currentYear + " by MUSLIMPEDIA. All rights reserved.";
});
