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
  const userMessageLower = userMessage.toLowerCase(); // Convert user message to lowercase for case-insensitive comparison

  // Responding to greeting or initial user input
  if (userMessageLower.includes('hello')) {
    return 'Hello! How can I assist you today? If you need any help type "help".';
  } 

  // Handling help request
  else if (userMessageLower.includes('help')) {
    return 'Sure! Let me connect you with our office employee so that we can solve your problem! If you want to connect, type "connect".';
  }

  // Handling "connect" request
  else if (userMessageLower.includes('connect')) {
    return 'Sure! What do you need help with? Choose an option: \n1. Return Product \n2. Product Review \n3. Replace Product \n4. Track Order \n5. Product Inquiry \n6. Order Issues \n7. None of the above. \nPlease select an option by typing 1, 2, 3, 4, 5, 6, or 7.';
  } 

  // Handling "1" (Return Product) selection
  else if (userMessageLower.includes('1')) {
    return 'Sure! You can return the product. A delivery agent will come to pick it up as soon as possible! If you want to track the return, type "track return".';
  }

  // Handling "2" (Product Review) selection
  else if (userMessageLower.includes('2')) {
    return 'Please rate the product out of 5 stars and leave a detailed review so we can improve!';
  }

  // Handling "3" (Replace Product) selection
  else if (userMessageLower.includes('3')) {
    return 'Sure! Please provide your order details, and we will help you replace the product. If you need help tracking your order, type "track order".';
  }

  // Handling "4" (Track Order) selection
  else if (userMessageLower.includes('4')) {
    return 'Please provide your order number, and I will help you track it. If you’re not sure, type "help" for assistance.';
  }

  // Handling "5" (Product Inquiry) selection
  else if (userMessageLower.includes('5')) {
    return 'Tell me the product you’re looking for, and I’ll provide you with details like price, specifications, and availability.';
  }

  // Handling "6" (Order Issues) selection
  else if (userMessageLower.includes('6')) {
    return 'We’re sorry for any inconvenience caused! What issues are you facing with your order? Please select: \n1. Incorrect Item \n2. Damaged Item \n3. Missing Item \n4. Delayed Delivery \nType the issue number to proceed.';
  }

  // Handling Order Issues (sub-options)
  else if (userMessageLower.includes('1')) {
    return 'We apologize for the incorrect item. Please provide your order number, and we’ll resolve it quickly.';
  }
  else if (userMessageLower.includes('2')) {
    return 'We’re sorry your item arrived damaged. Please provide your order number and pictures of the damage, and we’ll assist you with a replacement or refund.';
  }
  else if (userMessageLower.includes('3')) {
    return 'We apologize for the missing item. Please provide your order number, and we’ll investigate the issue immediately.';
  }
  else if (userMessageLower.includes('4')) {
    return 'We’re sorry for the delay in your delivery. Please provide your order number, and we’ll give you an update on the status of your order.';
  }

  // Handling "7" (None of the above) selection
  else if (userMessageLower.includes('7')) {
    return 'Okay! If you need any further assistance, feel free to ask!';
  }

  // Default fallback message if no recognized command
  else if (userMessageLower.includes('goodbye') || userMessageLower.includes('bye') || userMessageLower.includes('ok')) {
    return 'Goodbye! Thank you for reaching out. If you need help again, feel free to chat with us anytime!';
  }

  // Handling unrecognized commands
  else {
    return "I'm here to chat! Feel free to ask me anything, or type 'help' to get started.";
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
