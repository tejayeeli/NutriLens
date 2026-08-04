import "./MealCard.css";

function MealCard({ meal }) {
  return (
    <div className="meal-card">

      <h3>🍽️ Detected Meal</h3>

      <div className="meal-list">

        {meal.map((item) => (
          <div
            className="meal-item"
            key={item.name}
          >
            <span className="meal-name">
              {item.name}
            </span>

            <span className="meal-serving">
              {item.estimatedServing}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
export default MealCard;