import React from "react";
import Expense from "./Expense";

const ExpensesList = ({
 expenses,
 setExpenseEdit,
 deleteExpense,
 filter,
 filteredExpenses,
}) => {
 return (
  <div className='listado-gastos contenedor'>
   {filter ? (
    <>
     <h2>
      {filteredExpenses.length ? "Expenses" : "No expenses in this category"}
     </h2>
     {filteredExpenses.map((expense) => (
      <Expense
       key={expense.id}
       expense={expense}
       setExpenseEdit={setExpenseEdit}
       deleteExpense={deleteExpense}
      />
     ))}
    </>
   ) : (
    <>
     <h2>{expenses.length ? "Expenses" : "No expenses"}</h2>
     {expenses.map((expense) => (
      <Expense
       key={expense.id}
       expense={expense}
       setExpenseEdit={setExpenseEdit}
       deleteExpense={deleteExpense}
      />
     ))}
    </>
   )}
  </div>
 );
};

export default ExpensesList;
