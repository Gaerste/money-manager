import { useState } from "react";
import Message from "./Message";

const Newbudget = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage("Not a valid estimate");
      return;
    }
    setMessage('')
    setIsValidBudget(true)
  };
  return (
    <div className='contenedor-presupuesto sombra'>
      <form className='formulario' onSubmit={handleBudget}>
        <div className='campo'>
          <label>Define budget</label>
          <input
            type='number'
            placeholder='Add budget'
            className='nuevo-presupuesto'
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <input type='submit' value='Add' />
        {message && <Message type='error'>{message}</Message>}
      </form>
    </div>
  );
};

export default Newbudget;
