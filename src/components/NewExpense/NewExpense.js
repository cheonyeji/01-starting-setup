import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const btnClickHandler = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={btnClickHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSetShowForm={setShowForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
