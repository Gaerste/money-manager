import BudgetControl from "./BudgetControl";
import Newbudget from "./Newbudget";

const Header = ({
 expenses,
 setExpenses,
 budget,
 setBudget,
 isValidBudget,
 setIsValidBudget,
}) => {
 return (
  <header>
   <div className='container-header'>
    <h1>Expense manager</h1>
    <svg
     xmlns='http://www.w3.org/2000/svg'
     className='icon icon-tabler icon-tabler-chart-pie'
     width='52'
     height='52'
     viewBox='0 0 24 24'
     strokeWidth='1.5'
     stroke='#ffffff'
     fill='none'
     strokeLinecap='round'
     strokeLinejoin='round'
    >
     <path stroke='none' d='M0 0h24v24H0z' fill='none' />
     <path d='M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8' />
     <path d='M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5' />
    </svg>
   </div>
   {isValidBudget ? (
    <BudgetControl
     budget={budget}
     setBudget={setBudget}
     expenses={expenses}
     setExpenses={setExpenses}
     setIsValidBudget={setIsValidBudget}
    />
   ) : (
    <Newbudget
     budget={budget}
     setBudget={setBudget}
     isValidBudget={isValidBudget}
     setIsValidBudget={setIsValidBudget}
    />
   )}
  </header>
 );
};

export default Header;
