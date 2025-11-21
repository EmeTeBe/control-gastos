import { useMemo, useReducer } from "react";
import { budgetReducer, initialState } from "../reducers/budget-reducer";
import { BudgetContext } from "./BudgetContext";

export const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );

  const availableBudget = state.budget - totalExpenses;

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        totalExpenses,
        availableBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
