import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';

const App = () => {
  const headerLinks = [
    { url: '#books', text: 'Books' },
    { url: '#articles', text: 'Articles' },
    { url: '#about', text: 'About' },
    { url: '#contact', text: 'Contact' }
  ];

  const additionalInfo = "Discover, Learn, Explore.";

  return (
    <div className="app-container">
      <Header title="Virtual Library" links={headerLinks} info={additionalInfo} />
      <main className="main-content">
        <Sidebar />
        <Content />
        <Container />
      </main>
      <Footer info="© 2024 Virtual Library. All rights reserved." />
    </div>
  );
}

export default App;
