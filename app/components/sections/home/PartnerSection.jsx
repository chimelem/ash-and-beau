import Container from '~/components/container';

function PartnerSection({data}) {
  return (
    <Container>
      <div className="py-12 flex flex-col items-center">
        <div
          className="text-6xl capitalize font-Libre text-center"
          dangerouslySetInnerHTML={{__html: data.title}}
        />
        <h4>{data.subtitle}</h4>
        <div className="my-6 flex flex-col justify-between sm:flex-row">
          {data.logos.map((logo) => (
            <div key={logo.title} className="flex flex-col items-center p-10">
              <img src={logo.image} className="h-14 w-auto" alt="..." />
              <p className="py-5 text-base font-light">{logo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default PartnerSection;
