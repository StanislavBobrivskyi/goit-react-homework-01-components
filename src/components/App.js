import Profile from './Profile/Profile';
import Statistics from './Stats/Stats';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import items from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { GlobalStyle } from './Global.style';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <Profile
          username={items.username}
          tag={items.tag}
          location={items.location}
          avatar={items.avatar}
          stats={items.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <GlobalStyle />
      </>
    </div>
  );
};
