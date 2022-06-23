import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

export const ExpensesList = (props) => {

    let expensesContent = <p>No Expenses Found</p>;

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === selectedYear;
    })

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => {
            return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        })
    }

    return(
        <div className='expenses-list'>

        </div>
    )
}