import Timeline from "./Timeline";

// Example usage of the Timeline component
const TimelineExample = () => {
  // Example data for the timeline
  const timelineSteps = [
    {
      label: "Step 1",
      title: "Connect to Your Wallet",
      description: "Link your digital wallet to get started with the platform.",
    },
    {
      label: "Step 2",
      title: "Transfer of the NFT",
      description: "Complete the secure transfer of your NFT to your wallet.",
    },
    {
      label: "Step 3",
      title: "Ownership Confirmation",
      description:
        "Receive confirmation of your NFT ownership on the blockchain.",
    },
    {
      label: "Step 4",
      title: "Follow Up Communications",
      description:
        "Get updates and important information about your investment.",
    },
    {
      label: "Step 5",
      title: "Receive Earnings and Updates",
      description: "Start receiving returns and regular project updates.",
    },
    {
      label: "Step 6",
      title: "Community Participation",
      description:
        "Join our community and participate in governance decisions.",
    },
  ];

  // Simple timeline steps without descriptions
  const simpleSteps = [
    { title: "Planning Phase" },
    { title: "Development" },
    { title: "Testing" },
    { title: "Deployment" },
    { title: "Maintenance" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Timeline Component Examples</h2>

      {/* Animated vertical timeline */}
      <section style={{ marginBottom: "4rem" }}>
        <h3>Animated Vertical Timeline</h3>
        <Timeline
          steps={timelineSteps}
          animated={true}
          lineColor="#4CAF50"
          activeDotColor="#FFD700"
        />
      </section>

      {/* Immediate load timeline */}
      <section style={{ marginBottom: "4rem" }}>
        <h3>Immediate Load Timeline (No Delay)</h3>
        <Timeline
          steps={simpleSteps}
          animated={true}
          immediateLoad={true}
          lineColor="#FF6B6B"
          activeDotColor="#4ECDC4"
        />
      </section>

      {/* Static vertical timeline */}
      <section style={{ marginBottom: "4rem" }}>
        <h3>Static Vertical Timeline</h3>
        <Timeline
          steps={simpleSteps}
          animated={false}
          lineColor="#2196F3"
          activeDotColor="#FF5722"
        />
      </section>

      {/* Horizontal timeline */}
      <section style={{ marginBottom: "4rem" }}>
        <h3>Horizontal Timeline</h3>
        <Timeline
          steps={simpleSteps}
          orientation="horizontal"
          animated={true}
          lineColor="#9C27B0"
          activeDotColor="#FFC107"
        />
      </section>

      {/* Custom styled timeline */}
      <section>
        <h3>Custom Styled Timeline</h3>
        <Timeline
          steps={[
            {
              label: "Phase 1",
              title: "Research & Discovery",
              content: (
                <div style={{ color: "#666", fontStyle: "italic" }}>
                  Custom content can go here
                </div>
              ),
            },
            {
              label: "Phase 2",
              title: "Design & Prototyping",
            },
            {
              label: "Phase 3",
              title: "Implementation",
            },
          ]}
          animated={true}
          lineColor="#E91E63"
          activeDotColor="#00BCD4"
          dotSize="30px"
          className="custom-timeline"
        />
      </section>
    </div>
  );
};

export default TimelineExample;
