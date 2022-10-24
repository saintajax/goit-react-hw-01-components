import styled from 'styled-components';

export const ProfileWrapp = styled.div`
  width: 320px;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
  border-radius: ${props => props.theme.radii.round};
  overflow: hidden;
  width: 150px;
  height: 150px;
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 25px;
  color: gray;
`;

export const Location = styled.p`
  margin: 0;
  margin-bottom: 40px;
  font-size: 25px;
  color: gray;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: lightgray;
`;

export const StatItem = styled.li`
  width: calc(100% / 3);
  height: 100px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StatLable = styled.span`
  font-size: 20px;
  color: grey;
`;

export const StatQuantyty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;
