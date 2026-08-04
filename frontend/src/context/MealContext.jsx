import { createContext, useState } from "react";

export const MealContext = createContext();

function MealProvider({ children }) {
  const [mealHistory, setMealHistory] = useState([]);

  function addMeal(mealData) {
    const meal = {
      id: crypto.randomUUID(),

      createdAt: new Date().toISOString(),

      image: mealData.image,

      mealTitle:
        mealData.meal?.length > 0
          ? mealData.meal.map((item) => item.name).join(", ")
          : "Unknown Meal",

      score: mealData.score,

      meal: mealData.meal,

      nutrients: mealData.nutrients,

      healthInsights: mealData.healthInsights,

      suggestions: mealData.suggestions,
    };

    setMealHistory((prev) => [meal, ...prev]);
  }

  return (
    <MealContext.Provider
      value={{
        mealHistory,
        addMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

export default MealProvider;