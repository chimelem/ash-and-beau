function TestimonyCard({item}) {
  return (
    <div className="rounded-lg bg-alternate p-10 h-full">
      <div className="mb-10 flex flex-row items-center justify-between">
        {item.verified && (
          <span className="text-primary-400 bg-primary-200 rounded-lg p-2">
            Verified User
          </span>
        )}
        <img src="/images/star.svg" className="" />
      </div>

      <div>
        <h1 className="font-Libre font-bold text-2xl uppercase">
          {item.title}
        </h1>
        <p className="text-sm my-5">{item.message}</p>
        <span className="capitalize">{'- ' + item.name}</span>
      </div>
    </div>
  );
}

export default TestimonyCard;
