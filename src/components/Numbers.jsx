const numbersList = [
  {
    title: '32',
    desc: 'Award Winning',
  },
  {
    title: '230+',
    desc: 'Project Done',
  },
  {
    title: '134+',
    desc: 'Happy Clients',
  },
  {
    title: '12+',
    desc: 'Year Experience',
  },
];

const Numbers = () => {
  return (
    <section className="relative py-12 md:py-20 z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-secondary text-center">
          Some Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-between gap-4 sm:gap-8 mt-12 md:mt-20">
          {numbersList.map((item, i) => (
            <div className="flex flex-col gap-4 text-center" key={i}>
              <h2 className="text-6xl font-bold">{item.title}</h2>
              <h5 className="text-lg opacity-75">{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
