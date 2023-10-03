import PropTypes from 'prop-types';
import {LoadingIcon} from '.';

function CustomButton({text, type, classes, loading, onClick, icon, ...rest}) {
  return (
    <button
      {...rest}
      type={type}
      onClick={onClick}
      className={classes}
      disabled={loading}
    >
      {loading && <LoadingIcon />}
      {text}

      {icon && icon}
    </button>
  );
}

CustomButton.defaultProps = {
  type: 'button',
  classes:
    'inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-xl hover:bg-primary-500 focus:bg-primary-500',
  loading: false,
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  type: PropTypes.string,
  classes: PropTypes.string,
  loading: PropTypes.bool,
};

export default CustomButton;
