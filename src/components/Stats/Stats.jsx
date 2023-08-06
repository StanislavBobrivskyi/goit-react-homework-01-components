import { Wrapper } from './Stats.style';
import { List } from './Stats.style';
import { Items } from './Stats.style';
export default function Statistics({ stats, title }) {
  return (
    <>
      <Wrapper>
        {title && <h2>{title}</h2>}

        <List>
          {stats.map(stat => {
            return (
              <Items key={stat.id} label={stat.label}>
                <span>{stat.label}</span>
                <span>{stat.percentage}%</span>
              </Items>
            );
          })}
        </List>
      </Wrapper>
    </>
  );
}
