import user from 'data/user';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendList } from './FriendList/FriendList';
import { AppWrapper } from './App.styled';
import { Box, SideBar } from './Box/Box';

export const App = () => (
  <AppWrapper>
    <SideBar>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </SideBar>
    <TransactionHistory items={transactions} />
  </AppWrapper>
);
