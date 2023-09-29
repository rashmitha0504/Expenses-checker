import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [enterTitle,setTitle]=useState('');
    const [enteramount,setAmount]=useState('');
    const [enterDate,setDate]=useState('');

    const titleChange=(event)=>{
        setTitle(event.target.value)
    }

    const amountChange=(event)=>{
        setAmount(event.target.value)
    }

    const dateChange=(event)=>{
        setDate(event.target.value)
    }

    const submitForm=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enterTitle,
            amount:+enteramount,
            date:new Date(enterDate),
        };
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('')
    }

    return(
        <form onSubmit={submitForm}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteramount} onChange={amountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-09-31" value={enterDate} onChange={dateChange}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;