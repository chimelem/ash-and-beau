import PropTypes from 'prop-types';

function Container({maxWidth, children}) {
  return <div className={`container mx-auto ${maxWidth}`}>{children}</div>;
}

Container.defaultProps = {
  maxWidth: '',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
};

export default Container;
