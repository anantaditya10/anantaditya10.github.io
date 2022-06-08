import PropTypes from 'prop-types';
import AddExpenseForm from './AddExpenseForm';
import AddFriendForm from './AddFriendForm';
import Modal from 'react-bootstrap/Modal';
import './_modal.scss';
const ModalForm = ({ friends, isAddFriendAction, isOpen, closeModal, handleFormSubmit, handleExpenceFormSubmit }) => {
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{isAddFriendAction ? 'Add Friend' : 'Add Expense'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isAddFriendAction ? (
          <AddFriendForm handleFormSubmit={handleFormSubmit} />
        ) : (
          <AddExpenseForm friends={friends} handleExpenceFormSubmit={handleExpenceFormSubmit} />
        )}
      </Modal.Body>
    </Modal>
  );
};

ModalForm.propsTypes = {
  friends: PropTypes.arrayOf(Object),
  isAddFriendAction: PropTypes.bool,
  closeModal: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleExpenceFormSubmit: PropTypes.func,
  isOpen: PropTypes.bool,
};
ModalForm.defaultProps = {
  friends: [],
  isAddFriendAction: false,
  closeModal: () => {},
  handleFormSubmit: () => {},
  handleExpenceFormSubmit: () => {},
  isOpen: false,
};
export default ModalForm;
