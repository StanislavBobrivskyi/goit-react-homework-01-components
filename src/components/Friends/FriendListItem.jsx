import { List } from './Friends.style';
import { Description } from './Friends.style';
import { Status } from './Friends.style';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <List>
      <Status $isOnline={isOnline} />
      <img src={avatar} alt={`${name}`} width="48" />
      <Description>{name}</Description>
    </List>
  );
}
