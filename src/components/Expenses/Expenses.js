import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.data.map((data) => (
        <ExpenseItem title={data.title} amount={data.amount} date={data.date} />
      ))}
    </Card>
  );
};

export default Expenses;
