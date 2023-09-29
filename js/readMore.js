document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("read-more-button");
    const hiddenContent = document.querySelector(".hidden-content");

    button.addEventListener("click", function () {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
            button.textContent = "Geri kapat";
        } else {
            hiddenContent.style.display = "none";
            button.textContent = "Devamı oku";
        }
    });
});