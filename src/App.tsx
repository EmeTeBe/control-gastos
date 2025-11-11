import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-blue-600 max-h-72 py-8">
        <h1 className="uppercase text-4xl text-white font-bold text-center">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-10 shadow-lg mt-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal />
          <ExpenseList />
        </main>
      )}
    </>
  );
}

export default App;
