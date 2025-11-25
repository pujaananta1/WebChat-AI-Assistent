// Simple Node script to check the /api/chat endpoint is reachable locally.
// Usage: node test_server.js

const axios = require("axios");

async function test() {
  try {
    const res = await axios.post("http://localhost:3000/api/chat", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello from test script" }],
    });
    console.log("Server responded:", res.data);
  } catch (err) {
    console.error("Request failed:", err?.response?.data || err.message);
  }
}

test();
