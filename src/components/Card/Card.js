import './_card.scss';
import Tooltip from '../ToolTip';
import { FcInfo } from 'react-icons/fc';
import PropTypes from 'prop-types';

const Card = ({ expense, userName }) => {
  return (
    <div className="card-contanier">
      <div className="user-details">
        <h6>Name: {userName}</h6>
        <h6>
          Expense: {expense.expenseName}{' '}
          <Tooltip content={expense.description} direction="right">
            <FcInfo />
          </Tooltip>
        </h6>

        <h6>Owes you {expense.amount}</h6>
      </div>
    </div>
  );
};
Card.propsTypes = {
  expense: PropTypes.object,
  userName: PropTypes.string,
};
Card.defaultProps = {
  expense: {},
  userName: '',
};
export default Card;
