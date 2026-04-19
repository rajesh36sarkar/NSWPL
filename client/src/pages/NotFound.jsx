// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import './pageStyles/NotFound.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Netai Stationery</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <div className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
            <Link to="/">
              <Button variant="primary" size="large">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;