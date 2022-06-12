import localStorageData from '../utils/localStorageData';
import { v4 as uuid } from 'uuid';
const getGroups = () => {
  return localStorageData('GET', 'groupList');
};
const addGroupService = (groupFormObj, memberToAdd) => {
  const groupList = localStorageData('GET', 'groupList');
  const groupId = uuid();
  const groupObj = {
    groupId,
    name: groupFormObj.name,
    description: groupFormObj.description,
    groupMember: memberToAdd,
  };
  groupList.push(groupObj);
  localStorageData('SET', 'groupList', groupList);
  return groupList;
};

export { addGroupService, getGroups };
