import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useBudget } from "../hooks/useBudget";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseModal() {
  const { state, dispatch } = useBudget();

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button type="button" onClick={() => dispatch({ type: "show-modal" })}>
          <PlusCircleIcon className="w-16 h-16 text-blue-600 rounded-full" />
        </button>
      </div>

      <Dialog
        open={state.modal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => dispatch({ type: "close-modal" })}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/60" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <ExpenseForm />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
