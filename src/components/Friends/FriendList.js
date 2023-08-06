import FriendListItem from './FriendListItem';
import { Wrapper } from './Friends.style';

export default function FriendList({ friends }) {
  return (
    <Wrapper>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Wrapper>
  );
}
