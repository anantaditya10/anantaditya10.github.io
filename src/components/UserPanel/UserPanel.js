import React from 'react';
import Tile from '../Tile';
import Cards from '../Cards';
import './_userpanel.scss';
import localStorageData from '../../utils/localStorageData';

const UserPanel = () => {
  const expenseList = localStorageData('GET', 'expenseList');
  const allFriendList = localStorageData('GET', 'friendList');
  const currentUser = allFriendList.find((item) => item.isCurrentUser);
  return (
    <div className="panel-container text">
      <Tile currentUser={currentUser} />
      {expenseList?.length > 0 && <Cards expenseList={expenseList} currentUser={currentUser} />}
    </div>
  );
};

export default UserPanel;
