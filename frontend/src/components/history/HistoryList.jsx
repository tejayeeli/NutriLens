import { useState } from "react";

import "./HistoryList.css";

import HistoryCard from "./HistoryCard";
import HistoryModal from "./HistoryModal";
import EmptyHistory from "./EmptyHistory";

function HistoryList({ meals }) {

  const [selectedMeal, setSelectedMeal] = useState(null);

  if (meals.length === 0) {
    return <EmptyHistory />;
  }

  return (
    <>
      <section className="history-list">

        {meals.map((meal) => (

          <HistoryCard
            key={meal.id}
            meal={meal}
            onView={() => setSelectedMeal(meal)}
          />

        ))}

      </section>

      <HistoryModal
        meal={selectedMeal}
        onClose={() => setSelectedMeal(null)}
      />
    </>
  );
}

export default HistoryList;