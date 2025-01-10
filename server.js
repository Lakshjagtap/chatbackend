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
  if (userMessageLower.includes('hello') || userMessageLower.includes('hi') || userMessageLower.includes('hey') || (userMessageLower.includes('what'))) {
    return 'Hello! How can I assist you today? I can provide information on the following topics: \n1. Types of cars (e.g., sports cars, sedans, SUVs, etc.) \n2. Animals and their facts \n3. Birds and their facts. \nJust ask me about any of these, and I\'ll provide details!!';
  }

  // Help request
  else if (userMessageLower.includes('help')) {
    return 'I can provide information on the following topics: \n1. Types of cars (e.g., sports cars, sedans, SUVs, etc.) \n2. Animals and their facts \n3. Birds and their facts. \nJust ask me about any of these, and I\'ll provide details!';
  }

  else if (userMessageLower.includes('thanks') || userMessageLower.includes('thank you') || (userMessageLower.includes('thankyou'))) {
    return 'You\'re welcome! If you need more information, feel free to ask anytime!';
  }

  // Specific Information for Cars
  else if (userMessageLower.includes('car') || userMessageLower.includes('cars')) {
    return 'I can tell you about different types of cars like sports cars, SUVs, sedans, hatchbacks, convertibles, coupes, minivans, pickup trucks, and more. Just ask me about a specific type!';
  }

  // Information about Car Types
  else if (userMessageLower.includes('sports car')) {
    return 'Sports cars are high-performance vehicles designed for speed and agility. They are often lightweight and feature powerful engines, making them capable of reaching high speeds and accelerating quickly. Most sports cars have a sleek, aerodynamic design to minimize drag and maximize stability at high speeds. These vehicles are typically two-seater or 2+2 configurations, designed for performance over practicality. Examples of popular sports cars include the Ferrari 488, Porsche 911, Lamborghini Huracán, and Chevrolet Corvette. Sports cars are often more expensive due to their advanced engineering, luxury features, and high-performance parts. They are designed for enthusiasts who appreciate driving dynamics and a thrilling ride.';
  }
  else if (userMessageLower.includes('sedan')) {
    return 'Sedans are four-door vehicles designed for comfort and practicality. They typically offer a spacious interior, providing plenty of legroom for passengers, especially in the rear seats. Sedans are a popular choice for families and individuals who prioritize comfort, smooth rides, and fuel efficiency. Most sedans have a separate trunk for cargo, although some newer models may offer more flexible cargo space through rear seats that fold down. Examples of sedans include the Toyota Camry, Honda Accord, and BMW 3 Series. Sedans come in a variety of sizes, ranging from compact models to full-size luxury sedans, and they often feature more advanced technology and infotainment options than smaller vehicles. They offer a great balance of performance, comfort, and practicality.';
  }
  else if (userMessageLower.includes('suv')) {
    return 'SUVs (Sport Utility Vehicles) are larger, more versatile vehicles designed to handle both urban roads and rough terrains. They offer higher ground clearance than sedans, making them ideal for off-road driving or challenging weather conditions. SUVs are known for their ample interior space, often accommodating 5 to 7 passengers, making them a popular choice for families. Many SUVs feature advanced all-wheel-drive or four-wheel-drive systems to enhance their off-road capabilities. Popular models include the Ford Explorer, Jeep Grand Cherokee, Toyota Land Cruiser, and Honda CR-V. SUVs are available in both luxury and affordable options, with some models also offering towing capacity for heavy loads, making them useful for road trips or recreational activities like camping or boating. They are designed to provide comfort and utility in various driving conditions.';
  }
  else if (userMessageLower.includes('hatchback')) {
    return 'Hatchbacks are compact vehicles known for their rear doors that open upward, providing easy access to the trunk or cargo area. Unlike sedans, hatchbacks have a flexible cargo space that can be expanded by folding down the rear seats, making them ideal for transporting larger items while maintaining a compact exterior. Hatchbacks typically offer better fuel efficiency than larger cars like SUVs, and they often come in both subcompact and compact sizes. Some popular hatchbacks include the Volkswagen Golf, Ford Focus, Honda Civic Hatchback, and Hyundai Elantra GT. Hatchbacks combine the convenience of a small car with the practicality of more cargo space, making them a great choice for urban driving, families, or those who need a versatile vehicle without sacrificing maneuverability. They are perfect for those who need practicality in a compact design.';
  }
  else if (userMessageLower.includes('convertible')) {
    return 'Convertibles are cars that feature a retractable roof, allowing the driver and passengers to enjoy open-air driving when desired. Convertibles typically have a soft top or hardtop that can be folded back or removed, depending on the model. These vehicles are often seen as a symbol of freedom and style, and they are popular for leisurely drives, especially in warmer climates. Convertibles are typically two-seater or 2+2 configurations, with a sporty or luxurious design. Some common examples of convertibles include the Mazda MX-5 Miata, Chevrolet Camaro Convertible, BMW Z4, and Ford Mustang. While convertibles offer a unique driving experience, they often come with some trade-offs, such as reduced trunk space, more noise in the cabin, and potential for less rigidity in the body structure, especially in soft-top models. They are best suited for drivers who prioritize the open-air driving experience.';
  }
  else if (userMessageLower.includes('coupe')) {
    return 'Coupes are two-door vehicles characterized by their sporty design and sleek appearance. They often have a compact, low-profile body with a fixed roof and two front seats, although some coupes feature a rear seat for passengers. Coupes are typically built for performance and style, offering excellent handling and agility compared to larger vehicles. They tend to have smaller interior spaces than sedans, prioritizing driving experience over passenger comfort. Popular coupes include the Audi A5, Mercedes-Benz C-Class Coupe, Ford Mustang, and BMW 4 Series. While they are not as practical for families as sedans, coupes are highly sought after for their aesthetic appeal, sporty performance, and more affordable price compared to high-end sports cars. They combine elegance and excitement for driving enthusiasts.';
  }
  else if (userMessageLower.includes('minivan')) {
    return 'Minivans are designed to provide maximum comfort and space, especially for families. These vehicles typically feature sliding side doors for easier access, especially in tight parking spaces. Minivans offer three rows of seating and ample cargo space, making them ideal for transporting passengers and luggage. Many modern minivans are equipped with advanced technology, including infotainment systems, safety features, and convenience options like power-sliding doors and built-in vacuum cleaners. Popular minivans include the Toyota Sienna, Honda Odyssey, Chrysler Pacifica, and Kia Carnival. Although they are larger than sedans, minivans are known for their smooth ride, ease of driving, and ability to accommodate a larger number of passengers and their belongings comfortably. They are great for long family trips.';
  }
  else if (userMessageLower.includes('pickup truck')) {
    return 'Pickup trucks are built for utility and durability, making them ideal for hauling heavy loads and working in tough conditions. These vehicles feature an open cargo area with a flatbed, often equipped with a tailgate for easy loading and unloading. Pickup trucks come in various sizes, from compact models like the Ford Ranger to larger heavy-duty options like the Ford F-250 and Ram 2500. Many pickup trucks also offer four-wheel-drive capabilities for off-roading or driving in adverse conditions. In addition to their towing and hauling capacities, modern pickups offer advanced technology, including infotainment systems, safety features, and even luxury touches in higher-end models. Examples of popular pickup trucks include the Ford F-150, Chevrolet Silverado, Toyota Tacoma, and Nissan Frontier. They are perfect for work, adventure, and those who need to transport larger loads.';
  }

  // Specific Information for Animals
  else if (userMessageLower.includes('animal') || (userMessageLower.includes('animals'))) {
    return 'I can provide information about animals like lions, tigers, elephants, and more. Ask me about a specific animal to get detailed facts!';
  }

  // Additional Animal Information
  else if (userMessageLower.includes('lion') || (userMessageLower.includes('lions'))) {
    return 'Lions are large carnivorous mammals found primarily in Africa, with a small population in the Gir Forest of India. They are social animals that live in groups called prides, consisting of multiple females, their offspring, and a few males. Lions are known for their majestic manes, which are more prominent in males. These apex predators primarily hunt large herbivores like zebras, buffaloes, and wildebeests. They rely on teamwork and strategy to bring down prey. Lions are also known for their powerful roars, which can be heard from several miles away. They have excellent night vision, making them effective hunters at night. Despite their strength and fearsome reputation, lions are facing threats from habitat loss and human-wildlife conflict, leading to a decline in their population in the wild.';
  }
  else if (userMessageLower.includes('tiger') || (userMessageLower.includes('tigers')) ){
    return 'Tigers are large carnivores found primarily in Asia. They are the largest of all cat species, with males weighing up to 500 pounds. Tigers have striking orange fur with black stripes, each tiger having its own unique pattern. They are solitary hunters, unlike lions, and prefer dense forests or grasslands for stalking their prey. Tigers are excellent swimmers, which sets them apart from other big cats. They typically hunt large herbivores such as deer and wild boar. Tigers are endangered, with their population threatened by habitat loss and poaching. Conservation efforts are underway to protect these majestic animals.';
  }
  else if (userMessageLower.includes('bear') || (userMessageLower.includes('bears'))) {
    return 'Bears are large, powerful mammals found in various regions across North America, Europe, and Asia. There are several species, including grizzly bears, black bears, and polar bears. Bears are omnivores, meaning they eat both plant and animal matter. Their diet may include berries, fish, and small mammals. Bears hibernate in the winter to conserve energy, retreating to dens where they sleep for months. Polar bears, however, live in Arctic regions and have evolved to be excellent swimmers. Unfortunately, habitat loss and climate change are threatening polar bear populations.';
  }
  else if (userMessageLower.includes('giraffe') || (userMessageLower.includes('giraffes')) ){
    return 'Giraffes are the tallest land animals, growing up to 18 feet in height. They are herbivores and feed on leaves from tall trees, particularly acacias. Giraffes have long necks that allow them to reach high foliage. Their unique spotted coat patterns are used to identify individuals. These animals are native to Africa, and they live in savannahs and open woodlands. Giraffes have a distinctive walking pattern called "pacing," where both legs on one side of their body move simultaneously. Despite their height and size, giraffes are generally peaceful and social animals.';
  }
  else if (userMessageLower.includes('elephant') || (userMessageLower.includes('elephants'))) {
    return 'Elephants are the largest land mammals, known for their exceptional memory and strong social bonds. African elephants are larger with bigger ears compared to their Asian relatives. They live in large herds led by a matriarch. Their trunks are used for a wide variety of purposes including feeding, drinking, and communicating. Elephants are highly intelligent and can use tools, display emotions, and show empathy. They have complex social structures and mourn the loss of their companions. Sadly, elephants are endangered due to habitat loss, poaching for ivory, and human-wildlife conflict.';
  }
  else if (userMessageLower.includes('kangaroo') || (userMessageLower.includes('kangaroos'))) {
    return 'Kangaroos are marsupial mammals native to Australia. They are known for their powerful hind legs, large tails, and hopping movements. Kangaroos are herbivores, primarily feeding on grasses and shrubs. They have a unique method of locomotion called "saltation," which involves hopping with their strong hind legs. They are highly social animals and live in groups known as mobs. Male kangaroos are much larger than females and have powerful hind legs, which they use in boxing matches during mating season. Some species, like the red kangaroo, can reach speeds of over 35 miles per hour.';
  }
  else if (userMessageLower.includes('zebra') || (userMessageLower.includes('zebras'))) {
    return 'Zebras are herbivorous animals found in Africa. They are closely related to horses and donkeys but are distinguished by their unique black and white striped coats. Each zebra\'s stripe pattern is unique, much like human fingerprints. Zebras live in herds for protection against predators, as their stripes help confuse and camouflage them in the wild. They primarily graze on grass but can also eat shrubs and trees. There are three main species of zebras: the plains zebra, mountain zebra, and Grevy\'s zebra. They are known for their social behavior and strong group bonds.';
  }
  else if (userMessageLower.includes('panda') || (userMessageLower.includes('pandas'))) {
    return 'Pandas are large bear-like mammals found in China. They are primarily herbivores, with bamboo making up around 99% of their diet. Pandas have a low metabolic rate and must consume large amounts of bamboo to meet their nutritional needs. They are easily recognizable due to their black and white fur, with distinctive black patches around their eyes, ears, and limbs. Pandas are solitary animals, with each one marking its territory to avoid conflict with others. Due to habitat destruction and low reproductive rates, pandas are an endangered species, though conservation efforts have led to a gradual increase in their population.';
  }

  else if (userMessageLower.includes('bird')) {
    return 'I can provide information on various birds like eagles, parrots, sparrows, owls, and many more! Ask me about any bird!';
  }
  // Specific Bird Information (10 common birds)
  else if (userMessageLower.includes('eagle')) {
    return 'Eagles are large birds of prey known for their powerful beaks and sharp talons. They have keen eyesight, which allows them to spot prey from miles away. Eagles are often found near large bodies of water, where they hunt for fish, but they also prey on small mammals and birds. They are powerful fliers and are known for their impressive soaring abilities. The bald eagle is a well-known symbol of the United States, while golden eagles are commonly found in Europe and North America. Eagles build large nests, known as eyries, typically located in tall trees or on cliffs.';
  }
  else if (userMessageLower.includes('albatross')) {
    return 'The albatross is a large seabird known for its long, narrow wings that allow it to glide effortlessly over the ocean for long distances. These birds are found in the Southern Ocean and the North Pacific. Albatrosses are exceptional fliers, with some species able to fly for hours or even days without flapping their wings. Their diet mainly consists of squid, fish, and other marine life. Albatrosses are also known for their elaborate courtship rituals and long lifespan, with some living to over 60 years.';
  }
  else if (userMessageLower.includes('pelican')) {
    return 'Pelicans are large water birds known for their long bills and distinctive pouches beneath their beaks, which they use to catch fish. Found in coastal regions around the world, pelicans are excellent divers and often hunt by plunging into the water from the air to scoop up fish. They are social birds, often seen in large groups, and nest in colonies. There are several species of pelicans, including the brown pelican, which is found in the Americas, and the great white pelican, found in Africa, Europe, and Asia.';
  }
  else if (userMessageLower.includes('flamingo')) {
    return 'Flamingos are wading birds famous for their long necks and legs. These birds are often pink or red due to the pigments in the algae and crustaceans they eat. Flamingos live in large colonies in shallow lakes, lagoons, and wetlands. They are known for their unique feeding behavior, where they filter food from the water using their specialized bills. Flamingos typically stand on one leg while resting, a behavior that scientists believe helps conserve body heat. They are found in parts of Africa, Asia, and the Americas.';
  }
  else if (userMessageLower.includes('toucan')) {
    return 'Toucans are colorful birds native to Central and South America. They are best known for their large, bright beaks, which are disproportionately large compared to their body size. Despite their size, toucan beaks are surprisingly light due to their hollow structure. Toucans primarily feed on fruit, but they also eat insects, small reptiles, and bird eggs. They live in tropical forests and are often found in the canopy, where their vibrant colors help them blend into the environment. Their distinctive calls are an important part of their communication.';
  }
  else if (userMessageLower.includes('parrot')) {
    return 'Parrots are highly intelligent and colorful birds known for their ability to mimic human speech. Native to tropical and subtropical regions, parrots come in a variety of colors, including green, red, blue, and yellow. They are social birds and often live in flocks. Parrots are also known for their strong beaks, which they use to crack nuts and seeds. Some well-known parrot species include the African grey parrot, known for its intelligence, and the macaw, famous for its vibrant plumage.';
  }
  else if (userMessageLower.includes('pigeon')) {
    return 'Pigeons are a type of bird found in cities and rural areas worldwide. They are known for their homing ability, which has made them historically valuable for carrying messages. Pigeons have short legs, broad wings, and a small head, with most species having grayish plumage. They are highly adaptable birds, able to thrive in diverse environments, from forests to urban cities. Pigeons are herbivores, feeding on seeds, fruits, and plants. Their domesticated relatives are often kept as pets or used in competitive pigeon racing.';
  }
  else if (userMessageLower.includes('hawk')) {
    return 'Hawks are birds of prey known for their keen eyesight, which allows them to spot prey from a great distance. They are skilled hunters, often hunting small mammals, birds, and reptiles. Hawks have sharp talons and powerful beaks that they use to capture and tear apart their prey. They are found in a wide range of habitats, from forests and grasslands to deserts and urban areas. The red-tailed hawk is one of the most common species in North America, recognizable by its reddish tail feathers.';
  }
  else if (userMessageLower.includes('swallow')) {
    return 'Swallows are small, migratory birds known for their streamlined bodies and forked tails, which make them agile fliers. Swallows primarily feed on insects, catching them mid-air while flying. They are often seen swooping and darting in the sky during spring and summer months. Swallows migrate over long distances, often traveling between breeding grounds in Europe, Asia, and North America to warmer regions in the winter. Their nests are typically made from mud, and they are known to build nests under eaves of buildings or in cliff-side colonies.';
  }
  else if (userMessageLower.includes('robin')) {
    return 'Robins are small, migratory birds known for their bright red breasts. They are one of the most common and familiar birds in Europe and North America. Robins are omnivorous, feeding on insects, berries, and seeds. They are often associated with the arrival of spring, as they are one of the first birds to return from migration. Their melodious song, which they sing to defend their territory, is another distinctive feature. Robins are often seen hopping around lawns and gardens, looking for food.';
  }
  else if (userMessageLower.includes('crow')) {
    return 'Crows are highly intelligent birds that are found in many parts of the world. Known for their ability to solve complex problems, crows are capable of using tools, such as sticks, to obtain food. They have strong social structures and are known to live in large groups called murders. Crows are omnivores and will eat a wide variety of foods, from small animals to carrion and human food scraps. They are often seen in urban environments, as they are highly adaptable to living near humans. Crows also communicate with a wide range of vocalizations and body language.';
  }
  // Continue adding information for birds and other animals if needed...
  else {
    return 'I didn\'t quite catch that. Please ask about cars, animals, or birds, and I\'ll provide more details!';
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
