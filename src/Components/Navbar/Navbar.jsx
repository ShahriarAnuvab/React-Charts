import { useState } from "react";
import Links from "./Links/Links";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(true)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];
  return (
    <nav className="container mx-auto  rounded-lg  md:my-5 bg-blue-600 text-white md:p-5">
      <div className="md:hidden p-2 text-3xl" onClick={()=>setOpen(!open)}>
        {
            open === true ? <HiOutlineMenu></HiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
        }
        
      </div>

      <ul className={`md:flex items-center justify-around  absolute md:static ${open? 'hidden': 'block'} bg-blue-600 p-5 md:p-2 `}>
        {routes.map((route) => (
          <Links key={route.id} links={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
