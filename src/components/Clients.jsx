import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';

const clientList = [client1, client2, client3, client4];

const Clients = () => {
  return (
    <section className="relative py-12 md:py-20 z-10">
      <div className="container mx-auto px-4">
        <h4 className="text-center font-secondary text-xl">
          We Have Served Over 200 Amazing Global Clients
        </h4>

        <div className="flex justify-between items-center gap-x-6 max-w-[1100px] mx-auto mt-12">
          {clientList.map((client, i) => (
            <div key={i} className="w-full">
              <img src={client} alt="" key={i} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
