function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += "<p>تو: " + message + "</p>";

    let botReply = getBotReply(message);

    chatBox.innerHTML += "<p>بات: " + botReply + "</p>";

    input.value = "";
}

function getBotReply(msg) {
    msg = msg.toLowerCase();

    // سلام
    if (msg.includes("سلام") || msg.includes("درود")) {
        return "سلام 👋 حالت چطوره؟";
    }

    // حال
    if (msg.includes("خوبی") || msg.includes("حالت چطوره")) {
        return "مرسی 😊 تو خوبی؟";
    }

    // معرفی
    if (msg.includes("تو کی هستی") || msg.includes("کی هستی")) {
        return "من NAXORA هستم، یه چت‌بات فارسی 🤖";
    }

    // خداحافظی
    if (msg.includes("خداحافظ") || msg.includes("بای")) {
        return "خداحافظ 👋 امیدوارم دوباره ببینمت";
    }

    // سوال درباره اسم
    if (msg.includes("اسمت چیه")) {
        return "اسم من NAXORA هست 😎";
    }

    // پیش‌فرض
    return "متوجه نشدم 🤔 یه جور دیگه بگو";
}
