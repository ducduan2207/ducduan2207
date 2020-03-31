import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import { startEditExpenses } from '../actions/expenses';
const EditExpensePage = props => {
  return (
    <div>
      <ExpensesForm 
      expense={props.expense} 
      onSubmit={expenseEdited => {props.dispatch(startEditExpenses(props.expense.id, expenseEdited));props.history.push("/")}}
      
      />
    </div>
  );
};

// viết hàm mapStateToProps 
// Connect vô store and check id, if it exist, show information

const mapStateToProps = (state, props) => {
  return{
    expense: state.expenses
    .find(expense => expense.id === props.match.params.id
    )
  }
}

export default connect(mapStateToProps)(EditExpensePage);
