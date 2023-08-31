"use client"

import React, { useState } from "react";
import './dropdownmenuapp.css'

export default function App() {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleDropdownToggle}>
        Open Menu
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu" aria-label="Dynamic Actions">
          {items.map((item) => (
            <a
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
