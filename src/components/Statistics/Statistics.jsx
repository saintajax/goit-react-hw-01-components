import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomColor } from '../utils/randomColor';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLable,
  StatPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatSection>
    <StatTitle>{title}</StatTitle>
    <StatList>
      {stats.map(stat => (
        <StatItem key={stat.id}>
          <StatLable>{stat.label}</StatLable>
          <StatPercentage>{stat.percentage}%</StatPercentage>
        </StatItem>
      ))}
    </StatList>
  </StatSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
