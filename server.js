const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

function generateBotResponse(userMessage) {
  const userMessageLower = userMessage.toLowerCase(); // Convert user message to lowercase for case-insensitive comparison

  // General Greetings
  if (userMessageLower.includes('hello') || userMessageLower.includes('hi') || userMessageLower.includes('hey')) {
    return 'Hello! How can I assist you today? I have information on cars, animals, and birds. You can ask me about these!';
  }

  // Help request
  else if (userMessageLower.includes('help')) {
    return 'I can provide information on the following topics: \n1. Types of cars \n2. Animals and their facts \n3. Birds and their facts. \nJust ask me about any of these, and I\'ll provide details!';
  }

  // Informative responses for Cars, Animals, and Birds
  else if (userMessageLower.includes('car')) {
    return 'I know a lot about different types of cars! I can tell you about sports cars, sedans, SUVs, and more. Just ask about a specific car type or general car facts!';
  }

  else if (userMessageLower.includes('animal')) {
    return 'I can provide information on common animals like lions, elephants, dogs, cats, and more! Let me know which animal you want to learn about!';
  }

  else if (userMessageLower.includes('bird')) {
    return 'I have details on various birds like eagles, parrots, sparrows, owls, and more. Ask me about a bird, and I\'ll tell you all about it!';
  }

  // Specific Animal Information (10 common animals)
  else if (userMessageLower.includes('lion')) {
    return 'Lions are large carnivorous mammals found in Africa and India. They are known as the "King of the Jungle" and live in prides. They primarily hunt large herbivores like zebras and buffaloes.';
  }
  else if (userMessageLower.includes('elephant')) {
    return 'Elephants are the largest land animals on Earth. They have long trunks that they use to grasp objects, drink water, and communicate. They live in herds and are highly intelligent creatures.';
  }
  else if (userMessageLower.includes('dog')) {
    return 'Dogs are domesticated mammals and are often called man\'s best friend. They come in a variety of breeds and are known for their loyalty and companionship.';
  }
  else if (userMessageLower.includes('cat')) {
    return 'Cats are small carnivorous mammals that are often kept as pets. They are independent, curious, and excellent hunters, known for their agility and playful behavior.';
  }
  else if (userMessageLower.includes('tiger')) {
    return 'Tigers are large, striped carnivores that are native to Asia. They are solitary animals and are the largest members of the cat family. Tigers are known for their strength and hunting skills.';
  }
  else if (userMessageLower.includes('bear')) {
    return 'Bears are large mammals found in North America, Europe, and Asia. They are omnivores, meaning they eat both plants and animals. Different species include grizzly bears, polar bears, and panda bears.';
  }
  else if (userMessageLower.includes('giraffe')) {
    return 'Giraffes are the tallest land animals. They are herbivores and are found in Africa. Their long necks allow them to feed on leaves high in trees, especially acacias.';
  }
  else if (userMessageLower.includes('zebra')) {
    return 'Zebras are herbivorous animals found in Africa. They are known for their black and white striped coats. Zebras live in herds and are closely related to horses and donkeys.';
  }
  else if (userMessageLower.includes('kangaroo')) {
    return 'Kangaroos are marsupial mammals native to Australia. They are known for their powerful hind legs, large tails, and hopping movements. They are herbivores and graze on grasses.';
  }
  else if (userMessageLower.includes('panda')) {
    return 'Pandas are large bear-like mammals found in China. They are primarily herbivores, feeding mostly on bamboo. They are known for their black and white fur and are an endangered species.';
  }

  // Specific Bird Information (10 common birds)
  else if (userMessageLower.includes('eagle')) {
    return 'Eagles are large birds of prey with powerful beaks and sharp talons. They are known for their excellent eyesight and are found in various parts of the world, especially in North America and Europe.';
  }
  else if (userMessageLower.includes('parrot')) {
    return 'Parrots are colorful, intelligent birds often kept as pets. They are known for their ability to mimic human speech and can be found in tropical and subtropical regions worldwide.';
  }
  else if (userMessageLower.includes('sparrow')) {
    return 'Sparrows are small, brown, and gray birds commonly found in urban areas. They are social birds and often live in large groups. Sparrows are omnivores and feed on seeds, insects, and small plants.';
  }
  else if (userMessageLower.includes('owl')) {
    return 'Owls are nocturnal birds of prey known for their ability to rotate their heads and hunt in the dark. They have excellent hearing and are found in many parts of the world.';
  }
  else if (userMessageLower.includes('peacock')) {
    return 'Peacocks are large, colorful birds native to South Asia. Males are famous for their eye-catching tail feathers, which they fan out during courtship displays.';
  }
  else if (userMessageLower.includes('penguin')) {
    return 'Penguins are flightless birds that are excellent swimmers. They are found in the Southern Hemisphere, particularly in Antarctica, and are known for their unique waddling walk.';
  }
  else if (userMessageLower.includes('flamingo')) {
    return 'Flamingos are wading birds known for their long necks and legs. They are often pink due to the pigments in the algae and crustaceans they eat. Flamingos are commonly found in shallow lakes and wetlands.';
  }
  else if (userMessageLower.includes('hummingbird')) {
    return 'Hummingbirds are small, colorful birds known for their ability to hover in mid-air. They are found in the Americas and feed on nectar, often from flowers.';
  }
  else if (userMessageLower.includes('robin')) {
    return 'Robins are small, migratory birds commonly found in North America and Europe. They are known for their bright red breasts and are often associated with spring.';
  }
  else if (userMessageLower.includes('crow')) {
    return 'Crows are highly intelligent birds found in many parts of the world. They are known for their problem-solving abilities and are capable of using tools to access food.';
  }

  // Default response when the bot doesn't understand the user's input
  else {
    return 'I didn\'t quite catch that. I can provide information on cars, animals, and birds. Just ask me about any of these, and I\'ll share more details!';
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
