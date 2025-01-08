const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://127.0.0.1:27017/chatdb'; // Update with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Chat Schema and Model
const chatSchema = new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model('Chat', chatSchema);

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
app.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message cannot be empty' });
  }

  // Save user message to MongoDB
  const userMessage = new Chat({ sender: 'user', message });
  await userMessage.save();

  // Generate bot response and save it to MongoDB
  const botResponse = generateBotResponse(message);
  const botMessage = new Chat({ sender: 'bot', message: botResponse });
  await botMessage.save();

  res.json({ botResponse });
});

// Route to retrieve chat history
app.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ timestamp: 1 }); // Fetch chats in ascending order
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve chat history' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
