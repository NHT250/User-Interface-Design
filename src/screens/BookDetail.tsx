import React from 'react';
import { Star, ShoppingBag, Bolt } from 'lucide-react';
import { Book } from '../types';

interface BookDetailProps {
  book: Book;
  onAddToCart: () => void;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book, onAddToCart }) => {
  return (
    <div className="pb-5" style={{ paddingBottom: '110px' }}>
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-5">
          <div className="card sticky-top" style={{ top: '84px' }}>
            <img
              src={book.coverUrl}
              alt={book.title}
              className="card-img-top"
              referrerPolicy="no-referrer"
            />
            {book.bestSeller && (
              <div className="card-body pt-2">
                <span className="badge bg-warning text-dark">Best Seller</span>
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <section className="mb-4">
            <p className="text-uppercase text-secondary small mb-1">{book.category}</p>
            <h1 className="display-6 fw-bold mb-1">{book.title}</h1>
            <p className="lead text-secondary">{book.author}</p>
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="d-flex text-warning">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(book.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="fw-semibold">{book.rating}</span>
              <span className="text-muted">({book.reviews.toLocaleString()} reviews)</span>
            </div>
            <div className="card p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-secondary">Price</span>
                <span className="h4 mb-0 text-primary">${book.price.toFixed(2)}</span>
              </div>
              <small className="text-muted">Members save with exclusive discounts.</small>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="h4 mb-3">About this book</h2>
            <p className="text-secondary">{book.description}</p>
          </section>

          <section className="mb-4">
            <div className="row g-3">
              <div className="col-6 col-md-3">
                <div className="card p-3 h-100 text-center">
                  <small className="text-muted">Pages</small>
                  <strong>{book.pages}</strong>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="card p-3 h-100 text-center">
                  <small className="text-muted">Language</small>
                  <strong>{book.language}</strong>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="card p-3 h-100 text-center">
                  <small className="text-muted">Published</small>
                  <strong>{book.published}</strong>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="card p-3 h-100 text-center">
                  <small className="text-muted">Format</small>
                  <strong>{book.format}</strong>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="fixed-bottom bg-white border-top py-3">
        <div className="container-fluid container-lg d-flex flex-column flex-md-row gap-2">
          <button onClick={onAddToCart} className="btn btn-outline-primary flex-fill d-flex align-items-center justify-content-center gap-2">
            <ShoppingBag size={18} />
            Add to Cart
          </button>
          <button className="btn btn-primary flex-fill d-flex align-items-center justify-content-center gap-2">
            Buy Now
            <Bolt size={16} />
          </button>
          </div>
      </footer>
    </div>
  );
};
