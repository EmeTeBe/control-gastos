import { createContext } from "react";
import type { BudgetActions, BudgetState } from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
  totalExpenses: number;
  availableBudget: number;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);
