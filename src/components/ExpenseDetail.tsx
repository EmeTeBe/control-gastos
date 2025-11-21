import { useMemo } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import { formatDate } from "../helpers";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/catagories";
import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";

type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const { dispatch } = useBudget();

  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() =>
          dispatch({ type: "get-expense-by-id", payload: { id: expense.id } })
        }
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() =>
          dispatch({ type: "delete-expense", payload: { id: expense.id } })
        }
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList type={Type.IOS}>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="flex items-center gap-5 bg-white py-5 sm:p-5 w-full border-b border-gray-200">
          <div>
            <img
              src={`/icono_${categoryInfo.icon}.svg`}
              alt="icono del gasto"
              className="sm:w-16 w-10"
            />
          </div>
          <div className="felx flex-1">
            <p className="text-sm uppercase font-bold text-slate-400 mb-1">
              {categoryInfo.name}
            </p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">
              {formatDate(expense.date!.toString())}
            </p>
          </div>
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}
