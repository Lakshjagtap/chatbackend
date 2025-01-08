const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulated bot response logic
function generateBotResponse(userMessage) {
  if (userMessage.toLowerCase().includes('hello')) {
    return 'Hello! How can I assist you today?';
  } else if (userMessage.toLowerCase().includes('help')) {
    return 'Sure! What do you need help with?';
  } else {
    return "I'm here to chat! Feel free to ask me anything.";
  }
}

// Route to handle messages
app.post('/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  // Generate bot response
  const botResponse = generateBotResponse(message);

  // Respond with bot's reply
  res.json({ botResponse });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
