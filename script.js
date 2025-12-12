document.getElementById("editJobBtn").onclick = () => {
  const newTitle = prompt("Enter your new job title:");
  if (newTitle) {
    document.getElementById("jobTitle").textContent = newTitle;
  }
};

document.getElementById("toggleSkillsBtn").onclick = () => {
  const skills = document.getElementById("skillsSection");
  if (skills.style.display === "none") {
    skills.style.display = "block";
    document.getElementById("toggleSkillsBtn").textContent = "Hide Skills";
  } else {
    skills.style.display = "none";
    document.getElementById("toggleSkillsBtn").textContent = "Show Skills";
  }
};

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];
document.getElementById("quoteBtn").onclick = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").textContent = randomQuote;
};

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
msgBox.addEventListener("input", () => {
  const remaining = 200 - msgBox.value.length;
  counter.textContent = remaining;
});

function validateForm() {
  const name = document.getElementById("nameField").value.trim();
  const email = document.getElementById("emailField").value.trim();
  const message = msgBox.value.trim();

  if (!name || !email || !message) {
    alert("All fields must be filled out!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

document.getElementById("dateDisplay").textContent = new Date().toDateString();
