import about from '../assets/1.png';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    text: 'Architecture Design',
  },
  {
    text: 'Interior Design',
  },
  {
    text: 'Commercial Building',
  },
  {
    text: 'Urban Codes',
  },
  {
    text: 'Commercial Building',
  },
  {
    text: 'Residetial',
  },
];

const About = () => {
  return (
    <section className="relative py-12 md:py-20 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-11 items-center">
          <div>
            <h6 className="uppercase font-secondary text-sm">Company Story</h6>
            <h6 className="text-3xl md:text-4xl font-semibold font-secondary mt-2 mb-5">
              Our Company Journey
            </h6>
            <p className="opacity-60 leading-relaxed">
              Our values form the foundation of our work. Integrity, creativity,
              and attention to detail drive everything we do. We approach each
              project with dedication, embracing challenges as opportunities for
              innovation and excellence.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {services.map((service, i) => (
                <p key={i}>+ {service.text}</p>
              ))}
            </div>

            <div className="flex gap-x-8 mt-12">
              <div className="flex justify-center items-center gap-x-4">
                <h4 className="text-4xl md:text-5xl font-bold">12+</h4>
                <p className="text-center text-xl">
                  Years <br />
                  Experinece
                </p>
              </div>
              <div className="h-full w-0.5 bg-gray-200" />
              <div className="flex justify-center items-center">
                <button className="group flex justify-center items-center gap-x-2 text-lg hover:-translate-y-2 duration-500">
                  <span className="w-20 h-20 border rounded-full flex justify-center items-center -rotate-45 opacity-75 group-hover:opacity-100 group-hover:text-white group-hover:bg-black duration-500">
                    <FaArrowRight size={20} className="opacity-75" />
                  </span>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div>
            <img src={about} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
