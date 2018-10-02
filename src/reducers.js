import {ADD_EXPENSE, REMOVE_EXPENSE} from './actions';

export default expenses;

export const initialState = {
  expenses: [],
  balance: 0
};

function expenses(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_EXPENSE:
      return addExpense(state, action.expense);
    case REMOVE_EXPENSE:
      return removeExpense(state, action.expense);
    default:
      return state;
  }
}

function addExpense(state, expense) {
  return Object.assign({}, state, {
    expenses: [...state.expenses, expense],
    balance: state.balance + expense.amount
  });
}

function removeExpense(state, expense) {
  const persistedExpense = state.expenses.find(item => item.id === expense.id);

  return Object.assign({}, state, {
    expenses: state.expenses.filter(item => item.id !== expense.id),
    balance: state.balance - persistedExpense.amount
  });
}
