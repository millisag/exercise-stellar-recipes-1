document.addEventListener("DOMContentLoaded", () => {
   
    
    const recipesGrid = document.querySelector(".js-recipes-grid");

    if (!recipesGrid) return;

    // Generate and insert recipes
    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <button class="view-recipe-button" data-id="${recipe.id}">View Recipe</button>
        `;

        recipesGrid.appendChild(recipeCard);
    }); 

    // Event listener for recipe buttons
    recipesGrid.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-recipe-button")) {
            const recipeId = event.target.dataset.id;
            alert(`You clicked on recipe ID: ${recipeId}`);
            // Navigate or load recipe details dynamically
        }
    });
});

/* function renderRecipeList(recipes) {
    const recipesGrid = document.querySelector('.js-recipes-grid');
    if (!recipesGrid) {
        console.error("Element .js-recipes-grid not found!");
        return; 
    } // Error handling for missing grid element 

    const recipesHTML = recipes
        .map(recipe => `
            <div class="recipe-card">
                <img class="recipe-image" src="${recipe.image}" alt="${recipe.title}" width="300">
                <div class="recipe-details">
                    <h2 class="recipe-title">${recipe.title}</h2>
                    <p class="recipe-description">${recipe.description}</p>
                    <p class="recipe-ingredients"><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                    <ol class="steps-list">
    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>
                </div>
            </div>
        `)
        .join(''); // Display steps as an ordered list for readability 
    recipesGrid.innerHTML = recipesHTML; // Insert recipes into the grid using map method to improve efficiency; may be able to use when "View Recipe" is clicked  
} */