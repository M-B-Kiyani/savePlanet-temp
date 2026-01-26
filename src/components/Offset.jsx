import { useState } from "react";
import "./Offset.css";

function Offset() {
  const [selectedOffset, setSelectedOffset] = useState(null);

  const offsetData = [
    {
      id: 1,
      icon: "/offet.svg",
      title: "Personal Responsibility",
      description:
        "Taking action to reduce carbon emissions reflects your commitment to a healthier planet. Embracing sustainability helps you make a positive impact on the environment for future generations.",
    },
    {
      id: 2,
      icon: "/offet-1.svg",
      title: "Support Sustainability",
      description:
        "Your investment supports projects that are driving the transition to a more sustainable world, such as renewable energy, afforestation and emission reduction initiatives.",
    },
    {
      id: 3,
      icon: "/offet-2.svg",
      title: "Climate Awareness",
      description:
        "Your investment supports projects that are driving the transition to a more sustainable world, such as renewable energy, afforestation and emission reduction initiatives.",
    },
    {
      id: 4,
      icon: "/offet-3.svg",
      title: "Future Generations",
      description:
        "Offset investments contribute to the health and longevity of our planet, ensuring a more sustainable world for future generations.",
    },
    {
      id: 5,
      icon: "/offet-4.svg",
      title: "CSR",
      description:
        "Consumers are increasingly interested in supporting businesses that prioritize sustainability. Offsetting your carbon footprint enhances your reputation and demonstrates commitment to Corporate Social Responsibility (CSR).",
    },
    {
      id: 6,
      icon: "/offet-5.svg",
      title: "Competitive Advantage",
      description:
        "Sustainability initiatives can set you apart from competitors. It's not just good for the planet; it's good for business.",
    },
    {
      id: 7,
      icon: "/offet-6.svg",
      title: "Access to Green Funding",
      description:
        "Sustainability attracts eco-conscious investors and lenders, granting access to favorable loans, grants, and other green financing. This fuels growth, innovation, and positive impact.",
    },
    {
      id: 8,
      icon: "/offet-7.svg",
      title: "Employee Engagement",
      description:
        "Employees prefer working for companies that care about their environmental impact. Offsetting carbon emissions can increase employee engagement and retention.",
    },
    {
      id: 9,
      icon: "/offet-8.svg",
      title: "Risk Management",
      description:
        "Addressing your carbon footprint can help mitigate regulatory, reputational and physical risks associated with climate change.",
    },
  ];

  const openModal = (offset) => setSelectedOffset(offset);
  const closeModal = () => setSelectedOffset(null);

  return (
    <section className="offset">
      <div className="container">
        <div className="offset-header">
          <h2 className="offset-title">
            Why Offset Your <span className="highlight">Carbon Footprint?</span>
          </h2>
          <p className="offset-description">
            Offsetting your carbon footprint is not just an environmental
            obligation; it's a strategic choice with numerous benefits for both
            individuals and businesses. Here's why it's worth considering.
          </p>
        </div>
        <div className="offset-grid">
          {offsetData.map((item) => (
            <div
              key={item.id}
              className="offset-card"
              onClick={() => openModal(item)}
            >
              <div className="offset-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3 className="offset-card-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedOffset && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-icon">
              <img
                src={selectedOffset.icon}
                alt={selectedOffset.title}
                className="modal-offset-image"
              />
            </div>
            <h2 className="modal-title">{selectedOffset.title}</h2>
            <p className="modal-description">{selectedOffset.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Offset;
