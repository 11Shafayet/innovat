import { useState } from 'react';
import eight from '../assets/7.jpg';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.warning('All Fields are Required!');
    }
    return toast.success('Form Submitted Successfully!');
  };

  return (
    <section className="relative py-12 md:py-20 z-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div>
            <img src={eight} alt="" />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-secondary">
              Have Any Questions?
            </h2>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-y-4 w-full mt-12 max-w-[555px]"
            >
              <input
                type="text"
                placeholder="Name"
                className="border-0 border-b focus:border-b focus:outline-none focus:border-b-black w-full py-3 px-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-0 border-b focus:border-b focus:outline-none focus:border-b-black w-full py-3 px-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="border-0 border-b focus:border-b focus:outline-none focus:border-b-black w-full py-3 px-4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full py-3 px-6 font-secondary mt-4 hover:translate-y-1 duration-300"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
