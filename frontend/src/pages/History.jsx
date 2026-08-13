import { useEffect, useState } from "react";

import HistoryHeader from "../components/history/HistoryHeader";
import HistoryList from "../components/history/HistoryList";

import { getHistory } from "../services/api";

function History() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadHistory() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const data = await getHistory();

        setMeals(data);
      } catch (error) {
        console.error(error);

        setErrorMessage(
          error.message || "Unable to load meal history."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadHistory();
  }, []);

  return (
    <>
      <HistoryHeader />

      {isLoading && (
        <p className="loading-text">
          Loading your meal history...
        </p>
      )}

      {errorMessage && (
        <p className="error-text">
          ⚠️ {errorMessage}
        </p>
      )}

      {!isLoading && !errorMessage && (
        <HistoryList meals={meals} />
      )}
    </>
  );
}

export default History;