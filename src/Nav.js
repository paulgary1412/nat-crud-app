import React, { useState } from 'react';
import { FaHome, FaPlusCircle, FaTable, FaChartLine } from 'react-icons/fa'; // Importing icons

const buttonStyles = {
  padding: '12px 20px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s, color 0.3s',
  margin: '10px 0',
  width: '100%',
  display: 'flex', // Use flex to align icon and text
  alignItems: 'center', // Center items vertically
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const iconStyles = {
  marginRight: '10px', // Space between icon and text
};

const navStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '250px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
  zIndex: '100',
};

const logoStyles = {
  width: '120px',
  height: 'auto',
  marginBottom: '20px',
  borderRadius: '10px',
};

const headerStyles = {
  marginBottom: '20px',
  color: '#00215E',
  fontSize: '24px',
  textAlign: 'center',
  fontWeight: 'bold',
};

const Nav = ({ setActiveTab }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeTab, setActiveTabState] = useState('home'); // Track active tab

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
    setActiveTabState(tab); // Update active tab state
  };

  return (
    <nav style={navStyles}>
      <img
        src="https://png.pngtree.com/template/20190422/ourmid/pngtree-cross-plus-medical-logo-icon-design-template-image_145195.jpg" 
        alt="Logo"
        style={logoStyles}
      />
      <h1 style={headerStyles}>
        HEALTHCARE
      </h1>
      {[
        { name: 'home', icon: <FaHome style={iconStyles} /> },
        { name: 'addRecord', icon: <FaPlusCircle style={iconStyles} /> },
        { name: 'viewRecords', icon: <FaTable style={iconStyles} /> },
        { name: 'viewAnalytics', icon: <FaChartLine style={iconStyles} /> },
      ].map((tab, index) => (
        <button
          key={index}
          style={{
            ...buttonStyles,
            backgroundColor: activeTab === tab.name ? '#004080' : '#00215E', // Highlight active tab
            color: '#fff',
            ...(hoveredButton === tab.name ? { backgroundColor: '#0066cc', color: '#e0e0e0' } : {}),
          }}
          onMouseEnter={() => setHoveredButton(tab.name)}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => handleButtonClick(tab.name)} // Call the handler
        >
          {tab.icon} {/* Display the icon */}
          {tab.name.charAt(0).toUpperCase() + tab.name.slice(1).replace(/([A-Z])/g, ' $1')}
        </button>
      ))}
    </nav>
  );
};

export default Nav;