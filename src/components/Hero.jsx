import star from '../assets/hero-start.png';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero from '../assets/hero.png';
import abstract from '../assets/hero-abstract.png';

const Hero = () => {
  return (
    <header className="py-12 md:py-20 md:min-h-[90vh] relative z-10 bg-contain  bg-no-repeat">
      <div className="container px-4 mx-auto">
        <div className="relative font-secondary">
          <div
            className="absolute right-36 top-28 w-20 h-20 bg-cover bg-center bg-no-repeat -z-10"
            style={{ backgroundImage: `url(${star})` }}
          />
          <div
            className="absolute -left-8 top-8 w-20 h-20 bg-cover bg-center bg-no-repeat -z-10"
            style={{ backgroundImage: `url(${star})` }}
          />
          <h5 className="text-2xl uppercase">RENOVATION</h5>
          <h5 className="text-4xl lg:text-6xl !leading-loose uppercase flex items-center gap-x-2">
            Hello
            <span
              className="inline-block w-72 h-24 bg-cover bg-center bg-no-repeat rounded-full object-cover overflow-hidden"
              style={{ backgroundImage: `url(${hero1})` }}
            />
          </h5>
          <h5 className="text-4xl lg:text-6xl !leading-loose uppercase flex items-center gap-x-2">
            <span
              className="inline-block w-96 h-24 bg-cover bg-center bg-no-repeat rounded-full object-cover overflow-hidden"
              style={{ backgroundImage: `url(${hero2})` }}
            />
            RENOVATIONS
          </h5>
        </div>

        <div className="relative flex justify-center items-center">
          <div
            className="absolute left-0  w-80 h-44 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${abstract})` }}
          />
          <img src={hero} alt="" className="relative lg:left-32 xl:left-44" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
