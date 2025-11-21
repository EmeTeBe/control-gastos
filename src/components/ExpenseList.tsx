import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = useMemo(
    () =>
      state.currentCategory
        ? state.expenses.filter(
            (expense) => expense.category === state.currentCategory
          )
        : state.expenses,
    [state.expenses, state.currentCategory]
  );

  const isEmpty = useMemo(
    () => filteredExpenses.length === 0,
    [filteredExpenses]
  );

  return (
    <div className="mt-6 bg-white rounded-lg p-5 shadow-lg">
      {isEmpty ? (
        <p className="text-gray-600 sm:text-2xl font-bold text-center">
          No hay gastos
        </p>
      ) : (
        <>
          <p className="text-gray-600 sm:text-2xl font-bold sm:mb-5 px-2">
            Listado de Gastos
          </p>
          {filteredExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
