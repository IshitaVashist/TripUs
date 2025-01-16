import React, { useState } from 'react';
import './TripifyApp.scss';

interface Destination {
  name: string;
  country: string;
  image: string;
}

const destinations: Destination[] = [
  { name: 'Paris', country: 'France', image: 'paris.jpg' },
  { name: 'Tokyo', country: 'Japan', image: 'tokyo.jpg' },
  { name: 'New York', country: 'USA', image: 'newyork.jpg' },
];

const TripifyApp: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleSelectDestination = (destination: Destination) => {
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

export default TripifyApp;
