import PropTypes from 'prop-types';
import { Item, OnLineStatus } from './FriendList.styled';

const friendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <OnLineStatus isOnline={isOnline}> {isOnline} </OnLineStatus>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
};

friendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default friendItem;