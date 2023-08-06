import { TableWrapper } from './Transaction.style';
import { Title } from './Transaction.style';
import { TableInform } from './Transaction.style';
import { TableStyle } from './Transaction.style';
export default function TransactionHistory({ items }) {
  return (
    <TableWrapper>
      <Title>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Title>

      <TableInform>
        {items.map(item => (
          <tr key={item.id}>
            <TableStyle>{item.type}</TableStyle>
            <TableStyle>{item.amount}</TableStyle>
            <TableStyle>{item.currency}</TableStyle>
          </tr>
        ))}
      </TableInform>
    </TableWrapper>
  );
}
