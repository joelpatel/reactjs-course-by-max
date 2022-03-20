import { useState, useEffect } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("");

  const changeYearFilter = (filterYear) => {
    setYearFilter(filterYear);
  };

  useEffect(() => {
    console.log(yearFilter);
  }, [yearFilter]);

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYearFilter={changeYearFilter} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        />
        <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        />
        <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        />
        <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
