import React, { useState } from 'react';
import { Search, X, SlidersHorizontal, History, ArrowUpLeft } from 'lucide-react';
import { Book } from '../types';
import { BOOKS } from '../data/books';
import { BookCard } from '../components/BookCard';

interface SearchProps {
  onBookClick: (book: Book) => void;
  onAddToCart: (book: Book) => void;
}

export const SearchScreen: React.FC<SearchProps> = ({ onBookClick, onAddToCart }) => {
  const [query, setQuery] = useState('Modern Classics');
  const recentSearches = ['Atomic Habits', 'The Great Gatsby'];
  const trending = ['Philosophy', 'Digital Minimalism', 'Branding', 'Biographies', 'Contemporary Art'];

  return (
    <div className="py-3 pb-5">
      <div className="mb-4">
        <h1 className="h2 mb-3">Search</h1>
        <div className="input-group">
          <span className="input-group-text"><Search size={16} /></span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"
            placeholder="Titles, authors, or genres..."
          />
          {query && (
            <button className="btn btn-outline-secondary" type="button" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
          <button className="btn btn-outline-primary" type="button">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <section className="col-12 col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className="h6 mb-0">Recent Searches</h2>
            <button className="btn btn-sm btn-link">Clear All</button>
          </div>
          <div className="list-group">
            {recentSearches.map((s) => (
              <button key={s} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" type="button">
                <div className="d-flex align-items-center gap-2">
                  <History size={16} />
                  <span>{s}</span>
                </div>
                <ArrowUpLeft size={14} />
              </button>
            ))}
          </div>
        </section>

        <section className="col-12 col-md-6">
          <h2 className="h6 mb-2">Trending Now</h2>
          <div className="d-flex flex-wrap gap-2">
            {trending.map((t, i) => (
              <span 
                key={t}
                className={`badge p-2 ${i === 0 ? 'bg-primary' : 'bg-secondary'}`}
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Search Results (24)</h2>
          <div className="d-flex align-items-center gap-1 text-primary">
            <span className="small">Relevance</span>
            <SlidersHorizontal size={12} />
          </div>
        </div>
        <div>
          {BOOKS.slice(0, 3).map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              onClick={() => onBookClick(book)}
              onAddToCart={(e) => {
                e.stopPropagation();
                onAddToCart(book);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
