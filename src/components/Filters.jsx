import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
 return (
  <div className='filtros sombra contenedor'>
   <form>
    <div className='campo'>
     <label>Filter expenses</label>
     <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value=''>-- All categories --</option>
      <option value='savings'>Savings</option>
      <option value='food'>Food</option>
      <option value='house'>House</option>
      <option value='expenses'>Other payments</option>
      <option value='entertainment'>Entertainment</option>
      <option value='health'>Health</option>
      <option value='subscriptions'>Subscriptions</option>
     </select>
    </div>
   </form>
  </div>
 );
};

export default Filters;
