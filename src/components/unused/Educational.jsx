import React from 'react';
import './Educational.css';
import { Heart, Leaf, TrendingUp, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: <Heart size={24} color="#015404" />,
    title: "Personal Responsibility",
    text: "Taking ownership of your carbon footprint is the first step towards a sustainable future."
  },
  {
    icon: <Leaf size={24} color="#015404" />,
    title: "Support Sustainability",
    text: "Your contributions go directly to projects that promote environmental health and biodiversity."
  },
  {
    icon: <TrendingUp size={24} color="#015404" />,
    title: "Climate Leadership",
    text: "Leading by example inspires others to join the movement towards net-zero emissions."
  },
  {
    icon: <ShieldCheck size={24} color="#015404" />,
    title: "Future Security",
    text: "Investing in carbon projects today ensures a more stable and safe climate for the next generation."
  }
];

function Educational() {
  return (
    <section className="educational">
      <div className="container">
        <div className="educational-header">
          <h2 className="educational-title">Why <span className="highlight">Offset?</span></h2>
          <p className="educational-subtitle">Understand the impact of your actions on the planet</p>
        </div>
        <div className="educational-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-text">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Educational;
