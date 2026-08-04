import { useEffect } from "react";

import "./HistoryModal.css";

import MealCard from "../nutrition/MealCard";
import NutritionScore from "../nutrition/NutritionScore";
import NutritionBar from "../nutrition/NutritionBar";
import HealthInsights from "../nutrition/HealthInsights";
import SuggestionsCard from "../nutrition/SuggestionsCard";

function HistoryModal({ meal, onClose }) {

  useEffect(() => {

    if (!meal) return;

    function handleEscape(event) {

      if (event.key === "Escape") {
        onClose();
      }

    }

    document.addEventListener("keydown", handleEscape);

    return () =>
      document.removeEventListener("keydown", handleEscape);

  }, [meal, onClose]);

  if (!meal) return null;

  return (
    <div
      className="history-modal-overlay"
      onClick={onClose}
    >
      <div
        className="history-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="history-modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{meal.mealTitle}</h2>

        <p className="history-modal-subtitle">
          Nutrition Analysis
        </p>

        <MealCard meal={meal.meal} />

        <NutritionScore score={meal.score} />

        <div className="nutrition-bars">
          {meal.nutrients.map((nutrient) => (
            <NutritionBar
              key={nutrient.name}
              nutrient={nutrient}
            />
          ))}
        </div>

        <HealthInsights
          insights={meal.healthInsights}
        />

        <SuggestionsCard
          suggestions={meal.suggestions}
        />
      </div>
    </div>
  );
}

export default HistoryModal;