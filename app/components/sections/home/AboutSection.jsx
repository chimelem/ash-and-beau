import Container from '~/components/container';

function AboutSection({data}) {
  return (
    <Container maxWidth="max-w-6xl">
      <section className="pt-10 pb-40 rounded-lg flex flex-col items-center">
        <p className="uppercase text-sm sm:text-base">{data.overline}</p>
        <img src={data.image} className="h-40 w-auto sm:h-60" alt="" />
        <h4 className=" text-xl font-light font-Libre text-center sm:text-3xl">
          {data.subtitle}
        </h4>
      </section>
    </Container>
  );
}

export default AboutSection;
