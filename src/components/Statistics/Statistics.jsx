import PropTypes from 'prop-types';
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
    {title && <StatTitle>{title}</StatTitle>}
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <StatLable>{label}</StatLable>
          <StatPercentage>{percentage}%</StatPercentage>
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
  ).isRequired,
};
