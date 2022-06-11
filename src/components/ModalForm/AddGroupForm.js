/* eslint-disable no-console */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';

import { formValidations } from '../../utils/formValidations';
import MultiSelectDropdown from '../MultiSelectDropdown';
const AddGroupForm = ({ title, friends, handleFormSubmit, isAllSelected }) => {
  const [groupForm, setGroupForm] = useState({});
  const [errors, setErrors] = useState({});
  const [friendsForSplit, setFriendsForSplit] = useState([]);
  const [showMultiSelectError, setShowMultiSelectError] = useState(false);
  const setGroupField = (field, value) => {
    setGroupForm({
      ...groupForm,
      [field]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = formValidations(groupForm);

    // Conditional logic:
    if (Object.keys(newErrors).length > 0 && (newErrors.name || newErrors.description)) {
      // We got errors!
      setErrors(newErrors);
    } else if (friendsForSplit.length === 0) {
      setShowMultiSelectError(true);
    } else {
      // No errors! Put any logic here for the form submission!
      const listOfFriendToSpiltWith =
        friendsForSplit.length > 0 && friendsForSplit.length !== friends ? friendsForSplit : friends;
      handleFormSubmit(groupForm, listOfFriendToSpiltWith);
    }
  };
  const retriveFriendsInExpense = (userForSplit) => {
    setFriendsForSplit(userForSplit);
  };
  return (
    <Form className="modal-container">
      <Form.Group>
        <Form.Label>{title}: </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setGroupField('name', e.target.value)}
          placeholder="Enter expense title"
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description: </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setGroupField('description', e.target.value)}
          placeholder="Enter description"
          isInvalid={!!errors.description}
        />
        <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
      </Form.Group>

      {friends?.length > 0 && (
        <>
          <MultiSelectDropdown
            dropDownList={friends}
            retriveFriendsInExpense={retriveFriendsInExpense}
            isAllSelected={isAllSelected}
          />
          {showMultiSelectError && <div className="invalid-multiselect">Please select a friend for expense split!</div>}
        </>
      )}
      <Button className="formsubmit-btn" variant="primary" type="submit" onClick={onHandleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
AddGroupForm.propsTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(Object),
  handleFormSubmit: PropTypes.func,
  isAllSelected: PropTypes.bool,
};
AddGroupForm.defaultProps = {
  title: 'Name',
  isAddExpense: false,
  friends: [],
  handleFormSubmit: () => {},
};
export default AddGroupForm;
