import React,{useState} from 'react'

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';

import './Expenses.css'

const Expenses=(props)=>{
    const[filteredYear,setFilterYear]=useState('2020');

    const filterChange=selectYear=>{
        setFilterYear(selectYear);
    }

    const filterExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;

    });

    return(
        <div>
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} 
            onfilterChange={filterChange}/>
            <ExpensesChart expenses={filterExpenses}/>
            {filterExpenses.length===0?(<p className='error'>No expenses Found.</p>):(filterExpenses.map((expenses)=>(
                <ExpenseItem
                    key={expenses.id}
                    title={expenses.title} 
                    amount={expenses.amount} 
                    date={expenses.date}
                />
                ))
            )}
        </Card>
        </div>
    );
}
export default Expenses
 