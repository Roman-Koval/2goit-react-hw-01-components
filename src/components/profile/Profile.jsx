import PropTypes from 'prop-types';
import {
    Container,
    Image,
    Description,
    DescriptionItems,
    DescriptionItemsName,
    Stats,
    StatsItem,
    StatsItemName,
  } from './profile.style';
const ProfileWrap = ({ avatar, name, tag, location, stats }) => {
    return (
      <Container>
        <Description>
            <Image src={avatar} alt="Аватар пользователя" />
            <DescriptionItems>
            <DescriptionItemsName>{name}</DescriptionItemsName>
            </DescriptionItems>
            <DescriptionItems>{'@' + tag}</DescriptionItems>
            <DescriptionItems>{location}</DescriptionItems>
        </Description>
  
        <Stats>
          <StatsItem>
            <StatsItemName>Followers </StatsItemName>
            <span>{stats.followers}</span>
          </StatsItem>
          <StatsItem>
            <StatsItemName>Views </StatsItemName>
            <span>{stats.views}</span>
          </StatsItem>
          <StatsItem>
            <StatsItemName>Likes </StatsItemName>
            <span>{stats.likes}</span>
          </StatsItem>
        </Stats>
      </Container>
    );
  };

  ProfileWrap.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    ),
  };
  
  export default ProfileWrap;