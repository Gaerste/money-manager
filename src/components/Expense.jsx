import {
 LeadingActions,
 TrailingActions,
 SwipeAction,
 SwipeableList,
 SwipeableListItem,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";
import IconSavings from "../img/icono_ahorro.svg";
import IconHouse from "../img/icono_casa.svg";
import IconFood from "../img/icono_comida.svg";
import IconExpenses from "../img/icono_gastos.svg";
import IconEntertainment from "../img/icono_ocio.svg";
import IconHealth from "../img/icono_salud.svg";
import IconSubscriptions from "../img/icono_suscripciones.svg";

const Expense = ({ expense, setExpenseEdit, deleteExpense }) => {
 const { category, name, amount, id, date } = expense;

 const dictionaryIcons = {
  savings: IconSavings,
  house: IconHouse,
  food: IconFood,
  expenses: IconExpenses,
  entertainment: IconEntertainment,
  health: IconHealth,
  subscriptions: IconSubscriptions,
 };

 const leadingActions = () => (
  <LeadingActions>
   <SwipeAction onClick={() => setExpenseEdit(expense)}>Edit</SwipeAction>
  </LeadingActions>
 );
 const trailingActions = () => (
  <TrailingActions>
   <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>Delete</SwipeAction>
  </TrailingActions>
 );

 return (
  <SwipeableList>
   <SwipeableListItem
    leadingActions={leadingActions()}
    trailingActions={trailingActions()}
   >
    <div className='gasto sombra'>
     <div className='contenido-gasto'>
      <img src={dictionaryIcons[category]} alt='Expense Icon' />
      <div className='descripcion-gasto'>
       <p className='categoria'>{category}</p>
       <p className='nombre-gasto'>{name}</p>
       <p className='fecha-gasto'>
        Added on: <span>{formatDate(date)}</span>
       </p>
      </div>
     </div>
     <p className='cantidad-gastos'>${amount}</p>
    </div>
   </SwipeableListItem>
  </SwipeableList>
 );
};

export default Expense;
