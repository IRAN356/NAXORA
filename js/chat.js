const input = document.getElementById("messageInput");
const button = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

// پیام اولیه
window.addEventListener("load", function () {
    const botMsg = document.createElement("div");
    botMsg.textContent = "سلام 👋";
    chatBox.appendChild(botMsg);
});

// ارسال پیام
button.addEventListener("click", function () {
    const message = input.value.trim();
    if (message === "") return;

    // پیام کاربر
    const userMsg = document.createElement("div");
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    // پاسخ بات
    const botMsg = document.createElement("div");

    if (message.includes("تو کی هستی")) {
        botMsg.textContent = "من یک چت‌بات ساده هستم 🤖";
    } else if (message.includes("سلام")) {
        botMsg.textContent = "سلام 👋 خوش اومدی";
    } else {
        botMsg.textContent = "متوجه نشدم 😅";
    }

    chatBox.appendChild(botMsg);

    input.value = "";
});
