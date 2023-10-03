import PropTypes from 'prop-types';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';

PrevArrow.defaultProps = {
  classes: '',
  dark: true,
};

PrevArrow.propTypes = {
  hasPrev: PropTypes.bool,
  dark: PropTypes.bool,
  clickHandler: PropTypes.func,
  classes: PropTypes.string,
};

function PrevArrow({clickHandler, hasPrev, classes, dark}) {
  return (
    <button
      className={classNames(
        `backdrop-blur-xl backdrop-saturate-150 bg-black/10 rounded-full border m-2 ${classes}`,
        {
          'text-white border-white/50': dark,
          'text-black border-black/50': !dark,
        },
      )}
      style={{margin: 'auto'}}
      onClick={clickHandler}
      disabled={!hasPrev}
    >
      <ArrowLeftIcon className="h-14 w-14 p-3" aria-hidden="true" />
    </button>
  );
}

export default PrevArrow;
