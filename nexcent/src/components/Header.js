import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-24"> 
      <div className="flex items-center h-4 w-26"> 
        <img src="nexcent.svg" alt="Logo" className="h-full object-contain" />
      </div>

      <div className="flex items-center justify-between w-[650px] h-9"> 
        <div className="flex space-x-4 w-300]"> 
          {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} className="text-base text-gray-700 hover:text-gray-900">
              {item}
            </a>
          ))}
        </div>

        <button className="ml-6 w-130 h-full bg-blue-600 text-white font-semibold rounded-lg">
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Header;








