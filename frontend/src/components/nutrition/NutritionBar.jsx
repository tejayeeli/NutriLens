import "./NutritionBar.css";

function NutritionBar({ nutrient }) {
  return (
    <div className="nutrition-bar">

      <div className="nutrition-header">

        <span>{nutrient.name}</span>

        <span>{nutrient.value}</span>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{
            width: `${nutrient.percentage}%`,
          }}
        ></div>

      </div>

    </div>
  );
}

export default NutritionBar;