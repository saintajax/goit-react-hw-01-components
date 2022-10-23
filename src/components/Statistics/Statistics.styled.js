import styled from 'styled-components';
import { getRandomColor } from '../utils/randomColor';

export const StatSection = styled.section`
  display: flex;
  border: 1px solid grey;
  flex-direction: column;
  width: 320px;
`;

export const StatTitle = styled.h2`
  width: 100%;
  margin: 0;
  text-align: center;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  text-transform: uppercase;
  font-size: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: ${props => props.theme.space[0]};
  padding: 0;
  font-size: ${props => props.theme.fontSizes.m};
`;

export const StatItem = styled.li`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${getRandomColor};
`;

export const StatLable = styled.span``;
export const StatPercentage = styled.span``;
