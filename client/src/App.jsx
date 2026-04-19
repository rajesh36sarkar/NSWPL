import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import './App.css';

// Context Providers
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Core Components
import Layout from './components/common/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const FAQ = lazy(() => import('./pages/FAQ'));  // ← Fixed: removed extra space
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <div className="app">
                <ScrollToTop />
                
                <Toaster 
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{
                    duration: 3000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                      borderRadius: '8px',
                    },
                    success: {
                      duration: 3000,
                      iconTheme: {
                        primary: '#228B22',
                        secondary: '#fff',
                      },
                      style: {
                        background: '#228B22',
                        color: '#fff',
                      },
                    },
                    error: {
                      duration: 4000,
                      iconTheme: {
                        primary: '#DC143C',
                        secondary: '#fff',
                      },
                      style: {
                        background: '#DC143C',
                        color: '#fff',
                      },
                    },
                  }}
                />
                
                <Suspense fallback={
                  <div className="app-loading">
                    <LoadingSpinner message="Loading Netai Stationery..." />
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="services" element={<Services />} />
                      <Route path="products" element={<Products />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="team" element={<Team />} />        
                      <Route path="faq" element={<FAQ />} /> 
                      <Route path="404" element={<NotFound />} />
                      <Route path="*" element={<NotFound />} />
                    </Route>
                  </Routes>
                </Suspense>
              </div>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;