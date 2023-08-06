import styled from 'styled-components';

export const TableWrapper = styled.table`
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
  width: 60%;
  border: 2px solid black;
  margin-bottom: 40px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.thead`
  background-color: aqua;
`;
export const TableStyle = styled.td`
  padding: 15px;
`;

export const TableInform = styled.tbody`
  text-align: center;
  border-bottom: 1px solid #ccc;
  tr:nth-child(even) {
    background-color: #f9f9f9;
 tr:nth-child(odd) {
    background-color: #ffdfdf;
`;
