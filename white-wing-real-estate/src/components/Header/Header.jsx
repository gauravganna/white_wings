import { useState } from 'react';
import logo from '../../assets/icons/logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  // Navigation items with dropdown status
  const navigationItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'About US', hasDropdown: false },
    { name: 'Properties', hasDropdown: true },
    { name: 'Media', hasDropdown: true },
    { name: 'Contact US', hasDropdown: false },
    { name: 'EMI Calc', hasDropdown: false },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-[#F5F6F7] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]  border-gray-200">
        <div className="w-full">
          {/* Desktop & Mobile Container */}
          <div className="flex items-center justify-between px-6 py-4 md:px-16 md:py-4 relative h-[90px]">
            
            {/* Logo - Fixed position top-left for both Mobile and Desktop */}
            <div className="flex items-center absolute top-0 left-0 p-0 m-0">
              <img 
                src={logo} 
                alt="White Wing Group" 
                className="w-[112.39px] h-[90px] object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 justify-center flex-1 ml-[112.39px]">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name)}
                  className={`flex items-center space-x-1 px-3 py-2 text-base font-medium transition-colors duration-200 relative group h-[58px] ${
                    activeItem === item.name
                      ? 'text-[#091E42] font-semibold'
                      : 'text-[#091E42] hover:text-[#3493F2]'
                  }`}
                >
                  <span>{item.name}</span>
                  
                  {/* Dropdown Icon */}
                  {item.hasDropdown && (
                    <svg
                      className="w-4 h-4 text-[#3493F2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                  
                  {/* Active State Underline */}
                  {activeItem === item.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#7DAADB]"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4 ml-auto">
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden flex items-center justify-center w-9 h-9 bg-[#06173E] rounded-full text-white hover:bg-[#091E42] transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* User Icon */}
              {/* <button className="flex items-center justify-center w-9 h-9 bg-[#3493F2] rounded-full text-white hover:bg-[#2563eb] transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg">
            <div className="p-6">
              
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMobileMenu}
                  className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-left text-base rounded-lg transition-colors duration-200 ${
                      activeItem === item.name
                        ? 'bg-[#3493F2] bg-opacity-10 text-[#3493F2] font-semibold'
                        : 'text-[#091E42] hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    
                    {/* Dropdown Icon for Mobile */}
                    {item.hasDropdown && (
                      <svg
                        className="w-4 h-4 text-[#3493F2]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 