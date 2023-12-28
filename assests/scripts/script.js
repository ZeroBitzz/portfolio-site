// removes the loading page
setTimeout(() => {
    document.getElementById("loader-wrapper").style.visibility = "hidden"
}, 3000);

// clock for the website
setInterval(() => {
    const timeDisplay = document.getElementById("time");
    timeDisplay.textContent = new Date().toLocaleString().replace(", ", " - ");
}, 1000);