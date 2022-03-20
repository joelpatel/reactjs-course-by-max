import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: "e" + (props.expensesLength + 1),
      ...enteredExpenseData,
      //   title: enteredExpenseData.title,
      //   amount: enteredExpenseData.amount,
      //   date: enteredExpenseData.date,
    };

    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
