import React, { useState } from 'react';
import './TripifyApp.scss';

const destinations = [
  { name: 'Paris', country: 'France', image: 'paris.jpg' },
  { name: 'Tokyo', country: 'Japan', image: 'tokyo.jpg' },
  { name: 'New York', country: 'USA', image: 'newyork.jpg' },
];

const TripifyApp = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="tripify-app">
      <h1>Welcome to Tripify</h1>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="destination-item"
            onClick={() => handleSelectDestination(destination)}
          >
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.country}</p>
          </div>
        ))}
      </div>

      {selectedDestination && (
        <div className="destination-details">
          <h2>Details for {selectedDestination.name}</h2>
          <p>Country: {selectedDestination.country}</p>
          <img src={selectedDestination.image} alt={selectedDestination.name} />
        </div>
      )}
    </div>
  );
};

export default Tripify;
