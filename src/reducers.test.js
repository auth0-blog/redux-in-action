import {addExpense, removeExpense} from './actions';
import expenses, {initialState} from './reducers';

describe('reducers', () => {
  it('should be able to add expenses', () => {
    const stateStep1 = expenses(initialState, addExpense({
      id: 1,
      amount: 20
    }));
    expect(stateStep1.expenses.length).toEqual(1);
    expect(stateStep1.balance).toEqual(20);

    const stateStep2 = expenses(stateStep1, addExpense({
      id: 2,
      amount: 10
    }));
    expect(stateStep2.expenses.length).toEqual(2);
    expect(stateStep2.balance).toEqual(30);
  });

  it('should be able to remove expenses', () => {
    const stateStep1 = expenses(initialState, addExpense({
      id: 1,
      amount: 55
    }));
    expect(stateStep1.expenses.length).toEqual(1);
    expect(stateStep1.balance).toEqual(55);

    const stateStep2 = expenses(stateStep1, addExpense({
      id: 2,
      amount: 36
    }));
    expect(stateStep2.expenses.length).toEqual(2);
    expect(stateStep2.balance).toEqual(91);

    const stateStep3 = expenses(stateStep2, removeExpense({
      id: 1
    }));
    expect(stateStep3.expenses.length).toEqual(1);
    expect(stateStep3.balance).toEqual(36);
  });

  it('should return the default state', () => {
    expect(expenses()).toEqual(initialState);
  });
});
