import {useNavigate} from '@remix-run/react';
import {CustomButton} from '~/components/buttons';
import Container from '~/components/container';

function QuoteSection({data}) {
  const navigate = useNavigate();

  return (
    <Container>
      <section
        className="py-50 flex flex-col items-center justify-center bg-cover bg-no-repeat w-full h-[800px] sm:bg-contain"
        style={{
          backgroundImage: `url(${data.coverImage})`,
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="text-center text-white max-w-md mx-auto">
          <img
            src={data.image}
            alt="..."
            className="w-full h-[300px] object-contain"
          />
          <div dangerouslySetInnerHTML={{__html: data.title}} />
          <p className="my-5">{data.subtitle}</p>
          <CustomButton
            text={data.buttonText}
            onClick={() => navigate(data.buttonLink)}
          />
        </div>
      </section>
    </Container>
  );
}

export default QuoteSection;
