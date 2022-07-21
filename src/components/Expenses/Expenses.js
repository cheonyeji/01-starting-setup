import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const enteredYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onEnteredYear={enteredYearHandler}
        />
        {props.data.map((data) => (
          <ExpenseItem
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
