import { v4 as uuid } from 'uuid';
import localStorageData from '../utils/localStorageData';

const createUserData = (userDataSource, userData) => {
  if (userData.length === 0) {
    const jsonData = userDataSource;
    localStorageData('SET', 'friendList', jsonData);
  }
};
const getAllFriends = () => {
  const allFriendList = localStorageData('GET', 'friendList');
  if (allFriendList && allFriendList.length > 0) {
    return allFriendList.filter((item) => !item.isCurrentUser);
  }
  return [];
};
const addNewFriend = (name) => {
  const allFriendList = localStorageData('GET', 'friendList');
  const friendObj = {
    userId: uuid(),
    userName: name,
    isCurrentUser: false,
    totalAmount: 0,
    expenseId: [],
  };
  const newFriendList = [...allFriendList, friendObj];
  localStorageData('SET', 'friendList', newFriendList);
};
const updateUserObjWithExpense = (expenseList) => {
  const usersWithAddedExpense = localStorageData('GET', 'friendList');
  let sumBorrowed = 0;
  expenseList.forEach((item) => {
    sumBorrowed += item.amount * (item.users?.length - 1);
    usersWithAddedExpense.forEach((userItem) => {
      if (item.users.some((user) => user.userId === userItem.userId)) {
        userItem.expenseId.push(item.expenseId);
      }
      if (userItem.isCurrentUser) userItem.totalAmount = sumBorrowed;
    });
  });
  localStorageData('SET', 'friendList', usersWithAddedExpense);
};
export { createUserData, getAllFriends, addNewFriend, updateUserObjWithExpense };
