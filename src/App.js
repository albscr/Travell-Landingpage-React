import './App.css';
import React from 'react';
import Hero from './components/hero';
import Slider from './components/Slider';
import travel03 from "./assets/travel03.jpg"
import travel01 from "./assets/travel01.jpg"
import Navbar from './components/Navbar';



function App() {
  const navbarLinks = [
    {url: "#", title:"Home"},
    {url: "#", title:"Trips"},
    {url: "#", title:"Rewards"},
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero />
      <Slider 
      imageSrc={travel03} 
      title={"Be an explorer!"} 
      subtitle={"Our platform offer a wide variety of unique travel locations!"}
      />
       <Slider 
      imageSrc={travel01} 
      title={"Memories for a lifetime!"} 
      subtitle={"Your dream vacation is only a few clicks away."}
      flipped={true}
      />
    </div>
  );
}

export default App;
