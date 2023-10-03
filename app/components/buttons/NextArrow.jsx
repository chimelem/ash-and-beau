import PropTypes from 'prop-types';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';

NextArrow.defaultProps = {
  classes: '',
  dark: true,
};

NextArrow.propTypes = {
  dark: PropTypes.bool,
  hasNext: PropTypes.bool,
  clickHandler: PropTypes.func,
  classes: PropTypes.string,
};

function NextArrow({clickHandler, hasNext, classes, dark}) {
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
      disabled={!hasNext}
    >
      <ArrowRightIcon className="h-14 w-14 p-3" aria-hidden="true" />
    </button>
  );
}

export default NextArrow;
