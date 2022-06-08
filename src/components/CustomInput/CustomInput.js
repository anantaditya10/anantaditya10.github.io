import './_custominput.scss';

const CustomInput = ({ input, friendsInExpense, addFriendToExpence, deleteFriend, onCustomInputChange }) => {
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
        onKeyDown={addFriendToExpence}
        onChange={onCustomInputChange}
      />
    </div>
  );
};
export default CustomInput;
