
import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[3.675rem] flex items-center justify-between px-[6.265rem]">
      <div className="flex items-center h-[1.044rem] w-[6.72rem]"> {/* Flex aligns the logo within */}
        <img src="nexcent.svg" alt="Logo" className="h-full object-contain" />
      </div>

      <div className="flex items-center justify-between w-[40.655rem] h-[2.281rem]"> 
        <div className="flex space-x-[1.044rem] w-[19.238rem] h-[1.063rem]"> 
          {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} className="text-base text-gray-700 hover:text-gray-900">
              {item}
            </a>
          ))}
        </div>

        <button className="ml-[1.391rem] w-[8.328rem] h-full bg-blue-600 text-white font-semibold rounded-lg">
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Header;


