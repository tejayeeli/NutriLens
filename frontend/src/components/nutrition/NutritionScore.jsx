import "./NutritionScore.css";

function NutritionScore({ score }) {
  let label = "";
  let color = "";

  if (score >= 90) {
    label = "Excellent Choice";
    color = "#16a34a";
  } else if (score >= 75) {
    label = "Healthy Choice";
    color = "#22c55e";
  } else if (score >= 60) {
    label = "Balanced Choice";
    color = "#84cc16";
  } else if (score >= 40) {
    label = "Fair Choice";
    color = "#f59e0b";
  } else {
    label = "Poor Choice";
    color = "#ef4444";
  }

  return (
    <div className="nutrition-score">

      <h3
        className="score-number"
        style={{ color }}
      >
        {score}
      </h3>

      <span
        className="score-badge"
        style={{
          backgroundColor: color,
        }}
      >
        {label}
      </span>

      <p className="score-text">
        Nutrition Score
      </p>

    </div>
  );
}

export default NutritionScore;