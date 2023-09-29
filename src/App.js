import React,{useState} from 'react';

import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES=[
    {id:'e1',title:'Bike insurance',amount:1296.4, date:new Date(2023,8,2)},
    {id:'e2',title:'News Paper',amount:285, date:new Date(2021,6,2)},
    {id:'e3',title:'Vegetables',amount:150, date:new Date(2020,3,2)},
    {id:'e4',title:'Power bill',amount:896.4, date:new Date(2020,5,2)},
];
const App=()=> {
    const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

    const addEXpense=expense=>{
        setExpenses(prevExpenses=>{
            return [expense,...prevExpenses];
        });
    };

    return(
        <div>
            <NewExpenses onAddExpense={addEXpense}/>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;