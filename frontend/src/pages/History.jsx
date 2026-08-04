import { useContext } from "react";

import { MealContext } from "../context/MealContext";

import HistoryHeader from "../components/history/HistoryHeader";
import HistoryList from "../components/history/HistoryList";

function History() {

  const { mealHistory } = useContext(MealContext);

  return (
    <>
      <HistoryHeader />

      <HistoryList meals={mealHistory} />
    </>
  );
}

export default History;