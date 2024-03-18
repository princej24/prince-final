
import React, { useState } from 'react';

const Content = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('loading');
  };

  return (
    <main className="content">
      <h2>Welcome to the Virtual Library</h2>
      <p>Discover a world of knowledge with our curated collection of digital resources. Whether you're an avid reader or a lifelong learner, you'll find something to inspire and inform you.</p>
      <button onClick={handleClick}>Click Me</button>
      {message && <p>{message}</p>}
    </main>
  );
}

export default Content;
