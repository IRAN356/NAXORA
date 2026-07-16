from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

chatbot = pipeline("text-generation", model="microsoft/DialoGPT-medium")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")

    response = chatbot(user_message, max_length=100)
    bot_reply = response[0]['generated_text']

    return jsonify({"reply": bot_reply})

app.run(host="0.0.0.0", port=5000)
