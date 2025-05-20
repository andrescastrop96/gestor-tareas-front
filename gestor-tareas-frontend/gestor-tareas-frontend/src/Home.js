import React from 'react';
import '../styles/Home.css';
import AlertBar from '../components/AlertBar';
import Header from '../components/Header';
import TaskCards from '../components/TaskCards';
import bookshelfBg from '../assets/images/bookshelf.jpg';

function Home() {
  return (
    <div className="home">
      <AlertBar />
      <Header />
      <div className="main-content" style={{ backgroundImage: `url(${bookshelfBg})` }}></div>
      <TaskCards />
    </div>
  );
}

export default Home;
