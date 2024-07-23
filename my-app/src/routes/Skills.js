import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Skills = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="SKILLS" text="My Technical Strengths:"
      strengths={[
        "HTML",
        "CSS",
        "JavaScript",
        "C++",
        "SQL"
      ]}
      />
      <Footer/>
    </div>
  );
};

export default Skills