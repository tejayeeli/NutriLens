import "./ProfileStats.css";

import { useContext } from "react";

import { MealContext } from "../../context/MealContext";

import StatCard from "./StatCard";

function ProfileStats() {

  const { mealHistory } = useContext(MealContext);

  const mealsAnalyzed = mealHistory.length;

  const averageScore =
    mealsAnalyzed === 0
      ? 0
      : Math.round(
          mealHistory.reduce(
            (sum, meal) => sum + meal.score,
            0
          ) / mealsAnalyzed
        );

  const bestScore =
    mealsAnalyzed === 0
      ? 0
      : Math.max(
          ...mealHistory.map((meal) => meal.score)
        );

  const healthyMeals =
    mealHistory.filter(
      (meal) => meal.score >= 80
    ).length;

  const stats = [
    {
      title: "Meals Analyzed",
      value: mealsAnalyzed,
    },
    {
      title: "Average Score",
      value: averageScore,
    },
    {
      title: "Best Score",
      value: bestScore,
    },
    {
      title: "Healthy Meals",
      value: healthyMeals,
    },
  ];

  return (
    <section className="profile-stats">

      {stats.map((stat) => (

        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
        />

      ))}

    </section>
  );
}

export default ProfileStats;