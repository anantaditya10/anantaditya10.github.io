const userDataSource = [
  {
    userId: '2b4280f3-21a4-4ccf-9099-14e9eff4287b',
    userName: 'aditya anant',
    isCurrentUser: true,
    totalAmount: 0,
    expenseId: [],
  },
  {
    userId: '9844b18c-82ae-4a24-a0f4-8d641d1e89cf',
    userName: 'David',
    isCurrentUser: false,
    totalAmount: 0,
    expenseId: [],
  },
  {
    userId: 'd73cbec2-d938-4e36-bbc3-67d05bf83ded',
    userName: 'Jonney Depp',
    isCurrentUser: false,
    totalAmount: 0,
    expenseId: [],
  },
  {
    userId: '83bc9cc9-cbca-40b1-846e-4505a06336a0',
    userName: 'Amber hered',
    isCurrentUser: false,
    totalAmount: 0,
    expenseId: [],
  },
];

const expenseDataSource = [
  {
    expenseId: '',
    payedBy: '',
    amount: '',
    description: '',
    distribution: '',
    date: '',
    users: '[]',
  },
];
export { userDataSource, expenseDataSource };
