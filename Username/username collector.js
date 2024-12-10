document.getElementById('submitButton').addEventListener('click', function() {
    // Get the value from the input field
    const username = document.getElementById('usernameInput').value;

    // Display the username in the designated area
    const displayArea = document.getElementById('usernameDisplay');

    if (username) {
        displayArea.textContent = `Your username is: ${username}`;
    } else {
        displayArea.textContent = 'Please enter a username.'
    }
    document.getElementById('usernameInput').value = '';
});
