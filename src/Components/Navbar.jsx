import { React } from "react";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex sticky top-0 bg-black text-white justify-between mx-auto h-24 p-4 items-center max-w-full z-50">

      <h1 className="text-green-600  w-full font-bold text-4xl  ">Mero Shop</h1>

      <ul className="hidden md:flex">
        <li className="p-4 ">Home</li>
        <li className="p-4 ">Poducts</li>
        <li className="p-4 ">About</li>
        <li className="p-4 ">Contact</li>
        <li className="p-4 ">Cart</li>
      </ul>

      <div className=" block md:hidden" onClick={handleClick}>
       { !nav? <IoMdMenu /> :< IoClose />}
      </div>

      <ul
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full  border-r border-r-gray-900  mt-7 px-4 ease-in-out  duration-500 bg-black "
            : "fixed  left-[-100%]  p-4 uppercase"
        }
      >
        <h1 className="text-[#00df9a] w-full font-bold text-4xl bg-transparent ">REACT.</h1>
        <li className="py-3 pt-4 border-b border-gray-400 ">Home</li>
        <li className="py-3 pt-4 border-b border-gray-400 ">Company</li>
        <li className="py-3 pt-4 border-b border-gray-400 ">Resources</li>
        <li className="py-3 pt-4 border-b border-gray-400 ">Contact</li>
        <li className="py-3 pt-4 border-b border-gray-400 ">About</li>
      </ul>

    </div>
  );
}

export default Navbar;
