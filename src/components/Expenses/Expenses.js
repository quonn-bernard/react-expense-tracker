
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';

function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('');

    const handleFitlerSelect = (option) => {
        setSelectedYear(option);
        console.log(selectedYear)
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === selectedYear;
    })

    let expensesContent = <p>No Expenses Found</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => {
            return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        })
    }

    return( 
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeFilter={handleFitlerSelect}/>
                {expensesContent}
            </ Card>
    )
}

export default Expenses;