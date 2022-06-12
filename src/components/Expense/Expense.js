import { useEffect, useState } from 'react';
import CustomInput from '../CustomInput';
import './_expense.scss';
import useDebounce from '../../hooks/useDebounce';
import ListTile from '../ListTile';
import { checkIfAddInExpense, calculateAndAddExpense } from '../../utils/expenseUtities';
import ModalForm from '../ModalForm';
import { getAllFriends, addNewFriend } from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';
import { FcAddDatabase, FcPlus } from 'react-icons/fc';
const Expense = () => {
  const [input, setInput] = useState('');
  let navigate = useNavigate();
  const allFriendList = getAllFriends();
  const [friends, setFriends] = useState(allFriendList);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 100);
  const [friendsInExpense, setFriendsInExpense] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState('addfriend');

  useEffect(() => {
    if (debouncedSearchTerm?.length > 0) {
      setFriends(allFriendList.filter((item) => item.userName.toLowerCase().includes(debouncedSearchTerm)));
    } else {
      setFriends(allFriendList);
    }
  }, [debouncedSearchTerm]);
  const onCustomInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
    setSearchTerm(value);
  };
  const removeInputOnBackSpace = (e) => {
    const { key } = e;
    if (key === 'Backspace' && input.length === 0 && friendsInExpense.length > 0) {
      e.preventDefault();
      const friendsInExpenseCopy = [...friendsInExpense];
      friendsInExpenseCopy.pop();
      setFriendsInExpense(friendsInExpenseCopy);
      setInput('');
    }
  };

  const onUserSelectHandle = (user) => {
    setFriendsInExpense((prevState) => {
      if (checkIfAddInExpense(prevState, user)) {
        return [...prevState, user];
      }
      return friendsInExpense;
    });

    setInput('');
    setFriends(allFriendList);
  };
  const deleteFriend = (userId) => {
    setFriendsInExpense((prevState) => prevState.filter((friend) => friend.userId !== userId));
  };

  const closeModal = () => {
    setIsOpen(false);
    setActionType('addfriend');
  };
  const onAddExpenseHandler = () => {
    setIsOpen(true);
    setActionType('addexpense');
  };
  const handleAddFriendSubmit = (name) => {
    addNewFriend(name);
    setFriends(getAllFriends());
    setIsOpen(false);
  };
  const handleExpenceFormSubmit = (expenseFormObj, listOfFriendToSpiltWith) => {
    calculateAndAddExpense(expenseFormObj, listOfFriendToSpiltWith);
    setIsOpen(false);
    navigate('/');
  };
  return (
    <div className="text expense-container">
      <CustomInput
        input={input}
        friendsInExpense={friendsInExpense}
        removeInputOnBackSpace={removeInputOnBackSpace}
        deleteFriend={deleteFriend}
        onCustomInputChange={onCustomInputChange}
      />
      <div className="btn-container">
        {friendsInExpense?.length > 0 && (
          <button className="btn-add background text" onClick={onAddExpenseHandler}>
            <span>Add Expense</span>
            <FcAddDatabase />
          </button>
        )}
        <button className="btn-add background text" onClick={() => setIsOpen(true)}>
          <span>Add Friend</span>
          <FcPlus />
        </button>
      </div>
      <ListTile friends={friends} onUserSelectHandle={onUserSelectHandle} />
      {isOpen && (
        <ModalForm
          friends={friendsInExpense}
          actionType={actionType}
          modalTitle={actionType === 'addfriend' ? 'Add Friend' : 'Add Expense'}
          title={actionType === 'addexpense' && 'Expense Name'}
          isAddExpense={actionType === 'addexpense'}
          closeModal={closeModal}
          isOpen={isOpen}
          handleAddFriendSubmit={handleAddFriendSubmit}
          handleAddFormSubmit={handleExpenceFormSubmit}
        />
      )}
    </div>
  );
};
export default Expense;
