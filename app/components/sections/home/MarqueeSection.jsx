function MarqueeSection({data}) {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 flex animate-marquee whitespace-nowrap">
        {data.map((item, fIndex) => (
          <div key={fIndex} className="flex flex-row  items-center mx-8">
            <img src={item.image} className="h-5 w-auto" ait="" />
            <p className="ml-2 text-base uppercase">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="absolute flex top-0 py-12 animate-marquee2 whitespace-nowrap">
        {data.map((item, sIndex) => (
          <div key={sIndex} className="flex flex-row items-center mx-8">
            <img src={item.image} className="h-5 w-auto" ait="" />
            <p className="ml-2 text-base uppercase">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeSection;
