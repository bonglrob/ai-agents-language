from flask import Flask, request, jsonify
from openai import OpenAI
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)

CORS(app)

client = OpenAI(
  api_key=os.environ['OPENAI_API_KEY'],
)

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message')

        messagedict = {
            "role": "user",
            "content": message
        }
        print(type (messagedict))

        if not message:
            raise ValueError('Message cannot be empty')

        system_message = {
            "role": "system",
            "content": "You are a language tutor who helps users learn languages. Based on the user's language goal and current skill level, you will create a lesson which will have a list of vocab, grammar and phrases to learn. The user will then practice these and you will provide feedback. You will also answer any questions the user has about the language."
        }

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[system_message, messagedict],
            max_tokens=100,
        )

        response_text = response.choices[0].message.content
        print("restext", response_text)
        return jsonify({'message': response_text})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
