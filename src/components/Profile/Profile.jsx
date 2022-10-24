import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  Tag,
  Location,
  StatList,
  StatItem,
  StatLable,
  StatQuantyty,
} from './Profile.styled';
import { Box } from '../Box/Box';
import { turnThousands } from '../utils/turnThousands';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box width="40%">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <StatList>
        <StatItem>
          <StatLable>Followers</StatLable>
          <StatQuantyty>{turnThousands(stats.followers)}</StatQuantyty>
        </StatItem>
        <StatItem>
          <StatLable>Views</StatLable>
          <StatQuantyty>{turnThousands(stats.views)}</StatQuantyty>
        </StatItem>
        <StatItem>
          <StatLable>Likes</StatLable>
          <StatQuantyty>{turnThousands(stats.likes)}</StatQuantyty>
        </StatItem>
      </StatList>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
