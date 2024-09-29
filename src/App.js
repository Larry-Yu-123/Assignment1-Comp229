/**
 * File Name : App.js
 * Student Name: Larry Yu
 * Student Id: 301354583
 * Date : Sept 29, 2024
 */

import React, { useState } from "react";
import './App.css';  
import profileimage from './image/profileimage.jpg';

//Home
const Home = () => <div><h1>Welcome to the Website</h1><p>This is my first assignment!</p></div>;
//About Me
const About = () => <div><h1>About Me</h1><p>Hi! I'm Larry Yu, a student in Comp 229. My hobbys are playing football with my friend!</p>
<img src = {profileimage} alt = "Profile" style = {{width : '150px', borderRadius :'50%'}}/>
<a href = "/resume.pdf" target = "_blank" rel = "noopener noreferren">
Download My resume</a>
</div>;
//Project
const Projects = () => (
  <div>
    <h1>Projects</h1>
    <ul>
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>
    </ul>
  </div>
);
//Services
const Services = () => (
  <div>
    <h1>Services</h1>
    <ul>
      <li>Web Development</li>
      <li>Java</li>
      <li>Data Base</li>
    </ul>
  </div>
);
//Contact
const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <form>
      <label>First Name:</label>
      <input type="text" name="firstName" />
      <label>Last Name:</label>
      <input type="text" name="lastName" />
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <textarea name="message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
);
//Main
function App() {
  const [visiblePage, setVisiblePage] = useState("home");

  return (
    <div>
      <nav>
        <span className="logo-left">L</span>
        <button onClick={() => setVisiblePage("home")}>Home</button>
        <button onClick={() => setVisiblePage("about")}>About Me</button>
        <button onClick={() => setVisiblePage("projects")}>Projects</button>
        <button onClick={() => setVisiblePage("services")}>Services</button>
        <button onClick={() => setVisiblePage("contact")}>Contact Me</button>
        <span className="logo-right">Y</span>
      </nav>

      <div>
        {visiblePage === "home" && <Home />}
        {visiblePage === "about" && <About />}
        {visiblePage === "projects" && <Projects />}
        {visiblePage === "services" && <Services />}
        {visiblePage === "contact" && <Contact />}
      </div>
    </div>
  )
}

export default App;
