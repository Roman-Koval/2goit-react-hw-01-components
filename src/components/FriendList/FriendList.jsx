import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import { FriendListWrap } from './FriendList.styled';


const FriendList = ({friends}) => {
return (
<FriendListWrap>
      {friends.map(friend => {
        return (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendListWrap>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          key: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        }),
      ),
    };

export default FriendList;