import { Wrapper } from './Profile.styled';
import { List } from './Profile.styled';
import { Item } from './Profile.styled';
import { Info } from './Profile.styled';
export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <Wrapper>
      <Info>
        <img src={avatar} alt={`${username} avatar`} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Info>
      <Item>
        <List>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </List>
        <List>
          <span>Views</span>
          <span>{stats.views}</span>
        </List>
        <List>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </List>
      </Item>
    </Wrapper>
  );
}
