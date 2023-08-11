import React from 'react';
import './Sports.css';


const SportCard = ({ name, timings, fees }) => {
  return (
    <div className="sport-card">
      <h3>{name}</h3>
      <p>{timings}</p>
      <p>{fees}</p>
    </div>
  );
};


const sportsData = [
  {
    name: 'Rollball',
    timings: 'Mondays and Wednesdays, 4:00 PM - 6:00 PM',
    fees: 'Fees: $50/month',
  },
  {
    name: 'Skating',
    timings: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
    fees: 'Fees: $40/month',
  },
  {
    name: 'Basketball',
    timings: 'Fridays, 4:30 PM - 6:30 PM',
    fees: 'Fees: $60/month',
  },
  {
    name: 'Chess',
    timings: 'Saturdays, 10:00 AM - 12:00 PM',
    fees: 'Fees: $30/month',
  },
  {
    name: 'Karate',
    timings: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    fees: 'Fees: $55/month',
  },
  {
    name: 'Yoga',
    timings: 'Sundays, 9:00 AM - 10:30 AM',
    fees: 'Fees: $35/month',
  },
];

const Sports = () => {
  return (
    <div className="sports-container">
      <h2>Sports and Activities Offered</h2>
      <div className="sports-list">
        {sportsData.map((sport, index) => (
          <SportCard
            key={index}
            name={sport.name}
            timings={sport.timings}
            fees={sport.fees}
          />
        ))}
      </div>
    </div>
  );
};

export default Sports;
