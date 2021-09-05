import React from 'react';
import PropTypes from 'prop-types';
import StatisticTitle from "./StatisticTitle";
import StatisticItem from "./StatisticItem";
import {
  Statistic,
  StatisticList,
} from './statistic.style';



const Statistics = ({title, stats}) => {
return (
<Statistic>
  <StatisticTitle
    title={title}
  />
  <StatisticList>
    {stats.map((stat) => {
          return (
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
   </StatisticList>
</Statistic>
);
};

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

export default Statistics;