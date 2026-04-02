/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Screen, Book } from './types';
import { TopNav, BottomNav } from './components/Navigation';
import { Home } from './screens/Home';
import { SearchScreen } from './screens/Search';
import { BookDetail } from './screens/BookDetail';
import { Cart } from './screens/Cart';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentScreen, setScreen] = useState<Screen>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [cart, setCart] = useState<Book[]>([]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setScreen('detail');
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (book: Book) => {
    setCart(prev => [...prev, book]);
    setScreen('cart');
    window.scrollTo(0, 0);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <Home 
            onBookClick={handleBookClick} 
            onSearchClick={() => setScreen('search')} 
          />
        );
      case 'search':
        return (
          <SearchScreen 
            onBookClick={handleBookClick} 
            onAddToCart={handleAddToCart} 
          />
        );
      case 'detail':
        return selectedBook ? (
          <BookDetail 
            book={selectedBook} 
            onAddToCart={() => handleAddToCart(selectedBook)} 
          />
        ) : null;
      case 'cart':
        return (
          <Cart 
            items={cart} 
            onRemove={removeFromCart} 
            onContinue={() => setScreen('home')} 
          />
        );
      default:
        return <Home onBookClick={handleBookClick} onSearchClick={() => setScreen('search')} />;
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      <TopNav 
        currentScreen={currentScreen} 
        setScreen={setScreen}
        cartCount={cart.length}
        onBack={currentScreen !== 'home' ? () => setScreen('home') : undefined} 
      />
      
      <main className="container-fluid container-lg py-4 mt-5 mb-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen + (selectedBook?.id || '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav 
        currentScreen={currentScreen} 
        setScreen={(s) => {
          setScreen(s);
          window.scrollTo(0, 0);
        }} 
      />
    </div>
  );
}
