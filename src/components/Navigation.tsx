import React from 'react';
import { ArrowLeft, Search, Library, ShoppingCart } from 'lucide-react';
import { Screen } from '../types';

interface TopNavProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  cartCount: number;
  onBack?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ currentScreen, setScreen, cartCount, onBack }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm fixed-top">
      <div className="container-fluid container-lg">
        <div className="d-flex align-items-center gap-2">
          {onBack && (
            <button onClick={onBack} className="btn btn-outline-secondary btn-sm" aria-label="Back to home">
              <ArrowLeft size={16} />
            </button>
          )}
          <button className="navbar-brand mb-0 border-0 bg-transparent fw-bold" onClick={() => setScreen('home')}>
            The Literary Curator
          </button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${currentScreen === 'home' ? 'active fw-semibold' : ''}`}
                onClick={() => setScreen('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${currentScreen === 'search' ? 'active fw-semibold' : ''}`}
                onClick={() => setScreen('search')}
              >
                Search
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${currentScreen === 'cart' ? 'active fw-semibold' : ''}`}
                onClick={() => setScreen('cart')}
              >
                Cart ({cartCount})
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

interface BottomNavProps {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setScreen }) => {
  const navItems = [
    { id: 'home' as Screen, label: 'Home', icon: Library },
    { id: 'search' as Screen, label: 'Search', icon: Search },
    { id: 'cart' as Screen, label: 'Cart', icon: ShoppingCart },
  ];

  return (
    <nav className="d-lg-none fixed-bottom bg-white border-top py-2">
      <div className="container-fluid">
        <div className="d-flex justify-content-around align-items-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            className={`btn btn-sm d-flex flex-column align-items-center ${isActive ? 'btn-primary' : 'btn-outline-secondary'}`}
          >
            <Icon size={16} strokeWidth={isActive ? 3 : 2} />
            <span className="small mt-1">
              {item.label}
            </span>
          </button>
        );
      })}
        </div>
      </div>
    </nav>
  );
};
