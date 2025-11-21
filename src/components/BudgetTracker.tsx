import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { state, totalExpenses, availableBudget, dispatch } = useBudget();

  const percentageSpent = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentageSpent}
          styles={buildStyles({
            pathColor: percentageSpent > 79 ? "#dc2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textSize: 8,
            textColor: percentageSpent > 79 ? "#dc2626" : "#3B82F6",
          })}
          text={`${percentageSpent}% Gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 sm:w-full rounded-lg shadow-lg uppercase text-white font-bold p-2 cursor-pointer hover:bg-pink-800"
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={availableBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
