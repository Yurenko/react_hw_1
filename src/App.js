import React from 'react';
import Profile from './Profile/Profile';
import user from './user';
import style from './App.module.css';
import Statistics from './Statistics/Statistics';
import statisticalData from './statistical-data';
import friends from './friends';
import FriendList from './FriendsList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './transactions';

function App() {
  return (
    <div className={style.body}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
