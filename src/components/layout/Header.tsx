import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const location = useLocation();
  
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Sun className="text-amber-500 h-8 w-8" />
            <span className="text-xl md:text-2xl font-bold text-amber-700">ChhathDelights</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
            <NavLink to="/shop" label="Shop" currentPath={location.pathname} onClick={closeMenu} />
            <NavLink to="/festival-info" label="Festival Info" currentPath={location.pathname} onClick={closeMenu} />
            <NavLink to="/contact" label="Contact" currentPath={location.pathname} onClick={closeMenu} />
          </nav>
          
          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative" onClick={closeMenu}>
              <ShoppingBag className={`h-6 w-6 ${isScrolled ? 'text-amber-700' : 'text-amber-600'}`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-amber-700' : 'text-amber-600'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-amber-700' : 'text-amber-600'}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
              <NavLink to="/shop" label="Shop" currentPath={location.pathname} onClick={closeMenu} />
              <NavLink to="/festival-info" label="Festival Info" currentPath={location.pathname} onClick={closeMenu} />
              <NavLink to="/contact" label="Contact" currentPath={location.pathname} onClick={closeMenu} />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath, onClick }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      className={`transition-colors duration-200 ${
        isActive 
          ? 'text-amber-600 font-medium'
          : 'text-gray-700 hover:text-amber-500'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;