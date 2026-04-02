import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onClick: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick, onAddToCart }) => {
  return (
    <div onClick={onClick} className="card mb-3" style={{ cursor: 'pointer' }}>
      <div className="row g-0">
        <div className="col-4 col-md-3">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
            className="img-fluid rounded-start h-100"
            style={{ objectFit: 'cover' }}
          referrerPolicy="no-referrer"
        />
        </div>
        <div className="col-8 col-md-9">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <p className="small text-muted mb-1">
              {book.category}
            </p>
                <h5 className="card-title mb-1">
              {book.title}
                </h5>
                <p className="card-text text-secondary">{book.author}</p>
              </div>
              <button className="btn btn-outline-danger btn-sm" type="button">
                <Heart size={16} />
              </button>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <div className="d-flex align-items-center gap-1 text-warning">
                  <Star size={12} fill="currentColor" />
                  <span className="small fw-semibold text-dark">{book.rating}</span>
                </div>
                <span className="fw-bold text-primary">${book.price.toFixed(2)}</span>
              </div>
              <button 
                type="button"
                onClick={onAddToCart}
                className="btn btn-primary btn-sm"
              >
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
