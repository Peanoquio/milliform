import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Mayfair Penthouse',
      location: 'London, UK',
      category: 'Residential',
      description: 'A luxurious penthouse kitchen featuring custom marble countertops and state-of-the-art appliances.',
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80',
      details: 'This stunning 50m² kitchen combines Italian elegance with British sophistication. Features include Calacatta marble island, custom oak cabinetry, and integrated Miele appliances.'
    },
    {
      id: 2,
      title: 'Chelsea Townhouse',
      location: 'London, UK',
      category: 'Residential',
      description: 'Contemporary design meets classic architecture in this beautiful Victorian townhouse kitchen.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      details: 'A perfect blend of modern minimalism and period charm. Custom designed to fit the unique architecture of this Grade II listed building.'
    },
    {
      id: 3,
      title: 'Cotswold Manor',
      location: 'Gloucestershire, UK',
      category: 'Residential',
      description: 'A grand country kitchen with rustic charm and modern convenience.',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
      details: 'Featuring reclaimed wood, traditional craftsmanship, and a large central island perfect for family gatherings.'
    },
    {
      id: 4,
      title: 'The Ritz Restaurant',
      location: 'Paris, France',
      category: 'Commercial',
      description: 'Professional kitchen design for a Michelin-starred restaurant.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      details: 'A state-of-the-art commercial kitchen designed for efficiency and elegance, serving one of Paris\'s finest establishments.'
    },
    {
      id: 5,
      title: 'Notting Hill Villa',
      location: 'London, UK',
      category: 'Residential',
      description: 'Modern minimalist kitchen with handleless cabinets and premium finishes.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
      details: 'Clean lines, seamless surfaces, and innovative storage solutions define this contemporary masterpiece.'
    },
    {
      id: 6,
      title: 'Lake Como Estate',
      location: 'Como, Italy',
      category: 'Residential',
      description: 'Lakeside luxury with panoramic views and indoor-outdoor living.',
      image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80',
      details: 'An expansive kitchen that opens to a terrace overlooking Lake Como, featuring natural stone and custom lighting.'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of exceptional kitchen installations</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-info">
                      <span className="project-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p className="project-location">{project.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <span className="project-category">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="project-location">
                  <strong>Location:</strong> {selectedProject.location}
                </p>
                <p className="project-description">{selectedProject.description}</p>
                <p className="project-details">{selectedProject.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
