import Select from 'react-select';

const MultiSelectDropdown = ({ dropDownList, retriveFriendsInExpense }) => {
  const optionList = dropDownList.map((d) => ({
    value: d.userId,
    label: d.userName,
    userId: d.userId,
    userName: d.userName,
  }));

  return (
    <div>
      <Select
        defaultValue={optionList}
        isMulti
        name="colors"
        options={optionList}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={retriveFriendsInExpense}
      />
    </div>
  );
};
export default MultiSelectDropdown;
