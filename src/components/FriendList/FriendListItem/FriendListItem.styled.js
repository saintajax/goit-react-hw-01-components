import styled from 'styled-components';

export const Item = styled.li`
  width: 50%;
  display: inline-flex;
  align-items: center;
  gap: 20px;

  margin-left: auto;
  margin-right: auto;
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
