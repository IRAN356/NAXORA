const input = document.getElementById("messageInput");
const button = document.getElementById("sendBtn");

button.addEventListener("click", function () {
    const message = input.value.trim();

    if (message === "") return;

    const chatBox = document.getElementById("chatBox");

    const msg = document.createElement("div");
    msg.textContent = message;

    chatBox.appendChild(msg);

    input.value = "";
});
window.addEventListener("load", function () {
    const chatBox = document.getElementById("chatBox");

    const botMsg = document.createElement("div");
    botMsg.textContent = "سلام 👋";

    chatBox.appendChild(botMsg);
});
