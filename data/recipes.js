console.log("recipes.js is connected");

const recipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Parmesan Cheese",
      "Pancetta",
      "Black Pepper"
    ],
    steps: [
      "Cook spaghetti according to package instructions.",
      "In a bowl, whisk eggs and cheese.",
      "Cook pancetta until crispy.",
      "Combine spaghetti, pancetta, and egg mixture.",
      "Serve with extra cheese and pepper."
    ]
  },
  {
    id: "2",
    title: "Avocado Toast",
    image: "https://www.allrecipes.com/thmb/8NccFzsaq0_OZPDKmf7Yee-aG78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AvocadoToastwithEggFranceC4x3-bb87e3bbf1944657b7db35f1383fabdb.jpg",
    description: "A quick and healthy breakfast option with avocado and toast.",
    ingredients: [
      "Bread",
      "Avocado",
      "Salt",
      "Pepper",
      "Lemon Juice"
    ],
    steps: [
      "Toast the bread to your liking.",
      "Mash avocado with salt, pepper, and lemon juice.",
      "Spread avocado on toast and serve."
    ]
  },
  {
    id: "3",
    title: "Chicken Alfredo",
    image: "https://theeastcoastkitchen.com/wp-content/uploads/2024/12/Chicken-Fettuccine-Alfredo-06-min-1024x683.jpg",
    description: "Creamy Alfredo sauce over tender chicken and fettuccine.",
    ingredients: [
      "Fettuccine",
      "Chicken Breast",
      "Heavy Cream",
      "Parmesan Cheese",
      "Garlic",
      "Butter"
    ],
    steps: [
      "Cook fettuccine and set aside.",
      "Cook chicken until golden brown.",
      "Prepare Alfredo sauce with cream, garlic, butter, and cheese.",
      "Combine sauce with pasta and chicken.",
      "Serve hot with extra cheese."
    ]
  },
  {
    id: "4",
    title: "Caprese Salad",
    image: "https://www.allrecipes.com/thmb/Usj7zOLJSQ5xqw-4dwWarvPNjJg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-228126-caprese-salad-with-balsamic-reduction-ddmfs-2644-4x3-f32ac2b2fb9d4234884a752490fb015b.jpg",
    description: "A fresh and simple Italian salad with mozzarella, tomatoes, and basil.",
    ingredients: [
      "Fresh Mozzarella",
      "Tomatoes",
      "Fresh Basil",
      "Olive Oil",
      "Balsamic Glaze",
      "Salt",
      "Pepper"
    ],
    steps: [
      "Slice mozzarella and tomatoes.",
      "Layer slices with basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Sprinkle with salt and pepper."
    ]
  },
  {
    id: "5",
    title: "Chocolate Chip Cookies",
    image: "https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-threeByTwoMediumAt2X.jpg",
    description: "Classic cookies with gooey chocolate chips.",
    ingredients: [
      "All-Purpose Flour",
      "Butter",
      "Brown Sugar",
      "White Sugar",
      "Chocolate Chips",
      "Eggs",
      "Vanilla Extract",
      "Baking Soda",
      "Salt"
    ],
    steps: [
      "Preheat oven to 350°F (175°C).",
      "Mix wet and dry ingredients separately.",
      "Combine ingredients and fold in chocolate chips.",
      "Scoop dough onto baking sheet.",
      "Bake for 10-12 minutes."
    ]
  },
  {
    id: "6",
    title: "Vegetable Stir Fry",
    image: "https://www.budgetbytes.com/wp-content/uploads/2022/03/Easy-Vegetable-Stir-Fry-close.jpg",
    description: "A quick and healthy vegetable stir fry with soy sauce and garlic.",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell Peppers",
      "Snap Peas",
      "Soy Sauce",
      "Garlic",
      "Ginger",
      "Sesame Oil"
    ],
    steps: [
      "Heat sesame oil in a wok or skillet.",
      "Add garlic and ginger, sauté briefly.",
      "Add vegetables and stir fry until tender-crisp.",
      "Add soy sauce and toss to coat.",
      "Serve hot over rice or noodles."
    ]
  },
  {
    id: "7",
    title: "Margherita Pizza",
    image: "https://thepizzaheaven.com/wp-content/uploads/2021/07/Pizza-Margherita-1.jpg",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Fresh Mozzarella",
      "Fresh Basil",
      "Olive Oil"
    ],
    steps: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough.",
      "Spread tomato sauce evenly.",
      "Top with mozzarella slices and basil leaves.",
      "Bake for 10-15 minutes until golden brown."
    ]
  },
  {
    id: "8",
    title: "Beef Tacos",
    image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    description: "Flavorful beef tacos with fresh toppings.",
    ingredients: [
      "Ground Beef",
      "Taco Seasoning",
      "Taco Shells",
      "Lettuce",
      "Tomatoes",
      "Cheddar Cheese",
      "Sour Cream"
    ],
    steps: [
      "Cook ground beef with taco seasoning.",
      "Warm taco shells in the oven.",
      "Assemble tacos with beef and toppings.",
      "Serve with lime wedges."
    ]
  },
  {
    id: "9",
    title: "Lemonade",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2022/06/lemonade.jpg",
    description: "Refreshing homemade lemonade.",
    ingredients: [
      "Lemons",
      "Sugar",
      "Water",
      "Ice"
    ],
    steps: [
      "Juice the lemons.",
      "Dissolve sugar in water to make a syrup.",
      "Mix lemon juice, syrup, and water.",
      "Serve over ice."
    ]
  },
  {
    id: "10",
    title: "Banana Pancakes",
    image: "https://www.allrecipes.com/thmb/6x0Lw9L4MEU8INHnK4tXGRV9XWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20334-banana-pancakes-i-DDMFS-4x3-9f291f03044247d48c9ec26917952402.jpg",
    description: "Fluffy pancakes with ripe bananas.",
    ingredients: [
      "All-Purpose Flour",
      "Bananas",
      "Eggs",
      "Milk",
      "Butter",
      "Sugar",
      "Baking Powder",
      "Salt"
    ],
    steps: [
      "Mash bananas and mix with wet ingredients.",
      "Combine with dry ingredients to form batter.",
      "Cook pancakes on a griddle.",
      "Serve with syrup and butter."
    ]
  }
];
/* document.addEventListener("DOMContentLoaded", () => {
  renderRecipeList(recipes);
}); // Function to render the list of recipes; recipe objects and display logic shown together for readability */