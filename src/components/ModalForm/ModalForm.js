import PropTypes from 'prop-types';
import AddExpenseForm from './AddExpenseForm';
import AddFriendForm from './AddFriendForm';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './_modal.scss';
import AddGroupForm from './AddGroupForm';
const ModalForm = ({
  friends,
  actionType,
  modalTitle,
  title,
  isAddExpense,
  isGroupExpense,
  isOpen,
  closeModal,
  handleAddFriendSubmit,
  handleAddFormSubmit,
  handleAddGroupSubmit,
}) => {
  const component = () => {
    switch (actionType) {
      case 'addfriend':
        return <AddFriendForm handleFormSubmit={handleAddFriendSubmit} />;
        break;
      case 'addexpense':
        return (
          <AddExpenseForm
            title={title}
            isAddExpense={isAddExpense}
            friends={friends}
            handleFormSubmit={handleAddFormSubmit}
            isAllSelected={true}
            isGroupExpense={isGroupExpense}
          />
        );

        break;
      case 'addgroup':
        return (
          <AddGroupForm title={title} friends={friends} handleFormSubmit={handleAddGroupSubmit} isAllSelected={false} />
        );

        break;

      default:
        return <AddFriendForm handleFormSubmit={handleAddFriendSubmit} />;
        break;
    }
  };
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{component()}</Modal.Body>
    </Modal>
  );
};

ModalForm.propsTypes = {
  friends: PropTypes.arrayOf(Object),
  isAddFriendAction: PropTypes.bool,
  closeModal: PropTypes.func,
  handleAddFriendSubmit: PropTypes.func,
  handleAddFormSubmit: PropTypes.func,
  isOpen: PropTypes.bool,
  modalTitle: PropTypes.string,
  title: PropTypes.string,
  isAddExpense: PropTypes.bool,
  isGroupExpense: PropTypes.bool,
};
ModalForm.defaultProps = {
  friends: [],
  isAddFriendAction: false,
  closeModal: () => {},
  handleAddFriendSubmit: () => {},
  handleAddFormSubmit: () => {},
  isOpen: false,
  modalTitle: 'Add',
  title: 'Name',
  isAddExpense: false,
  isGroupExpense: false,
};
export default ModalForm;
