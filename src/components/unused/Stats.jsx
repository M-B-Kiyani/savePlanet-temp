import React from 'react';
import './Stats.css';

const stats = [
  { label: "Carbon Credits Issued", value: "1,250,000+" },
  { label: "Credits Retired", value: "850,000+" },
  { label: "Active Projects", value: "45" },
  { label: "End Users", value: "12,000+" }
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
