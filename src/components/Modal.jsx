import { useState, useEffect } from "react";
import Message from "./Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({
 setModal,
 animateModal,
 setAnimateModal,
 saveExpenses,
 expenseEdit,
 setExpenseEdit,
}) => {
 const [error, setError] = useState("");
 const [name, setName] = useState("");
 const [amount, setAmount] = useState("");
 const [category, setCategory] = useState("");
 const [date, setDate] = useState("");
 const [id, setId] = useState("");

 useEffect(() => {
  if (Object.keys(expenseEdit).length > 0) {
   setName(expenseEdit.name);
   setAmount(expenseEdit.amount);
   setCategory(expenseEdit.category);
   setDate(expenseEdit.date);
   setId(expenseEdit.id);
  }
 }, []);

 const hideModal = () => {
  setAnimateModal(false);
  setExpenseEdit({});
  setTimeout(() => {
   setModal(false);
  }, 500);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if ([name, amount, category].includes("")) {
   setError("All fields are required");
  }
  setTimeout(() => {
   setError("");
  }, 3000);
  saveExpenses({ name, amount, category, id, date });
  return;
 };

 return (
  <div className='modal'>
   <div className='cerrar-modal'>
    <img src={CloseBtn} alt='Close Button' onClick={hideModal} />
   </div>
   <form
    className={`formulario ${animateModal ? "animar" : "cerrar"}`}
    onSubmit={handleSubmit}
   >
    <legend>{expenseEdit.name ? "Edit expense" : "New expense"}</legend>
    {error && <Message type='error'>{error}</Message>}
    <div className='campo'>
     <label htmlFor='name'>Expense name</label>
     <input
      id='name'
      type='text'
      placeholder='Add your expense name'
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
    </div>
    <div className='campo'>
     <label htmlFor='number'>Amount</label>
     <input
      id='number'
      type='number'
      placeholder='Add the amount spent'
      value={amount}
      onChange={(e) => setAmount(Number(e.target.value))}
     />
    </div>
    <div className='campo'>
     <label htmlFor='category'>Category</label>
     <select
      id='Category'
      value={category}
      onChange={(e) => setCategory(e.target.value)}
     >
      <option value=''>-- Please select --</option>
      <option value='savings'>Savings</option>
      <option value='food'>Food</option>
      <option value='house'>House</option>
      <option value='expenses'>Other payments</option>
      <option value='entertainment'>Entertainment</option>
      <option value='health'>Health</option>
      <option value='subscriptions'>Subscriptions</option>
     </select>
    </div>
    <input
     type='submit'
     value={expenseEdit.name ? "Save changes" : "Add expense"}
    />
   </form>
  </div>
 );
};

export default Modal;
