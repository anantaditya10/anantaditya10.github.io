import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import { formValidations } from '../../utils/formValidations';
const AddFriendForm = ({ handleFormSubmit }) => {
  const [expenseForm, setExpenseForm] = useState({});
  const [errors, setErrors] = useState({});
  const setExpenseField = (field, value) => {
    setExpenseForm({
      ...expenseForm,
      [field]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = {};
    if (!expenseForm.name || expenseForm.name === '') newErrors.name = 'cannot be blank!';
    else if (expenseForm.name.length > 30) newErrors.name = 'name is too long!';

    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      handleFormSubmit(expenseForm.name);
    }
  };

  return (
    <Form className="modal-container">
      <Form.Group>
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setExpenseField('name', e.target.value)}
          placeholder="Enter name"
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>
      <Button className="formsubmit-btn" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default AddFriendForm;
