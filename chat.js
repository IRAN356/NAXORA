function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;

    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += "<p>تو: " + message + "</p>";

    let botReply = "";

    if (message.includes("سلام")) {
        botReply = "سلام 👋";
    } 
    else if (message.includes("تو کی هستی")) {
        botReply = "من NAXORA هستم 🤖";
    } 
    else {
        botReply = "متوجه نشدم 🤔";
    }

    chatBox.innerHTML += "<p>بات: " + botReply + "</p>";

    input.value = "";
}
