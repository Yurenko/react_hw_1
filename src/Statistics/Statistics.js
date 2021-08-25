import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import RandomColor from '../RandomColor';

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(info => (
          <li
            className={style.item}
            key={info.id}
            style={{ backgroundColor: RandomColor() }}
          >
            <span className={style.label}>{info.label}</span>
            <span className={style.percentage}>{info.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

Statistics.defaultProps = {
  title: '',
};
export default Statistics;
