import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("All");
  // const [expenses, setExpenses] = useState(props.expenses);

  const changeYearFilter = (filterYear) => {
    setYearFilter(filterYear);
  };

  const expenses = props.expenses.filter((expense) => {
    if (yearFilter !== "All") {
      return expense.date.getFullYear().toString() === yearFilter;
    } else {
      return true;
    }
  });

  // useEffect(() => {
  //   setExpenses(props.expenses);
  // }, [props.expenses]);

  // useEffect(() => {
  //   setExpenses(() => {
  //     let newExpenses = undefined;
  //     if (yearFilter !== "All") {
  //       newExpenses = props.expenses.filter(
  //         (expense) => expense.date.getFullYear().toString() === yearFilter
  //       );
  //     } else {
  //       newExpenses = props.expenses;
  //     }

  //     return newExpenses;
  //   });
  // }, [yearFilter, props.expenses]);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFilter}
        onChangeYearFilter={changeYearFilter}
      />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
