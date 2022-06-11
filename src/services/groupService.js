import localStorageData from '../utils/localStorageData';
const getGroups = () => {
  return localStorageData('GET', 'groupList');
};
const addGroupService = (groupFormObj, memberToAdd) => {
  const groupList = localStorageData('GET', 'groupList');
  const groupObj = {
    name: groupFormObj.name,
    description: groupFormObj.description,
    groupMember: memberToAdd,
  };
  groupList.push(groupObj);
  localStorageData('SET', 'groupList', groupList);
};

export { addGroupService, getGroups };
