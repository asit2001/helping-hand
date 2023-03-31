import React, { useState } from 'react';
import './AccordionOwn.css';

const AccordionOwn = ({ title, style ,children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion-container" style={{...style, marginTop: "20px"}}>
      <div style={{padding: "10px", fontSize: "20px"}}  className={`accordion-title ${isExpanded ? 'active' : ''}`} onClick={toggleAccordion}>
        <p>{title}</p>
      </div>
      <div className={`accordion-content ${isExpanded ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default AccordionOwn;
