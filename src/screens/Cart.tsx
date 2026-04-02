import React from 'react';
import { Minus, Plus, X, ArrowLeft, HelpCircle, Lock, ShieldCheck, Package, Truck } from 'lucide-react';
import { Book } from '../types';

interface CartProps {
  items: Book[];
  onRemove: (id: string) => void;
  onContinue: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onContinue }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = items.length > 0 ? 4.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="py-3 pb-5">
      <div className="mb-4">
        <p className="text-uppercase small text-secondary mb-1">Review Order</p>
        <h1 className="display-6 fw-bold">Your Cart</h1>
      </div>

      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-7">
          {items.length === 0 ? (
            <div className="alert alert-secondary text-center p-5">
              <p className="mb-2">Your cart is empty</p>
              <button 
                onClick={onContinue}
                className="btn btn-primary"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body position-relative">
                  <div className="row g-3 align-items-center">
                    <div className="col-4 col-md-3">
                  <img 
                    src={item.coverUrl} 
                    alt={item.title} 
                        className="img-fluid rounded"
                        style={{ objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                    <div className="col-8 col-md-9">
                      <p className="small text-muted mb-1">{item.category}</p>
                      <h3 className="h5 mb-1">{item.title}</h3>
                      <p className="text-secondary mb-2">By {item.author}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Qty controls">
                          <button className="btn btn-outline-secondary" type="button"><Minus size={14} /></button>
                          <button className="btn btn-outline-secondary" type="button">1</button>
                          <button className="btn btn-outline-secondary" type="button"><Plus size={14} /></button>
                        </div>
                        <span className="fw-bold text-primary">${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="btn btn-outline-danger btn-sm position-absolute top-0 end-0 m-3"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))
          )}

          <button 
            onClick={onContinue}
            className="btn btn-link text-decoration-none ps-0 d-inline-flex align-items-center gap-2"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </button>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card p-3 sticky-top" style={{ top: '84px' }}>
            <h2 className="h4 mb-3">Summary</h2>
            <div className="mb-3">
              <label className="form-label">Discount Code</label>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="FOLIO2024"
                />
                <button className="btn btn-secondary" type="button">
                  Apply
                </button>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <strong>${shipping.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="d-inline-flex align-items-center gap-1">Estimated Tax <HelpCircle size={12} /></span>
                <strong>${tax.toFixed(2)}</strong>
                </div>
              <div className="d-flex justify-content-between border-top pt-2">
                <span className="h6 mb-0">Total</span>
                <span className="h5 mb-0 text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="btn btn-primary w-100 mb-3" type="button">
              Proceed to Payment
            </button>

            <div className="d-flex justify-content-center align-items-center gap-3 text-secondary">
              <Lock size={20} />
              <ShieldCheck size={20} />
              <Package size={20} />
            </div>
          </div>

          <div className="alert alert-warning mt-3 d-flex align-items-start gap-2">
            <Truck size={18} />
            <div>
              <p className="fw-semibold mb-1">Complimentary Delivery</p>
              <p className="small mb-0">Your curation qualifies for carbon-neutral priority shipping.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-4 border-top text-center mt-4">
        <p className="small text-muted mb-0">
          Folio Modern (c) 2024 - Fine Editions Curated for the Discerning Reader
        </p>
      </footer>
    </div>
  );
};
