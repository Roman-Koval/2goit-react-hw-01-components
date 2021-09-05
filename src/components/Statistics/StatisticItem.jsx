import PropTypes from 'prop-types';
import { Container, LabelName } from './statistic.style';

const StatisticItem = ({ label, percentage }) => {
  return (
    <Container>
      <LabelName>{label}</LabelName>
      <span>{percentage}</span>
    </Container>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;