import { useState } from 'react';
import './_group.scss';
import { Accordion } from 'react-bootstrap';
import ModalForm from '../ModalForm';
import { getAllFriends } from '../../services/userDataService';
import { addGroupService, getGroups } from '../../services/groupService';
import { calculateAndAddExpense } from '../../utils/expenseUtities';
import { FcAddDatabase } from 'react-icons/fc';
import { getAllExpense } from '../../services/expenseService';
const Group = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allFriendList = getAllFriends();
  const groupsData = getGroups();
  const groupExpenses = getAllExpense();
  const [groups, setGroups] = useState(groupsData);
  const [currentGroup, setCurrentGroup] = useState();

  const [actionType, setActionType] = useState('addfriend');

  const closeModal = () => {
    setIsOpen(false);
    setCurrentGroup(null);
  };
  const onAddExpenseHandler = (grp) => {
    setIsOpen(true);
    setActionType('addexpense');
    setCurrentGroup(grp);
  };
  const onAddGroupHandler = () => {
    setActionType('addgroup');
    setIsOpen(true);
  };
  const handleAddGroupFormSubmit = (groupFormObj, groupMember) => {
    // calculateAndAddExpense(expenseFormObj, listOfFriendToSpiltWith);

    setGroups(addGroupService(groupFormObj, groupMember));
    setIsOpen(false);
    // navigate('/');
  };
  const handleAddExpenseToGroup = (expenseFormObj) => {
    calculateAndAddExpense(expenseFormObj, currentGroup.groupMember, currentGroup, true);
    setIsOpen(false);
  };
  return (
    <div className="group-container text">
      <h2>Expense Groups</h2>
      <button className="btn-addgroup" onClick={onAddGroupHandler}>
        Add Group
      </button>

      <div className="accordian-container">
        <Accordion className="background">
          {groups.map((grp) => (
            <div key={grp.groupId}>
              <Accordion.Item>
                <Accordion.Header>
                  <div className="member-container" key={grp.groupId}>
                    <h2>{grp.name}</h2>
                    <h6 className="description-title">{grp.description}</h6>
                    <button className="btn-add background text" onClick={() => onAddExpenseHandler(grp)}>
                      <span>Add Expense</span>
                      <FcAddDatabase />
                    </button>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {grp?.groupMember?.map((item) => (
                    <>
                      <div key={item.userId} className="member-details background text">
                        <h4>{item.userName}</h4>
                        {groupExpenses?.length > 0 && (
                          <span>
                            <p>Description: {groupExpenses.find((item) => item.groupId === grp.groupId).description}</p>
                            <p>You will get {groupExpenses.find((item) => item.groupId === grp.groupId).amount}</p>
                          </span>
                        )}
                      </div>
                      <hr className="seperator" />
                    </>
                  ))}
                </Accordion.Body>{' '}
              </Accordion.Item>
            </div>
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
          handleAddFormSubmit={handleAddExpenseToGroup}
          actionType={actionType}
          isGroupExpense={true}
        />
      )}
    </div>
  );
};
export default Group;
