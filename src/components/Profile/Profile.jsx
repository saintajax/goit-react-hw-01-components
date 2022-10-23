import PropTypes from 'prop-types';
import css from './Profile.module.css';
import {
  ProfileWrapp,
  ProfileDescription,
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

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <StatList>
        <StatItem>
          <StatLable>Followers</StatLable>
          <StatQuantyty>
            {stats.followers > 1000 ? stats.followers / 1000 : stats.followers}
          </StatQuantyty>
        </StatItem>
        <StatItem>
          <StatLable>Views</StatLable>
          <StatQuantyty>
            {stats.views > 1000 ? stats.views / 1000 : stats.views}
          </StatQuantyty>
        </StatItem>
        <StatItem>
          <StatLable>Likes</StatLable>
          <StatQuantyty>
            {stats.likes > 1000 ? stats.likes / 1000 : stats.likes}
          </StatQuantyty>
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
  }),
};
