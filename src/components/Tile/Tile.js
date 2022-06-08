import PropTypes from 'prop-types';
import './_tile.scss';

const Tile = ({ currentUser }) => {
  return (
    <div className="tile-contanier">
      <h2 className="title">Dashboard</h2>
      <div className="user-details">
        <h5>{currentUser.userName.toUpperCase()}</h5>
        {currentUser.totalAmount > 0 ? <h6>You will get {currentUser.totalAmount}</h6> : <h6>No dues</h6>}
      </div>
      <hr className="seperator" />
    </div>
  );
};
Tile.propsTypes = {
  currentUser: PropTypes.object,
};
Tile.defaultProps = {
  currentUser: {},
};
export default Tile;
