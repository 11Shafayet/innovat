import logo from '../assets/logo.png';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  return (
    <div className="mt-4">
      <div className="container px-4 mx-auto">
        <div className="w-full py-2 px-4 border border-primary rounded-xl flex justify-between items-center">
          <div className="hidden md:block">
            <ul className="flex gap-x-6">
              <li className="cursor-pointer relative group font-semibold font-secondary text-sm">
                <span className="absolute w-3 h-3 border-t border-l border-black block -top-0.5 -left-1 -z-10" />
                <span className="absolute w-3 h-3 border-b border-r border-black block -bottom-0.5 -right-1 -z-10" />
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer relative group font-semibold font-secondary text-sm group">
                <span className="absolute w-3 h-3 group-hover:border-t group-hover:border-l border-black block -top-0.5 -left-1 -z-10 duration-300 -translate-y-4 group-hover:translate-y-0" />
                <span className="absolute w-3 h-3 group-hover:border-b group-hover:border-r border-black block -bottom-0.5 -right-1 -z-10 duration-300 translate-y-4 group-hover:translate-y-0" />
                <a href="#home">Projects</a>
              </li>
              <li className="cursor-pointer relative group font-semibold font-secondary text-sm group">
                <span className="absolute w-3 h-3 group-hover:border-t group-hover:border-l border-black block -top-0.5 -left-1 -z-10 duration-300 -translate-y-4 group-hover:translate-y-0" />
                <span className="absolute w-3 h-3 group-hover:border-b group-hover:border-r border-black block -bottom-0.5 -right-1 -z-10 duration-300 translate-y-4 group-hover:translate-y-0" />
                <a href="#home">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={logo} alt="" className="max-w-[44px] h-auto" />
          </div>
          <div>
            <TbGridDots size={30} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
