document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var audio = document.getElementById("alert-audio");
      if (audio) {
        audio.play();
      }
    }, 7000); // 4000 milliseconds (4 seconds)
  });