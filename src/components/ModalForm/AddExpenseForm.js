/* eslint-disable no-console */
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import { formValidations } from '../../utils/formValidations';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';
const AddExpenseForm = ({ friends, handleExpenceFormSubmit }) => {
  const [expenseForm, setExpenseForm] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedSplitOption, setSelectedSplitOption] = useState('split');
  const [friendsForSplit, setFriendsForSplit] = useState([]);
  const [showMultiSelectError, setShowMultiSelectError] = useState(false);
  const setExpenseField = (field, value) => {
    setExpenseForm({
      ...expenseForm,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = formValidations(expenseForm);

    if (friendsForSplit.length === 0) {
      setShowMultiSelectError(true);
    }
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      const listOfFriendToSpiltWith = selectedSplitOption === 'exclude' ? friendsForSplit : friends;
      handleExpenceFormSubmit(expenseForm, listOfFriendToSpiltWith);
    }
  };
  const retriveFriendsInExpense = (userForSplit) => {
    setFriendsForSplit(userForSplit);
  };
  const onTypeOfSpiltHandle = () => {
    setSelectedSplitOption(selectedSplitOption === 'split' ? 'exclude' : 'split');
    setShowMultiSelectError(false);
  };
  const keyDown = (e) => {
    if (e.key === '.') e.preventDefault();
  };
  return (
    <Form className="modal-container">
      <Form.Group>
        <Form.Label>Expense Name: </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setExpenseField('name', e.target.value)}
          placeholder="Enter expense title"
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description: </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setExpenseField('description', e.target.value)}
          placeholder="Enter description"
          isInvalid={!!errors.description}
        />
        <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Amount: </Form.Label>
        <Form.Control
          type="number"
          min="1"
          onChange={(e) => setExpenseField('amount', e.target.value)}
          placeholder="Enter amount"
          isInvalid={!!errors.amount}
          onKeyDown={keyDown}
        />
        <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Select Date</Form.Label>
        <Form.Control
          type="date"
          max={new Date().toISOString().slice(0, 10)}
          name="dateOfExpense"
          placeholder="Date of Expense"
          onChange={(e) => setExpenseField('dateOfExpense', e.target.value)}
          isInvalid={!!errors.dateOfExpense}
        />
        <Form.Control.Feedback type="invalid">{errors.dateOfExpense}</Form.Control.Feedback>
      </Form.Group>
      {friends?.length > 1 && (
        <>
          <Form.Group>
            <Form.Check
              type="radio"
              id="split"
              name="spit-radio"
              label="You paid and Spilt equally"
              checked={selectedSplitOption === 'split'}
              onChange={onTypeOfSpiltHandle}
            />
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="radio"
              id="split"
              name="spit-radio"
              checked={selectedSplitOption === 'exclude'}
              label="Select friend to exclude"
              onChange={onTypeOfSpiltHandle}
            />

            {selectedSplitOption === 'exclude' && (
              <>
                <MultiSelectDropdown dropDownList={friends} retriveFriendsInExpense={retriveFriendsInExpense} />
                {showMultiSelectError && (
                  <div className="invalid-multiselect">Please select a friend for expense split!</div>
                )}
              </>
            )}
          </Form.Group>
        </>
      )}
      <Button className="formsubmit-btn" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default AddExpenseForm;
