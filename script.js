document.getElementById("themeBtn").onclick = function() {
    document.body.classList.toggle("dark-mode");
};

document.getElementById("editJobBtn").onclick = function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle) {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

document.getElementById("toggleSkillsBtn").onclick = function () {
    let skills = document.getElementById("skillsSection");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
    }
};

let msg = document.getElementById("msgBox");
let counter = document.getElementById("counter");

msg.addEventListener("keyup", function () {
    let remaining = 200 - msg.value.length;
    counter.textContent = remaining;
});

function validateForm() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Please fill out Name and Email before sending.");
        return false;
    }
    alert("Form sent successfully!");
    return true;
}

document.getElementById("dateDisplay").textContent =
    new Date().toDateString();

const quotes = [
    "Through Christ all things are possible - Philippians 4:13 ",
    "I can and I will.",
    "Take the risk or lose the chance.",
    "If you want it, work for it.",
    "The past does not equal the future."
];

document.getElementById("quoteBtn").onclick = function () {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteDisplay").textContent = randomQuote;
};
