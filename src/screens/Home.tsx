import React from 'react';
import { Search } from 'lucide-react';
import { Book } from '../types';
import { BOOKS } from '../data/books';

interface HomeProps {
  onBookClick: (book: Book) => void;
  onSearchClick: () => void;
}

export const Home: React.FC<HomeProps> = ({ onBookClick, onSearchClick }) => {
  const bestSellers = BOOKS.filter(b => b.bestSeller);
  const personalized = BOOKS.slice(0, 3);

  return (
    <div className="py-4 pb-5">
      <section className="mb-4">
        <button onClick={onSearchClick} className="btn btn-light border w-100 text-start p-3">
          <span className="d-inline-flex align-items-center gap-2 text-secondary">
            <Search size={18} />
            Search by title, author, or ISBN...
          </span>
        </button>
      </section>

      <section className="card bg-dark text-white mb-4 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP6CgOMMNUQWKeVFotvwlOL_eelkDfCmA2rv-fUW7vEEREQwXrXBoGf9zVp8Tv_TUutGogMFbqF3EsfkY953MrZyPbCMEzsarWS1w0p95bVIo8IR6FXqTn7T4dyezT7AIXkoAg6OTJ9LIC_kdf1DFD6NUCXo48Ux9TESlBWPEjxpl82871CBKPfw62s0f-7Z36H1PgFjPdzEkKbagKzfSdPxu3J7hEHodlZERIrQ2Hzs892SRSnxZqqpOyhZ-OF6Lp2pJnfGOoIZU"
          className="card-img"
          alt="Library"
          style={{ maxHeight: '320px', objectFit: 'cover', opacity: 0.45 }}
          referrerPolicy="no-referrer"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center p-4 p-md-5">
          <h2 className="display-6 fw-bold">New Arrivals: 20% Off</h2>
          <p className="mb-3">Explore the season's most anticipated releases curated by our editors.</p>
          <button className="btn btn-primary btn-lg align-self-start">Shop The Collection</button>
        </div>
      </section>

      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h4 mb-0">Browse Genres</h3>
          <button className="btn btn-outline-secondary btn-sm">View All</button>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {['Fiction', 'Self-help', 'Business', 'Mystery', 'Biography', 'Science'].map((genre, i) => (
            <span key={genre} className={`badge p-2 ${i === 0 ? 'bg-primary' : 'bg-secondary'}`}>
              {genre}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h4 mb-0">Best Sellers</h3>
        </div>
        <div className="row g-3">
          {bestSellers.map((book) => (
            <div key={book.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100" onClick={() => onBookClick(book)} style={{ cursor: 'pointer' }}>
                <img src={book.coverUrl} className="card-img-top" alt={book.title} referrerPolicy="no-referrer" />
                <div className="card-body">
                  <p className="small text-muted mb-1">{book.category}</p>
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text text-secondary">{book.author}</p>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-primary">${book.price.toFixed(2)}</span>
                  <button className="btn btn-sm btn-outline-primary">Read</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-3 p-md-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h4 mb-0">Personalized For You</h3>
        </div>
        <div className="row g-3">
          {personalized.map((book) => (
            <div key={book.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="card-img-top"
                  referrerPolicy="no-referrer"
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.author}</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
