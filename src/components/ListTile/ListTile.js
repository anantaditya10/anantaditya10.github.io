import './_listTile.scss';
const ListTile = ({ friends, onUserSelectHandle }) => {
  return (
    <div className="list-wrapper">
      {friends.map((item) => (
        <div className="list-container" key={item.userId}>
          <div className="list-background"></div>

          <button onClick={() => onUserSelectHandle(item)} className="list-tile-body text">
            {' '}
            {item.userName}
          </button>
        </div>
      ))}
    </div>
  );
};
export default ListTile;
