import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Numbers from '../components/Numbers';
import Projects from '../components/Projects';
import WhatWeDo from '../components/WhatWeDo';

const Home = () => {
  return (
    <div className="font-primary">
      <Hero />
      <Clients />
      <About />
      <Projects />
      <WhatWeDo />
      <Numbers />
      <Contact />
    </div>
  );
};

export default Home;
