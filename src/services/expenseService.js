import { updateUserObjWithExpense } from './userDataService';
import localStorageData from '../utils/localStorageData';
const addExpenseService = (newExpenseObj) => {
  const expenseList = localStorageData('GET', 'expenseList');
  expenseList.push(newExpenseObj);
  updateUserObjWithExpense(expenseList);
  localStorageData('SET', 'expenseList', expenseList);
};

export { addExpenseService };
