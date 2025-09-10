# 🚀 AI Backend API

This backend provides an API endpoint for translating Appium code snippets into a structured response.

### 📌 Base URL
https://ai-backend-qgn1.onrender.com

### 📂 Endpoints
POST `/api/translate`

Translate an Appium code snippet.

### Request Headers
`Content-Type: application/json`

### Request Body
<pre>{
  "code": "hello world"
}</pre>

`code` (string, required) – The Appium code snippet to be processed.

### ✅ Response

The API returns a structured JSON response.

Example Success/Error Response
<pre>
{
  "data": {
    "id": "chatcmpl-7942c1e9-8df3-42dd-b125-c93e413f3e3d",
    "object": "chat.completion",
    "created": 1757517505,
    "model": "openai/gpt-oss-20b",
    "choices": [
      {
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "[\n  {\n    \"title\": \"Error\",\n    \"description\": [\"Not valid Appium code\"]\n  }\n]",
          "reasoning": "User says \"hello world\" - not Appium code. According to Error Handling, return array with Error."
        },
        "finish_reason": "stop"
      }
    ],
    "usage": {
      "prompt_tokens": 575,
      "completion_tokens": 56,
      "total_tokens": 631
    }
  }
}</pre>

### ⚠️ Error Handling

If the input is not valid Appium code, the API responds with an error inside the choices[0].message.content array:

<pre>[
  {
    "title": "Error",
    "description": ["Not valid Appium code"]
  }
]</pre>


### 🛠 Tech Stack
Backend: Node.js (Express)  
AI Model: OpenAI OSS model (openai/gpt-oss-20b)  
Hosting: Render