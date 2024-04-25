// Function to calculate and display the score
function calculateScore() {
    // Initialize score
    var score = 0;
    
    // Iterate over all the radio buttons
    var quizForms = document.querySelectorAll('form');
    quizForms.forEach(function(form) {
        var selectedOption = form.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            // Get the value of the selected option
            var selectedValue = selectedOption.value;
            // Increment the score based on the selected option value
            if (selectedValue === 'b') {
                score += 1; // Increment score if correct answer is selected
            }
        }
    });
    
    // Display the score in the score div
    var scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = '<h3>Your Score: ' + score + ' out of 10</h3>';
}

// Function to reset the quiz
function resetQuiz() {
    // Reset all radio buttons
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.checked = false;
    });
    
    // Clear the score div
    var scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = '';
}

// Event listener for the submit button
var submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    calculateScore(); // Calculate and display the score
});

// Event listener for the reset button
var resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    resetQuiz(); // Reset the quiz
});
