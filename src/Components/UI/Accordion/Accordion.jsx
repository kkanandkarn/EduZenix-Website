import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item" style={{ marginBottom: 10 }}>
      <button
        onClick={onClick}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "10px 20px",
          fontSize: 16,
          cursor: "pointer",
          backgroundColor: "#eee",
          border: "none",
          outline: "none",
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="accordion-content"
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderTop: "none",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

// Usage Example
const App = () => {
  const accordionData = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "Why use React?",
      content:
        "React allows for fast, scalable, and simple development of complex user interfaces.",
    },
    {
      title: "How do you use React?",
      content:
        "You use React by creating components. Components can be functional or class-based.",
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>React Accordion Example</h2>
      <Accordion items={accordionData} />
    </div>
  );
};

export default App;
