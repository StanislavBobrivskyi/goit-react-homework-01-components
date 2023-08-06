import styled from 'styled-components';

export const Wrapper = styled.ul`
  flex-direction: column;
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`;
export const List = styled.li`
  border-radius: 20px;
  width: 450px;
  background-color: #fff;

  display: flex;

  align-items: left;
  img {
    padding: 20px;
    width: 30%;
  }
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.p`
  text-align: left;
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 20px;
    background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  }
`;
