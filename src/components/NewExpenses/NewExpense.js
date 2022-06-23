import './NewExpenses.css';
import { NewExpensesForm } from './NewExpensesForm';

export const NewExpense = (props) => {

    const handleExpenseDataSave = expense => {
        const expenseData = {
            ...expense, 
            id: Math.random().toString()
        }

        props.onExpenseAdded(expenseData)
    }
    return(
        <div className='new-expense'>
            <NewExpensesForm onSaveExpenseData={handleExpenseDataSave}/>
        </div>
    )
}

