import PropTypes from 'prop-types';

function StatisticTitle({ title }) {
  return title ? <h2>{title}</h2> : '';
}

StatisticTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticTitle;