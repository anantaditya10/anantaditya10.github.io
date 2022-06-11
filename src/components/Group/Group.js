import { useState } from 'react';
import './_group.scss';
import { Accordion } from 'react-bootstrap';
import ModalForm from '../ModalForm';
import { getAllFriends } from '../../services/userDataService';
import { addGroupService, getGroups } from '../../services/groupService';

import { FcAddDatabase } from 'react-icons/fc';
const Group = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allFriendList = getAllFriends();
  const groupsData = getGroups();
  const [groups, setGroups] = useState(groupsData);

  const [actionType, setActionType] = useState('addfriend');

  const closeModal = () => {
    setIsOpen(false);
  };
  const onAddExpenseHandler = () => {
    setIsOpen(true);
    setActionType('addexpense');
  };
  const onAddGroupHandler = () => {
    setActionType('addgroup');
    setIsOpen(true);
  };
  const handleAddGroupFormSubmit = (groupFormObj, groupMember) => {
    // calculateAndAddExpense(expenseFormObj, listOfFriendToSpiltWith);
    setGroups((prevState) => {
      return [...prevState, { name: groupFormObj.name, description: groupFormObj.description, groupMember }];
    });
    addGroupService(groupFormObj, groupMember);
    setIsOpen(false);
    // navigate('/');
  };
  return (
    <div className="group-container text">
      <h2>Expense Groups</h2>
      <button className="btn-addgroup" onClick={onAddGroupHandler}>
        Add Group
      </button>

      <div className="accordian-container">
        <Accordion>
          {groups.map((grp, index) => (
            <Accordion.Item>
              <Accordion.Header>
                <div className="member-container">
                  <h2>{grp.name}</h2>
                  <h6 className="description-title">{grp.description}</h6>
                  <button className="btn-add background text" onClick={onAddExpenseHandler}>
                    <span>Add Expense</span>
                    <FcAddDatabase />
                  </button>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {grp?.groupMember?.map((item) => (
                  <div>
                    <p>{item.userName}</p>
                  </div>
                ))}
              </Accordion.Body>{' '}
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      {isOpen && (
        <ModalForm
          friends={allFriendList}
          modalTitle={actionType === 'addgroup' ? 'AddGroup' : 'Add Expense'}
          title={actionType === 'addgroup' ? 'Group Name' : 'Expense Name'}
          closeModal={closeModal}
          isOpen={isOpen}
          isAddExpense={actionType === 'addexpense'}
          handleAddGroupSubmit={handleAddGroupFormSubmit}
          isAllSelected={false}
          actionType={actionType}
        />
      )}
    </div>
  );
};
export default Group;
