import PropTypes from 'prop-types';
import Select from 'react-select';
import './_multiselectdropdown.scss';

const MultiSelectDropdown = ({ dropDownList, retriveFriendsInExpense, isAllSelected }) => {
  const optionList = dropDownList.map((d) => ({
    value: d.userId,
    label: d.userName,
    userId: d.userId,
    userName: d.userName,
  }));

  return (
    <div className="multiselect-container">
      <Select
        defaultValue={isAllSelected && optionList}
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
MultiSelectDropdown.propsTypes = {
  dropDownList: PropTypes.arrayOf(Object),
  retriveFriendsInExpense: PropTypes.func,
  isAllSelected: PropTypes.bool,
};
MultiSelectDropdown.defaultProps = {
  dropDownList: [],
  retriveFriendsInExpense: () => {},
  isAllSelected: true,
};
export default MultiSelectDropdown;
