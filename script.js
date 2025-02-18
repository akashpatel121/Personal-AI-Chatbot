// script.js
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      document.getElementById(
        "userInput"
      ).placeholder = `Selected: ${file.name}`;
    }
  });

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatBox");

  // Add user message
  appendMessage(message, "user-message");

  // Clear input
  userInput.value = "";
  userInput.placeholder = "Ask something...";

  // Simulate bot response
  setTimeout(() => {
    appendMessage("Processing your request...", "bot-message");
  }, 500);
}

function appendMessage(text, className) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
