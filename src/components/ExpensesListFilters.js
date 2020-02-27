import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

/*
1. import sortByDate và sortByAmount from action
2. handle event onChange
3. dispatch => check điều kiện
*/

const ExpenseListFilters = (props) => {
    return (
        <div className="filter">
            <input type="text" value={props.filter.text} onChange={(e) => {props.dispatch(setTextFilter(e.target.value));}} />
            <select value={props.filter.sortBy} onChange={ (e) => {if (e.target.value === 'amount') {props.dispatch(sortByAmount())} else if (e.target.value === 'date') {props.dispatch(sortByDate())}  } }>
                <option value='amount'>By Amount</option>
                <option value='date'>By Date</option>
            </select>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        filter : state.filters
    };
}
export default connect (mapStateToProps)(ExpenseListFilters);