const formValidations = (expenseForm) => {
  const { name, description, amount, dateOfExpense } = expenseForm;
  const newErrors = {};
  if (!name || name === '') newErrors.name = 'cannot be blank!';
  else if (name.length > 30) newErrors.name = 'name is too long!';
  else if (!/^[a-zA-Z]+$/.test(name)) newErrors.name = 'please enter only words!';
  if (!description || description === '') newErrors.description = 'cannot be blank!';
  if (!amount || amount === '') newErrors.amount = 'cannot be blank!';
  if (!dateOfExpense || dateOfExpense === '') newErrors.dateOfExpense = 'cannot be blank!';

  return newErrors;
};
export { formValidations };
