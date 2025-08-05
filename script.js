function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === "admin" && pass === "Cyberadmin123") {
    alert("Login successful!");
    document.getElementById('loginModal').style.display = 'none';
  } else {
    alert("Invalid credentials.");
  }
}

function forgotPassword() {
  alert("Please contact support to reset your password.");
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("messages");
  if (input.value.trim()) {
    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + input.value;
    messages.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.textContent = "Admin: Thank you for your message. We’ll get back to you soon.";
    messages.appendChild(botMsg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
}