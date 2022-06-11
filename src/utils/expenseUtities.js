import localStorageData from './localStorageData';
import { v4 as uuid } from 'uuid';
import { addExpenseService } from '../services/expenseService';
const checkIfAddInExpense = (friendsInExpense, user) => {
  return (
    (!friendsInExpense?.some((item) => item.userId === user.userId) || friendsInExpense?.length === 0) &&
    !user.isCurrentUser
  );
};

const calculateAndAddExpense = (expenseFormObj, listOfFriendToSpiltWith) => {
  const allFriendList = localStorageData('GET', 'friendList');
  const spiltedAmount = expenseFormObj.amount / (listOfFriendToSpiltWith.length + 1);
  const expenseId = uuid();

  const { userId, userName } = allFriendList.find((item) => item.isCurrentUser);

  const newExpenseObj = {
    expenseId,
    payedBy: userName,
    amount: spiltedAmount.toFixed(1),
    expenseName: expenseFormObj.name,
    description: expenseFormObj.description,
    distribution: 'equal',
    date: expenseFormObj.dateOfExpense,
    users: [
      ...listOfFriendToSpiltWith.map((item) => {
        const { userId, userName } = item;
        return { userId, userName };
      }),
      { userId, userName },
    ],
  };
  addExpenseService(newExpenseObj);
};

export { checkIfAddInExpense, calculateAndAddExpense };
