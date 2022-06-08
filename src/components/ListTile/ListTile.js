import PropTypes from 'prop-types';
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
ListTile.propsTypes = {
  friends: PropTypes.arrayOf(Object),
  onUserSelectHandle: PropTypes.func,
};
ListTile.defaultProps = {
  friends: [],
  onUserSelectHandle: () => {},
};
export default ListTile;
