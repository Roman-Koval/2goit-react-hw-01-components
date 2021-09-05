import ProfileWrap from "./components/profile/Profile.jsx";
import user from "./components/profile/user.json";

import Statistics from "./components/Statistics/Statistics.jsx";
import stat from "./components/Statistics/statistical-data.json";

import FriendList from "./components/FriendList/FriendList.jsx";
import friends from "./components/FriendList/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div>
      <ProfileWrap
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={stat.title} stats={stat} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
