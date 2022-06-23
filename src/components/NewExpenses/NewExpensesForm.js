import React, {useState} from 'react';
import './NewExpensesForm.css';

export const NewExpensesForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleAmountChange = e => {
        setAmount(e.target.value)
    }

    const handleDateChange = e => {
        setDate(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }


    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={title} onChange={handleTitleChange} type='text' />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={amount} onChange={handleAmountChange} type='number' min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={date} onChange={handleDateChange} type='date' min="2022-01-01" max="2030-12-31" />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>

        </form>
    )
}