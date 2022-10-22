import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
 expenses,
 setExpenses,
 budget,
 setBudget,
 setIsValidBudget,
}) => {
 const [spent, setSpent] = useState(0);
 const [available, setAvailable] = useState(0);
 const [percentage, setPercentage] = useState(0);
 useEffect(() => {
  const totalSpent = expenses.reduce(
   (total, expense) => expense.amount + total,
   0
  );
  const totalAvailable = budget - totalSpent;
  //Calculate percentage
  const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

  setAvailable(totalAvailable);
  setSpent(totalSpent);
  setTimeout(() => {
   setPercentage(newPercentage);
  }, 1000);
 }, [expenses]);

 const formatQuantity = (quantity) => {
  return quantity.toLocaleString("en-US", {
   style: "currency",
   currency: "USD",
  });
 };

 const handleResetApp = () => {
  const result = confirm("Are you sure?");
  if (result) {
   setExpenses([]);
   setBudget(0);
   setIsValidBudget(false);
  }
 };

 return (
  <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
   <div>
    <CircularProgressbar
     value={percentage}
     text={`${percentage}% Spent`}
     styles={buildStyles({
      pathColor: percentage > 100 ? "#dc2626" : "#00ee00",
      trailColor: "#cbcbcb",
      textColor: percentage > 100 ? "#dc2626" : "#00ee00",
     })}
    />
   </div>
   <div className='contenido-presupuesto'>
    <button className='reset-app' type='button' onClick={handleResetApp}>
     Reset app
    </button>
    <p>
     <span>Budget:</span> {formatQuantity(budget)}
    </p>
    <p className={`${available < 0 ? "negativo" : ""}`}>
     <span>Available:</span> {formatQuantity(available)}
    </p>
    <p>
     <span>Spent:</span> {formatQuantity(spent)}
    </p>
   </div>
  </div>
 );
};

export default BudgetControl;
