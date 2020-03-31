
import React from 'react';
import {removeExpense, startRemoveExpense} from '../actions/expenses'; 
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
/*
1. handle event onClick for remove button
2. Call dispatch() and import action removeExpense(id)
3. connect to store

*/

const ExpensesListItem = (props) => (
    <div className="list-item">
        <p>Description: {props.description} - Amount: {props.amount} - Created At: {props.createdAt} <Link to={`/edit/${props.id}`}>Edit</Link>     
        <button onClick={() => props.dispatch(startRemoveExpense(props.id))} className="btn">Remove</button>
        </p>
    </div>
);

export default connect( )(ExpensesListItem);