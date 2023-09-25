function handleFormSubmission(formId, correctAnswer) {
    var form = document.getElementById(formId);
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from being submitted

        var startTime = parseInt(form.dataset.startTime, 10);
        var endTime = Date.now();
        var submissionTime = endTime - startTime;

        var submissionThreshold = 3000; // 3 seconds

        var captchaInput = document.getElementById("captcha-" + formId);
        var userAnswer = captchaInput.value.trim();

        if (submissionTime < submissionThreshold) {
            alert("Lütfen formu doldurmak için zaman ayırın. (Bot tespiti)");
        } else if (userAnswer !== correctAnswer) {
            alert("Sayı yanlış toplandı tekrar deneyin.");
        } else {
            // If all checks pass, you can submit the form programmatically if needed
            form.submit();
        }
    });

    // Record the start time for the form when the page loads
    form.dataset.startTime = Date.now();
}