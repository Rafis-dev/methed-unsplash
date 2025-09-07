import MoonLoader from 'react-spinners/MoonLoader';
import PropTypes from 'prop-types';
import style from './Preloader.module.css';

export const Preloader = ({ size }) => {
  console.log();
  return (
    <MoonLoader className={style.preloader} color="#12d6bcff" size={size} />
  );
};

Preloader.propTypes = {
  size: PropTypes.number,
};
