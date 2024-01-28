import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.jpg';
import five from '../assets/5.png';

const projectsList = [
  {
    img: two,
    title: 'Linden Row',
    desc: '2400 21st Avenue South, Nashville, TN 37212, USA',
  },
  {
    img: three,
    title: 'Church and Union',
    desc: '201 4th Ave N, Nashville, TN, USA',
  },
  {
    img: four,
    title: 'Luna',
    desc: '2400 21st Avenue South, Nashville, TN 37212, USA',
  },
  {
    img: five,
    title: 'Church and Union',
    desc: '201 4th Ave N, Nashville, TN, USA',
  },
];

const Projects = () => {
  return (
    <section className="relative py-12 md:py-20 z-10">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-5xl font-secondary text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
          {projectsList.map((project, i) => {
            const { img, title, desc } = project;
            return (
              <div
                key={i}
                className={`${i === 1 && 'md:mt-32'} ${i === 2 && 'md:-mt-32'}`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-[600px] h-auto object-cover bg-gray-50"
                />
                <h5 className="font-secondary text-xl my-2">{title}</h5>
                <p className="text-sm opacity-60">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
