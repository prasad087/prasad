import logo from "../assets/assets/PGlogo1.png";
import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className='flex flex-shrink-0 items-center'>
                <img src={logo} alt="logo" className="h-30 w-28" />
            </div>
            <div className="flex items-center gap-4 text-2xl">
                <a 
                    href="https://www.linkedin.com/in/prasad-gomkale-790aaa214/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    <FaLinkedin />
                </a>
                <a 
                    href="https://github.com/prasad087" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://drive.google.com/file/d/176irNoYlOaNJcx9k2dJMJlIzzy1swKZw/view?usp=sharing" 
                    download="Prasad_Gomkale_Resume.pdf"
                    className="bg-purple-600 text-white text-sm py-1 px-3 rounded hover:bg-blue-600 flex items-center"
                >
                    Download Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
