const data = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "John Doe",
    age: 10,
    gender: "Male",
    from: "New York, USA",
    organizationName: "Hope Foundation",
    organizationAddress: "123 Charity Lane, New York, USA",
    textFromChild:
      "Hi! I love exploring new things and helping others. I am a very curious and adventurous child. I enjoy playing soccer and cycling. My dream is to become a professional athlete and travel the world.",
    status: "Available",
    health: "Good",
    hobbies: ["Soccer", "Drawing"],
    isFavourite: false,
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Emily Smith",
    age: 12,
    gender: "Female",
    from: "London, UK",
    organizationName: "Helping Hands",
    organizationAddress: "456 Compassion Street, London, UK",
    textFromChild:
      "My dream is to make the world a better place. I am a very creative and imaginative child. I enjoy reading, gardening, and crafting. I love spending time with my friends and family.",
    status: "In Approval",
    health: "Excellent",
    hobbies: ["Reading", "Gardening", "Crafting"],
    isFavourite: false,
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Michael Brown",
    age: 9,
    gender: "Male",
    from: "Sydney, Australia",
    organizationName: "Future Bright",
    organizationAddress: "789 Inspiration Ave, Sydney, Australia",
    textFromChild:
      "Exploring science and technology fascinates me. I am a very inquisitive and intelligent child. I enjoy conducting fun experiments and solving puzzles.",
    status: "Available",
    health: "Good",
    hobbies: ["Cycling", "Puzzles"],
    isFavourite: false,
  },

  {
    id: 4,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Sophia Johnson",
    age: 11,
    gender: "Female",
    from: "Toronto, Canada",
    organizationName: "Kids First",
    organizationAddress: "321 Care Drive, Toronto, Canada",
    textFromChild:
      "I love spending time outdoors and learning about nature. I am a very active and energetic child. I enjoy dancing, singing, and painting.",
    status: "In Approval",
    health: "Fair",
    hobbies: ["Dancing", "Singing"],
    isFavourite: false,
  },
  {
    id: 5,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Ethan Wilson",
    age: 13,
    gender: "Male",
    from: "Cape Town, South Africa",
    organizationName: "Bright Futures",
    organizationAddress: "654 Opportunity Blvd, Cape Town, South Africa",
    textFromChild:
      "My favorite activity is playing chess and reading books. I am a very strategic and intellectual child. I enjoy playing chess, reading, and solving puzzles.",
    status: "Available",
    health: "Excellent",
    hobbies: ["Chess", "Reading", "Puzzles"],
    isFavourite: false,
  },
  {
    id: 6,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Olivia Taylor",
    age: 8,
    gender: "Female",
    from: "Mumbai, India",
    organizationName: "Hope Foundation",
    organizationAddress: "123 Charity Lane, Mumbai, India",
    textFromChild:
      "I enjoy painting pictures of my surroundings. I am a very creative and artistic child. I enjoy painting, gardening, and exploring nature.",
    status: "Available",
    health: "Good",
    hobbies: ["Painting", "Gardening"],
    isFavourite: false,
  },
  {
    id: 7,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Liam Anderson",
    age: 12,
    gender: "Male",
    from: "Tokyo, Japan",
    organizationName: "Helping Hands",
    organizationAddress: "456 Compassion Street, Tokyo, Japan",
    textFromChild:
      "My dream is to travel the world. I am a very adventurous and curious child. I enjoy traveling, cycling, and exploring new places.",
    status: "In Approval",
    health: "Excellent",
    hobbies: ["Traveling", "Cycling"],
    isFavourite: false,
  },
  {
    id: 8,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Emma Thomas",
    age: 9,
    gender: "Female",
    from: "Paris, France",
    organizationName: "Future Bright",
    organizationAddress: "789 Inspiration Ave, Paris, France",
    textFromChild:
      "I enjoy exploring art and writing stories. I am a very creative and imaginative child. I enjoy art, writing, and reading.",
    status: "Available",
    health: "Fair",
    hobbies: ["Art", "Writing"],
    isFavourite: false,
  },
  {
    id: 9,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Noah Harris",
    age: 10,
    gender: "Male",
    from: "Berlin, Germany",
    organizationName: "Kids First",
    organizationAddress: "321 Care Drive, Berlin, Germany",
    textFromChild:
      "My favorite thing is building LEGO structures. I am a very creative and innovative child. I enjoy building, engineering, and solving puzzles.",
    status: "In Approval",
    health: "Good",
    hobbies: ["LEGO", "Engineering"],
    isFavourite: false,
  },
  {
    id: 10,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Ava Martin",
    age: 13,
    gender: "Female",
    from: "Moscow, Russia",
    organizationName: "Bright Futures",
    organizationAddress: "654 Opportunity Blvd, Moscow, Russia",
    textFromChild:
      "I love cooking and making new recipes with my friends. I am a very creative and innovative child. I enjoy cooking, baking, and experimenting with new recipes.",
    status: "Available",
    health: "Excellent",
    hobbies: ["Cooking", "Baking"],
    isFavourite: false,
  },

  {
    id: 11,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "James Wilson",
    age: 9,
    gender: "Male",
    from: "New York, USA",
    organizationName: "Hope Foundation",
    organizationAddress: "123 Charity Lane, New York, USA",
    textFromChild:
      "I love playing soccer and hope to become a professional athlete. I am a very active and energetic child. I enjoy playing soccer, cycling, and exploring new places.",
    status: "Available",
    health: "Good",
    hobbies: ["Soccer", "Cycling"],
    isFavourite: false,
  },
  {
    id: 12,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Mia Brown",
    age: 11,
    gender: "Female",
    from: "London, UK",
    organizationName: "Helping Hands",
    organizationAddress: "456 Compassion Street, London, UK",
    textFromChild:
      "I enjoy reading fantasy books and writing short stories. I am a very creative and imaginative child. I enjoy reading, writing, and gardening.",
    status: "In Approval",
    health: "Excellent",
    hobbies: ["Reading", "Writing", "Gardening"],
    isFavourite: false,
  },
  {
    id: 13,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Lucas Taylor",
    age: 14,
    gender: "Male",
    from: "Sydney, Australia",
    organizationName: "Future Bright",
    organizationAddress: "789 Inspiration Ave, Sydney, Australia",
    textFromChild:
      "I love exploring science and conducting fun experiments. I am a very curious and intelligent child. I enjoy science experiments, cycling, and exploring new places.",
    status: "Available",
    health: "Good",
    hobbies: ["Science Experiments", "Cycling"],
    isFavourite: false,
  },
  {
    id: 14,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Amelia Johnson",
    age: 12,
    gender: "Female",
    from: "Toronto, Canada",
    organizationName: "Kids First",
    organizationAddress: "321 Care Drive, Toronto, Canada",
    textFromChild:
      "Dancing and singing with my friends makes me happy. I am a very active and energetic child. I enjoy dancing, singing, and painting.",
    status: "In Approval",
    health: "Good",
    hobbies: ["Dancing", "Singing", "Painting"],
    isFavourite: false,
  },
  {
    id: 15,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Henry Thomas",
    age: 10,
    gender: "Male",
    from: "Cape Town, South Africa",
    organizationName: "Bright Futures",
    organizationAddress: "654 Opportunity Blvd, Cape Town, South Africa",
    textFromChild:
      "I enjoy building and fixing things around me. I am a very creative and innovative child. I enjoy engineering, LEGO, and solving puzzles.",
    status: "Available",
    health: "Excellent",
    hobbies: ["Engineering", "LEGO"],
    isFavourite: false,
  },
  {
    id: 16,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Harper Anderson",
    age: 8,
    gender: "Female",
    from: "Mumbai, India",
    organizationName: "Hope Foundation",
    organizationAddress: "123 Charity Lane, Mumbai, India",
    textFromChild:
      "I love baking and decorating cakes with my friends. I am a very creative and innovative child. I enjoy baking, cooking, and experimenting with new recipes.",
    status: "Available",
    health: "Good",
    hobbies: ["Baking", "Cooking"],
    isFavourite: false,
  },
  {
    id: 17,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Alexander Wilson",
    age: 13,
    gender: "Male",
    from: "Tokyo, Japan",
    organizationName: "Helping Hands",
    organizationAddress: "456 Compassion Street, Tokyo, Japan",
    textFromChild:
      "I want to travel and explore new places around the world. I am a very adventurous and curious child. I enjoy traveling, photography, and exploring new places.",
    status: "In Approval",
    health: "Excellent",
    hobbies: ["Traveling", "Photography"],
    isFavourite: false,
  },
  {
    id: 18,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Charlotte Martin",
    age: 10,
    gender: "Female",
    from: "Paris, France",
    organizationName: "Future Bright",
    organizationAddress: "789 Inspiration Ave, Paris, France",
    textFromChild:
      "Art and crafts are my favorite hobbies. I am a very creative and artistic child. I enjoy art, crafting, and exploring new places.",
    status: "Available",
    health: "Fair",
    hobbies: ["Art", "Crafting"],
    isFavourite: false,
  },
  {
    id: 19,
    imageUrl: "https://via.placeholder.com/150",
    title: "Master",
    name: "Benjamin Harris",
    age: 12,
    gender: "Male",
    from: "Berlin, Germany",
    organizationName: "Kids First",
    organizationAddress: "321 Care Drive, Berlin, Germany",
    textFromChild:
      "I like solving puzzles and playing chess. I am a very strategic and intellectual child. I enjoy puzzles, chess, and exploring new places.",
    status: "Available",
    health: "Good",
    hobbies: ["Puzzles", "Chess"],
    isFavourite: false,
  },
  {
    id: 20,
    imageUrl: "https://via.placeholder.com/150",
    title: "Miss",
    name: "Isabella Taylor",
    age: 9,
    gender: "Female",
    from: "Moscow, Russia",
    organizationName: "Bright Futures",
    organizationAddress: "654 Opportunity Blvd, Moscow, Russia",
    textFromChild:
      "I enjoy singing and performing in front of people. I am a very creative and artistic child. I enjoy singing, dancing, and performing in front of people.",
    status: "In Approval",
    health: "Excellent",
    hobbies: ["Singing", "Dancing"],
    isFavourite: false,
  },
];

export default data;
