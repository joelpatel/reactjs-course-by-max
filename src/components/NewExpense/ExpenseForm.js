import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //   useEffect(() => {
  //     console.log(userInput);
  //   }, [userInput]);

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({ // NOTE: this is not valid, it'll work but it's wrong
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // }); // because react schedules state up => thus if lot of state update requests then you won't be accessing the latest state elsewhere

    setUserInput((prevState) => {
      // react keeps all the scheduled changes in my and gives the latest state in prevState
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  /* // useEffect is a react Hook.
  useEffect(() => {
    console.log("useEffect called ==> enteredTitle = ", enteredTitle);
  }, [enteredTitle]); 
  */

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate.replace(/-/g, "/")),
    };
    setUserInput((prevState) => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
