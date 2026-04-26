import React from 'react';
import './About.css';

function About() {
  const timeline = [
    { year: '1926', event: 'Milliform founded in Milan, Italy' },
    { year: '1950', event: 'Expanded to international markets' },
    { year: '1985', event: 'Introduced innovative modular kitchen systems' },
    { year: '2000', event: 'Launched luxury bespoke division' },
    { year: '2015', event: 'Opened flagship showroom in London' },
    { year: '2026', event: 'Celebrating 100 years of excellence' }
  ];

  const values = [
    {
      title: 'Craftsmanship',
      description: 'Every piece is meticulously crafted by master artisans with decades of experience.',
      icon: '⚒'
    },
    {
      title: 'Innovation',
      description: 'We blend traditional techniques with cutting-edge technology and design.',
      icon: '✦'
    },
    {
      title: 'Sustainability',
      description: 'Committed to sustainable practices and responsible sourcing of materials.',
      icon: '❋'
    },
    {
      title: 'Excellence',
      description: 'Unwavering dedication to quality and attention to every detail.',
      icon: '★'
    }
  ];

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>A century of Italian craftsmanship and design excellence</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-content">
              <h2 className="section-title">Crafting Dreams Since 1926</h2>
              <p className="intro-text">
                For nearly a century, Milliform has been synonymous with exceptional Italian kitchen design. 
                Founded in Milan in 1926, our journey began with a simple philosophy: to create kitchens 
                that are not just functional spaces, but works of art that enhance the lives of those who use them.
              </p>
              <p className="intro-text">
                Today, we continue this legacy, combining time-honored craftsmanship with contemporary design 
                innovation. Each kitchen we create is a testament to our commitment to excellence, sustainability, 
                and the enduring beauty of Italian design.
              </p>
            </div>
            <div className="about-intro-image">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80" 
                alt="Craftsmanship"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title text-center">Our Journey</h2>
          <p className="section-subtitle text-center">
            A century of innovation and excellence
          </p>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <p className="section-subtitle text-center">
            The principles that guide everything we do
          </p>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="team-content">
            <div className="team-image">
              <img 
                src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80" 
                alt="Our team"
              />
            </div>
            <div className="team-text">
              <h2 className="section-title">Meet Our Artisans</h2>
              <p>
                Our team of master craftsmen, designers, and artisans bring decades of experience 
                and passion to every project. From the initial consultation to the final installation, 
                you'll work with experts who are dedicated to bringing your vision to life.
              </p>
              <p>
                We believe that the key to creating exceptional kitchens lies in the perfect balance 
                of traditional craftsmanship and modern innovation. Our artisans undergo years of 
                training and work with the finest materials to ensure every detail is perfect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
