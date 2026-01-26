import React from 'react';
import './Benefits.css';
import { Shield, CheckCircle, Zap, Globe, Lock, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: <Shield size={32} />,
    title: "Eco-Friendly Platform",
    description: "Our platform is designed with sustainability at its core, ensuring every transaction contributes to a greener planet."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Verified Projects",
    description: "We only list carbon projects that are verified by leading international standards and registries."
  },
  {
    icon: <Zap size={32} />,
    title: "Instant Retirement",
    description: "Carbon credits are retired immediately upon purchase to ensure permanent environmental impact."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Impact",
    description: "Support projects around the world that are making a real difference in the fight against climate change."
  },
  {
    icon: <Lock size={32} />,
    title: "Secure Transactions",
    description: "Built on secure blockchain technology to provide complete transparency and security for every purchase."
  },
  {
    icon: <BarChart size={32} />,
    title: "Detailed Reporting",
    description: "Track your environmental impact with detailed certificates and real-time statistics."
  }
];

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-header">
          <h2 className="benefits-title">Environmentally <span className="highlight">Conscious</span></h2>
          <p className="benefits-subtitle">Providing the most reliable path to carbon neutral future</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
