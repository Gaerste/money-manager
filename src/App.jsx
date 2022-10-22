import { useState, useEffect } from "react";
import { getId } from "./helpers";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Filters from "./components/Filters";
import ExpensesList from "./components/ExpensesList";
import NewIconExpenses from "./img/nuevo-gasto.svg";

const App = () => {
 const [budget, setBudget] = useState(
  Number(localStorage.getItem("budget") ?? 0)
 );
 const [isValidBudget, setIsValidBudget] = useState(false);
 const [modal, setModal] = useState(false);
 const [animateModal, setAnimateModal] = useState(false);
 const [expenses, setExpenses] = useState(
  localStorage.getItem("expenses")
   ? JSON.parse(localStorage.getItem("expenses"))
   : []
 );
 const [filter, setFilter] = useState("");
 const [filteredExpenses, setFilteredExpenses] = useState([]);
 //useState for add the obj of the expenses list
 const [expenseEdit, setExpenseEdit] = useState({});
 //Edit useEffect of Expense.jsx
 useEffect(() => {
  if (Object.keys(expenseEdit).length > 0) {
   setModal(true);
   setTimeout(() => {
    setAnimateModal(true);
   }, 500);
  }
 }, [expenseEdit]);

 useEffect(() => {
  localStorage.setItem("budget", budget ?? 0);
 }, [budget]);

 useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
 }, [expenses]);

 useEffect(() => {
  if (filter) {
   const filteredExpenses = expenses.filter(
    (expense) => expense.category === filter
   );
   setFilteredExpenses(filteredExpenses);
  }
 }, [filter]);

 useEffect(() => {
  const budgetLS = Number(localStorage.getItem("budget")) ?? 0;

  if (budgetLS > 0) {
   setIsValidBudget(true);
  }
 }, []);

 const handleNewExpense = () => {
  setModal(true);
  setExpenseEdit({});
  setTimeout(() => {
   setAnimateModal(true);
  }, 500);
 };

 const saveExpenses = (expense) => {
  if (expense.id) {
   //update
   const updateExpenses = expenses.map((expenseState) =>
    expenseState.id === expense.id ? expense : expenseState
   );
   setExpenses(updateExpenses);
   setExpenseEdit({});
  } else {
   //new expense
   expense.id = getId();
   expense.date = Date.now();
   setExpenses([...expenses, expense]);
  }

  setAnimateModal(false);
  setTimeout(() => {
   setModal(false);
  }, 500);
 };

 const deleteExpense = (id) => {
  const updateExpense = expenses.filter((expense) => expense.id !== id);
  setExpenses(updateExpense);
 };

 return (
  <div className={modal ? "fijar" : ""}>
   <Header
    budget={budget}
    setBudget={setBudget}
    isValidBudget={isValidBudget}
    setIsValidBudget={setIsValidBudget}
    expenses={expenses}
    setExpenses={setExpenses}
   />
   {isValidBudget && (
    <>
     <main>
      <Filters filter={filter} setFilter={setFilter} />
      <ExpensesList
       expenses={expenses}
       setExpenseEdit={setExpenseEdit}
       deleteExpense={deleteExpense}
       filter={filter}
       filteredExpenses={filteredExpenses}
      />
     </main>
     <div className='nuevo-gasto'>
      <img
       src={NewIconExpenses}
       alt='New Icon Expense'
       onClick={handleNewExpense}
      />
     </div>
    </>
   )}

   {modal && (
    <Modal
     setModal={setModal}
     animateModal={animateModal}
     setAnimateModal={setAnimateModal}
     saveExpenses={saveExpenses}
     expenseEdit={expenseEdit}
     setExpenseEdit={setExpenseEdit}
    />
   )}
  </div>
 );
};

export default App;
