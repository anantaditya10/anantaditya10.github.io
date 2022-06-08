import PropTypes from 'prop-types';
import './_custominput.scss';

const CustomInput = ({ input, friendsInExpense, removeInputOnBackSpace, deleteFriend, onCustomInputChange }) => {
  return (
    <div className="custom-input-container background">
      {friendsInExpense.map((friend) => (
        <div className="friend" key={friend.userId}>
          {friend.userName}
          <button className="friend-button" onClick={() => deleteFriend(friend.userId)}>
            x
          </button>
        </div>
      ))}
      <input
        className="search-input text"
        value={input}
        placeholder="Enter a name"
        onKeyDown={removeInputOnBackSpace}
        onChange={onCustomInputChange}
      />
    </div>
  );
};
CustomInput.propsTypes = {
  input: PropTypes.string,
  friendsInExpense: PropTypes.arrayOf(Object),
  removeInputOnBackSpace: PropTypes.func,
  deleteFriend: PropTypes.func,
  onCustomInputChange: PropTypes.func,
};
CustomInput.defaultProps = {
  input: '',
  friendsInExpense: [],
  removeInputOnBackSpace: () => {},
  deleteFriend: () => {},
  onCustomInputChange: () => {},
};
export default CustomInput;
