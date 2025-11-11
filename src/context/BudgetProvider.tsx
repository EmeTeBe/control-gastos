import { useReducer } from "react";
import { budgetReducer, initialState } from "../reducers/budget-reducer";
import { BudgetContext } from "./BudgetContext";

export const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
