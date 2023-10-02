// JavaScript
document.addEventListener("DOMContentLoaded", function () {
	const popupContainer = document.getElementById("popup-container");
  
	setTimeout(function () {
	  popupContainer.style.display = "block";
	}, 10000); // 10 seconds in milliseconds
  
	const closePopup = document.getElementById("close-popup");
	closePopup.addEventListener("click", function () {
	  popupContainer.style.display = "none";
	});
  });
  