import "./NutritionCard.css";

import MealCard from "./MealCard";
import NutritionScore from "./NutritionScore";
import NutritionBar from "./NutritionBar";
import HealthInsights from "./HealthInsights";
import SuggestionsCard from "./SuggestionsCard";

function NutritionCard({ nutrition }) {
  return (
    <section className="nutrition-card">
      <h2>Nutrition Analysis</h2>

      <MealCard meal={nutrition.meal || []} />

      <NutritionScore score={nutrition.score || 0} />

      <div className="nutrition-bars">
        {(nutrition.nutrients || []).map((nutrient) => (
          <NutritionBar
            key={nutrient.name}
            nutrient={nutrient}
          />
        ))}
      </div>

      {nutrition.healthInsights &&
        nutrition.healthInsights.length > 0 && (
          <HealthInsights
            insights={nutrition.healthInsights}
          />
        )}

      <SuggestionsCard
        suggestions={nutrition.suggestions || []}
      />
    </section>
  );
}

export default NutritionCard;