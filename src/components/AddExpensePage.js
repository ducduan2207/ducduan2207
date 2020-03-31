import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpensesForm';
import { startAddExpenses } from '../actions/expenses';
/*
1. Create a new Component named ExpenseForm.js (edit)
2. input type='text' name="description", input type='float' name="amount", button type="submit"
3. connect to store, import addExpense from action
4. handle event onSubmit (e.preventDefault(); props.dispatch(addExpense({description: e.target.description, amount: e.target.amount.value})))
5. Return to dashboardpage
*/


const AddExpensePage = (props) => (
  <div>
    <h1>Add Expenses</h1>
    <ExpenseForm onSubmit={ (expense) => {console.log(expense); 
    props.dispatch(startAddExpenses(expense)); 
    props.history.push("/")} } />
  </div>
);

export default connect ()(AddExpensePage);