import {useState, Fragment} from 'react';
import Container from '~/components/container';
import {Modal} from '~/components/modal';
import VideoPlayer from '~/components/video';

function VideoSection({data}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="my-20 px-5 sm:py-16 lg:py-24 lg:px-0">
      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        component={
          <div class="aspect-w-16 aspect-h-9 rounded-xl">
            <VideoPlayer play={modalOpen} file={data.videoLink} />
          </div>
        }
      />
      <Container>
        <button
          className="relative w-full flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-4xl group"
          onClick={() => {
            setModalOpen(true);
          }}
          aria-label="Watch the video"
        >
          <img
            className="object-cover w-full h-[300px] rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out sm:h-[600px]"
            src={data.thumb}
            alt=""
          />

          <svg
            className="absolute rounded-full p-2 pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out backdrop-blur-xl backdrop-saturate-125 bg-black/10"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M15.0842 40.7866C13.57 40.7866 12.1325 40.4224 10.8675 39.6941C7.87752 37.9691 6.22919 34.4616 6.22919 29.8424V16.1766C6.22919 11.5383 7.87752 8.04994 10.8675 6.32494C13.8575 4.59994 17.71 4.92577 21.735 7.24494L33.5609 14.0683C37.5667 16.3874 39.79 19.5691 39.79 23.0191C39.79 26.4691 37.5859 29.6508 33.5609 31.9699L21.735 38.7933C19.4159 40.1158 17.1542 40.7866 15.0842 40.7866ZM15.0842 8.08827C14.0492 8.08827 13.1292 8.31827 12.305 8.79744C10.235 9.98577 9.10419 12.6116 9.10419 16.1766V29.8233C9.10419 33.3883 10.235 35.9949 12.305 37.2024C14.375 38.4099 17.2117 38.0649 20.2975 36.2824L32.1234 29.4591C35.2092 27.6766 36.915 25.3958 36.915 22.9999C36.915 20.6041 35.2092 18.3233 32.1234 16.5408L20.2975 9.71744C18.4192 8.64411 16.6559 8.08827 15.0842 8.08827Z"
              fill="white"
            />
            <path
              d="M15.0842 8.08827C14.0492 8.08827 13.1292 8.31827 12.305 8.79744C10.235 9.98577 9.10419 12.6116 9.10419 16.1766V29.8233C9.10419 33.3883 10.235 35.9949 12.305 37.2024C14.375 38.4099 17.2117 38.0649 20.2975 36.2824L32.1234 29.4591C35.2092 27.6766 36.915 25.3958 36.915 22.9999C36.915 20.6041 35.2092 18.3233 32.1234 16.5408L20.2975 9.71744C18.4192 8.64411 16.6559 8.08827 15.0842 8.08827Z"
              fill="white"
            />
          </svg>
        </button>
      </Container>
    </section>
  );
}

export default VideoSection;
