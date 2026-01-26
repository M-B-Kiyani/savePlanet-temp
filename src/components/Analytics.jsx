import "./Analytics.css";

function Analytics() {
  const analyticsData = [
    {
      id: 1,
      number: "1720672",
      label: "Carbon Credits Issued",
    },
    {
      id: 2,
      number: "3002",
      label: "Carbon Credits Purchased",
    },
    {
      id: 3,
      number: "6",
      label: "Carbon Credits Retired",
    },
    {
      id: 4,
      number: "3",
      label: "Number of Projects",
    },
    {
      id: 5,
      number: "7",
      label: "Number of Brokers",
    },
    {
      id: 6,
      number: "79",
      label: "Number of End Users",
    },
  ];

  return (
    <section className="analytics">
      <div className="container">
        <div className="analytics-header">
          <h2 className="analytics-title">
            Marketplace <span className="highlight">Analytics</span>
          </h2>
        </div>
        <div className="analytics-grid">
          {analyticsData.map((item) => (
            <div key={item.id} className="analytics-card">
              <div className="analytics-content">
                <h3 className="analytics-number">{item.number}</h3>
                <p className="analytics-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Analytics;
