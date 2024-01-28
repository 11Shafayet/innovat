import { FaArrowRight } from 'react-icons/fa';

const serviceList = [
  {
    title: 'Architecture Design',
    desc: 'Space planning is a fundamental aspect off interior design.',
  },
  {
    title: 'Home Renovation',
    desc: 'Space planning is a fundamental aspect off interior design.',
  },
  {
    title: 'Space Planning',
    desc: 'Space planning is a fundamental aspect off interior design.',
  },
  {
    title: 'Contractors & Builders',
    desc: 'Space planning is a fundamental aspect off interior design.',
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative py-12 md:py-20 z-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h6 className="font-secondary">Feature Service</h6>
            <h2 className="text-3xl md:text-5xl font-secondary">What We Do</h2>
          </div>

          <div>
            <p className="max-w-[555px] opacity-75">
              At Luxury Living Designs, we specialize in creating extraordinary
              living spaces that exude elegance.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <button className="group flex justify-center items-center gap-x-2 hover:-translate-y-2 duration-500">
              <span className="w-16 h-16 border rounded-full flex justify-center items-center -rotate-45 opacity-75 group-hover:opacity-100 group-hover:text-white group-hover:bg-black duration-500">
                <FaArrowRight size={20} className="opacity-75" />
              </span>
              View All Services
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-12">
          {serviceList.map((service, i) => {
            return (
              <div
                className="border-t py-12 flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-center"
                key={i}
              >
                <h4 className="font-secondary text-3xl flex items-center gap-x-4 max-w-[400px]">
                  <span>0{i + 1}/</span> {service.title}
                </h4>

                <p className="opacity-60">{service.desc}</p>
                <div className="flex justify-center items-center">
                  <button className="group flex justify-center items-center gap-x-2 hover:-translate-y-2 duration-500">
                    <span className="w-16 h-16 border rounded-full flex justify-center items-center -rotate-45 opacity-75 group-hover:opacity-100 group-hover:text-white group-hover:bg-black duration-500">
                      <FaArrowRight size={20} className="opacity-75" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
