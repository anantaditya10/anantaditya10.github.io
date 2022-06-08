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

export default ModalForm;
