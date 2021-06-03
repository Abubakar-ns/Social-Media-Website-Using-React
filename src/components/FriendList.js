import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = (props) => {
  return (
    <div className="friends-list">
      <div className="header">Friends</div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends">No friends found!</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendListItem  friend={friend.to_user} key={friend._id} />
        ))}
    </div>
  );
};

export default FriendList;