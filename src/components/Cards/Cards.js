import Card from '../Card';
import './_cards.scss';
const Cards = ({ expenseList, currentUser }) => {
  return (
    <div className="cards-container">
      {expenseList.length > 0 &&
        expenseList.map((expense) => (
          <div key={expense.expenseId}>
            <h4>{expense.date}</h4>
            <div className="card-wrapper">
              {expense.users?.length > 0 &&
                expense.users.map(
                  (user) =>
                    currentUser.userId !== user.userId && (
                      <Card key={user.userId} expense={expense} userName={user.userName} />
                    )
                )}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Cards;
