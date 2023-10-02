function generateRandomCaptcha() {
    const num1 = Math.floor(Math.random() * 10); // Random number between 0 and 100
    const num2 = Math.floor(Math.random() * 10); // Another random number
    const operators = ["+", "-", "*"]; // List of operators for variety
    const operator =
      operators[Math.floor(Math.random() * operators.length)]; // Random operator
    const result = eval(`${num1} ${operator} ${num2}`); // Evaluate the expression

    const captchaLabel = document.getElementById("captcha-label-11");
    captchaLabel.textContent = `${num1} ${operator} ${num2} nedir?`;
    return result.toString(); // Convert the result to string for comparison
  }

  const correctAnswer = generateRandomCaptcha();
  handleFormSubmission("form-11", correctAnswer);