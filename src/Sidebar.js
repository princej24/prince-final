// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul className="sidebar-list">
        <li><button onClick={() => console.log('Fiction button clicked')}>Fiction</button></li>
        <li><button onClick={() => console.log('Non-Fiction button clicked')}>Non-Fiction</button></li>
        <li><button onClick={() => console.log('Science button clicked')}>Science</button></li>
        <li><button onClick={() => console.log('History button clicked')}>History</button></li>
        <li><button onClick={() => console.log('Art button clicked')}>Art</button></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
