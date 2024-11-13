import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-between px-24">
      <div className="flex items-center h-4 w-26">
        <img src="nexcent.svg" alt="Logo" className="h-full object-contain" />
      </div>

      <div className="flex items-center justify-between w-[650px] h-9">
        <div className="flex space-x-4 w-[300px]">
          {['Home', 'Features', 'Community', 'Blog', 'Pricing'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} className="text-base text-gray-700 hover:text-gray-900">
              {item}
            </a>
          ))}
        </div>

        <button
          className="ml-6 flex items-center"
          style={{
            width: '133.25px',            // Exact width
            height: '36.29px',             // Exact height
            padding: '9.74px 22.27px',     // Padding
            backgroundColor: '#4CAF4F',    // Button color
            color: '#FFFFFF',              // Text color
            fontSize: '11.19px',           // Exact font size
            fontWeight: '500',             // Medium font weight
            borderRadius: '2.78px',        // Corner radius
          }}
        >
          <span>Register Now</span>
          <img
            src="Right.svg"               // Path to arrow icon
            alt="Arrow"
            style={{ marginLeft: '5.57px' }} // Space between text and icon
          />
        </button>
      </div>
    </header>
  );
};

export default Header;











