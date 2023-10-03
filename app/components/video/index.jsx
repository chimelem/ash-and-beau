import PropTypes from 'prop-types';
import {useRef, useEffect} from 'react';

VideoPlayer.defaultProps = {
  play: false,
  controls: true,
};

VideoPlayer.propTypes = {
  play: PropTypes.bool,
  controls: PropTypes.bool,
  file: PropTypes.string.isRequired,
};

export default function VideoPlayer({play, controls, file}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (play && videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <video
      controls={controls}
      ref={videoRef}
      className="w-full h-full object-cover rounded-[20px]"
    >
      <source src={file} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
