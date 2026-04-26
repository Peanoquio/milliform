import React, { useState } from 'react';
import './Collections.css';

function Collections() {
  const [filter, setFilter] = useState('all');

  const collections = [
    {
      id: 1,
      name: 'Eleganza',
      category: 'modern',
      description: 'Timeless elegance meets modern functionality with clean lines and sophisticated finishes.',
      features: ['Italian Marble', 'Soft-Close Drawers', 'LED Lighting'],
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80'
    },
    {
      id: 2,
      name: 'Moderna',
      category: 'modern',
      description: 'Contemporary design for modern living with innovative storage solutions.',
      features: ['Smart Storage', 'Integrated Appliances', 'Minimalist Design'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
    },
    {
      id: 3,
      name: 'Classica',
      category: 'classic',
      description: 'Classic Italian craftsmanship with ornate details and traditional finishes.',
      features: ['Hand-Carved Details', 'Solid Wood', 'Traditional Hardware'],
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80'
    },
    {
      id: 4,
      name: 'Lusso',
      category: 'luxury',
      description: 'Luxury redefined for discerning tastes with premium materials.',
      features: ['Gold Accents', 'Premium Stone', 'Custom Finishes'],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
    },
    {
      id: 5,
      name: 'Industriale',
      category: 'modern',
      description: 'Industrial chic meets Italian design with exposed materials and bold statements.',
      features: ['Metal Finishes', 'Concrete Elements', 'Open Shelving'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80'
    },
    {
      id: 6,
      name: 'Rustico',
      category: 'classic',
      description: 'Rustic charm with reclaimed wood and natural stone elements.',
      features: ['Reclaimed Wood', 'Natural Stone', 'Vintage Details'],
      image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80'
    },
    {
      id: 7,
      name: 'Minimalista',
      category: 'modern',
      description: 'Pure minimalism with handleless cabinets and seamless surfaces.',
      features: ['Handleless Design', 'Seamless Surfaces', 'Hidden Storage'],
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80'
    },
    {
      id: 8,
      name: 'Prestigio',
      category: 'luxury',
      description: 'Ultimate prestige with bespoke details and exclusive materials.',
      features: ['Bespoke Design', 'Rare Materials', 'Artisan Crafted'],
      image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80'
    }
  ];

  const filteredCollections = filter === 'all' 
    ? collections 
    : collections.filter(item => item.category === filter);

  return (
    <div className="collections-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Collections</h1>
          <p>Discover our exquisite range of bespoke kitchen designs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              All Collections
            </button>
            <button 
              className={filter === 'modern' ? 'active' : ''} 
              onClick={() => setFilter('modern')}
            >
              Modern
            </button>
            <button 
              className={filter === 'classic' ? 'active' : ''} 
              onClick={() => setFilter('classic')}
            >
              Classic
            </button>
            <button 
              className={filter === 'luxury' ? 'active' : ''} 
              onClick={() => setFilter('luxury')}
            >
              Luxury
            </button>
          </div>

          <div className="grid grid-3">
            {filteredCollections.map((collection) => (
              <div key={collection.id} className="collection-card-detailed">
                <div className="collection-card-image">
                  <img src={collection.image} alt={collection.name} />
                </div>
                <div className="collection-card-content">
                  <h3>{collection.name}</h3>
                  <p className="collection-description">{collection.description}</p>
                  <div className="collection-features">
                    {collection.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <button className="btn btn-outline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collections;
