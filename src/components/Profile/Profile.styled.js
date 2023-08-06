import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 2px solid lightgrey;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Info = styled.div`
  img {
    padding: 35px;
    margin: auto;
    width: 50%;
  }
`;
export const Item = styled.ul`
  display: flex;
`;

export const List = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  padding: 40px;
  border-radius: 20px;
  background-color: gray;
`;
