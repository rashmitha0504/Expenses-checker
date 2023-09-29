import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpenses.css'

const NewExpenses = (props) => {
    const[isUpdate,setUpdate]=useState(false);

    const onSaveExpenseData=(enterdExpenseData)=>{
        const expenseData={
            ...enterdExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setUpdate(false);
    };

    const setUpdatedExpenses=()=>{
        setUpdate(true)
    }

    const stopUpdate=()=>{
        setUpdate(false);
    }

    return(
        <div className='new-expense'>
           {!isUpdate&&<button onClick={setUpdatedExpenses}>Add New Expenses</button>}
           {isUpdate&&<ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopUpdate}/>}
        </div>
    );
}
export default NewExpenses