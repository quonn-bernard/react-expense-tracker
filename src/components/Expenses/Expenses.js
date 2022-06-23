
import React, { useState } from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';
import {ExpensesList} from '../Expenses/ExpensesList';
import {ExpensesChart} from './ExpensesChart';
function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState('');

    const handleFitlerSelect = (option) => {
        setSelectedYear(option);
        console.log(selectedYear)
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === selectedYear;
    })

    return( 
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeFilter={handleFitlerSelect}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </ Card>
    )
}

export default Expenses;