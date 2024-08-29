let budget = 0;
let caloriesConsumed = 0;
let caloriesBurned = 0;

function addCalories(mealType) {
    const mealInput = document.getElementById(mealType);
    const calories = parseInt(mealInput.value);
    if (!isNaN(calories) && calories > 0) {
        caloriesConsumed += calories;
        document.getElementById('caloriesConsumed').textContent = caloriesConsumed;
    }
    mealInput.value = '';
}

function addExercise() {
    const exerciseInput = document.getElementById('exercise');
    const calories = parseInt(exerciseInput.value);
    if (!isNaN(calories) && calories > 0) {
        caloriesBurned += calories;
        document.getElementById('caloriesBurned').textContent = caloriesBurned;
    }
    exerciseInput.value = '';
}

function calculateDeficit() {
    const budgetInput = document.getElementById('budget');
    budget = parseInt(budgetInput.value);
    if (isNaN(budget)) {
        budget = 0;
    }
    const deficit = budget - (caloriesConsumed - caloriesBurned);
    document.getElementById('calorieBudget').textContent = budget;
    document.getElementById('calorieDeficit').textContent = deficit;
}
