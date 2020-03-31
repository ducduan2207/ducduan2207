
import database from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
      type    : 'ADD_EXPENSE',
      expense
      }
    
  };
  export const startAddExpenses = (dataExpense = {}) => {
    // 1. Return 1 dispatch function
      // connect đến firebase
        // gọi đến hàm push để thêm dữ liệu vào database
          // then =>
    const {description, amount, createdAt = 5000} = dataExpense;
    const expense = {description, amount, createdAt};
    return (dispatch, getSate) => {
      const uid = getSate().auth.uid;
      return database.ref(`users/${uid}/expenses`).push(expense)
      .then( (ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      } ).catch( err => {
        console.log(err);
      } );
    }
  }
  export const removeExpense = (id) => {
    return {
      type    : 'REMOVE_EXPENSE',
      id
    }
  }
  export const startRemoveExpense = (id) => {
    return (dispatch, getSate) => {
      const uid = getSate().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`)
      .remove().then( () => {
        dispatch(removeExpense(id))
      }).catch(err => {console.log(err)})
    }
  }
  
  export const editExpense = (id, updates) => {
    return{
    type : 'EDIT_EXPENSE',
    id,
    updates
    }
  };
  
  export const startEditExpenses = (id, updates) => {
    return (dispatch, getSate) => {
      const uid = getSate().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).set(updates)
      .then( () => {
        dispatch(editExpense(id, updates));
      })
      .catch( err => console.log(err))
    }
  }

  export const setExpenses = (expenses) => {
    return {
      type: 'SET_EXPENSES',
      expenses
    }
  }

  export const startSetExpenses = () => {
    return (dispatch, getSate) =>{
      const uid = getSate().auth.uid
      let expenses = [];
      //Get data from firebase
      return database.ref(`users/${uid}/expenses`)
      .once('value')
      .then((dataSnapshot) => {
        dataSnapshot.forEach(childSnapshot => {
          expenses.push({
            id : childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setExpenses(expenses));
      }).catch(err => {
        console.log(err)
      })
    }
  }