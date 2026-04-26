import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const collections = [
    {
      id: 1,
      name: 'Eleganza',
      description: 'Timeless elegance meets modern functionality',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80'
    },
    {
      id: 2,
      name: 'Moderna',
      description: 'Contemporary design for modern living',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80'
    },
    {
      id: 3,
      name: 'Classica',
      description: 'Classic Italian craftsmanship',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80'
    },
    {
      id: 4,
      name: 'Lusso',
      description: 'Luxury redefined for discerning tastes',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
    }
  ];

  const features = [
    {
      icon: '✦',
      title: 'Bespoke Design',
      description: 'Every kitchen is uniquely crafted to your specifications'
    },
    {
      icon: '✧',
      title: 'Italian Craftsmanship',
      description: 'Heritage and expertise passed down through generations'
    },
    {
      icon: '✦',
      title: 'Premium Materials',
      description: 'Only the finest materials sourced from around the world'
    },
    {
      icon: '✧',
      title: 'Lifetime Warranty',
      description: 'We stand behind our work with comprehensive coverage'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1920&q=80" 
            alt="Luxury kitchen interior"
          />
        </div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Bespoke Kitchen Excellence</h1>
            <p className="hero-subtitle">
              Where Italian craftsmanship meets contemporary design
            </p>
            <div className="hero-buttons">
              <Link to="/collections" className="btn btn-light">Explore Collections</Link>
              <Link to="/contact" className="btn btn-outline btn-outline-light">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" 
                alt="Craftsmanship detail"
              />
            </div>
            <div className="about-content">
              <h2 className="section-title">Crafting Dreams Since 1926</h2>
              <p className="section-text">
                For nearly a century, Milliform has been at the forefront of bespoke kitchen design, 
                combining traditional Italian craftsmanship with innovative modern techniques.
              </p>
              <p className="section-text">
                Each kitchen we create is a masterpiece, tailored to your unique lifestyle and 
                refined to perfection by our master artisans.
              </p>
              <Link to="/about" className="btn btn-outline">Discover Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="section collections-preview">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Collections</h2>
            <p className="section-subtitle">
              Explore our range of exquisitely designed kitchen collections
            </p>
          </div>
          
          <div className="grid grid-4">
            {collections.map((collection) => (
              <div key={collection.id} className="collection-card">
                <div className="collection-image">
                  <img src={collection.image} alt={collection.name} />
                  <div className="collection-overlay">
                    <Link to="/collections" className="btn btn-light">View Collection</Link>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '50px' }}>
            <Link to="/collections" className="btn btn-primary">View All Collections</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Dream Kitchen?</h2>
            <p>Book a complimentary consultation with our design experts</p>
            <Link to="/contact" className="btn btn-light">Schedule Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
