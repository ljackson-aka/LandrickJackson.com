// Function to display a greeting based on the time of day
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning, coder!";
    } else if (hours < 18) {
        greeting = "Good afternoon, engineer!";
    } else {
        greeting = "Good evening, network wizard!";
    }

    document.getElementById("greeting").textContent = greeting;
}

// Function to toggle dark/light mode
function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
}

// Run the greeting function when the page loads
window.onload = displayGreeting;
