import styled from 'styled-components';

export const List = styled.ul`
  width: 320px;
  border: 1px solid grey;
  list-style: none;
  padding: 0px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Status = styled.span`
  display: block;
  border-radius: ${props => props.theme.radii.round};
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: ${props => props.theme.space[4]}px;
`;
