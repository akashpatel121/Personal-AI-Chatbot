document.addEventListener("DOMContentLoaded", () => {
  // typing animation
  const typingText = document.getElementById("typing-text");
  function initTypeAnimation() {
    const text = typingText.getAttribute("data-text");
    typingText.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter();
  }
  initTypeAnimation(); //typing animation at reload

  // Logout functionality
  const logoutBtn = document.querySelector(".logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "/logout";
    });
  }

  //----------------------------------------------------------

 const profile = document.querySelector(".profile");
 const settings = document.querySelector(".settings");

 profile.addEventListener("click", (event) => {
   // Toggle settings menu visibility
   settings.classList.toggle("active");

   // Prevent the click from propagating to the document (to avoid immediate closing)
   event.stopPropagation();
 });

 // Hide settings when clicking anywhere outside
 document.addEventListener("click", (event) => {
   if (!settings.contains(event.target) && !profile.contains(event.target)) {
     settings.classList.remove("active");
   }
 });

  //----------------------------------------------------------

  //Message send animation
  async function sendMessage() {
    let userInput = document.querySelector("#user-input").value;
    let chatBox = document.querySelector("#chat-box");
    if (userInput === "") {
      alert("Write some thing");
      typingText.style.display = "none";
    } else {
      let userMessage = document.createElement("div");
      userMessage.classList.add("message", "user");
      userMessage.innerHTML = `<p>${userInput}</p>`;
      chatBox.appendChild(userMessage);
      document.querySelector("#user-input").value = "";
      chatBox.scrollTop = chatBox.scrollHeight;

      typingText.style.display = "none";

      let response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      let data = await response.json();
      let botMessage = document.createElement("div");
      botMessage.classList.add("message", "bot");
      botMessage.innerHTML = `<p>${data.replay}</p>`;
      chatBox.appendChild(botMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

  function uploadFile() {
    let fileInput = document.getElementById("file-input");
    let file = fileInput.files[0];
    if (file) {
      alert("File uploaded: " + file.name);
    }
  }
});
