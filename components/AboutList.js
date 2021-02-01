import React from "react";
import About from "./About";

const AboutList = ({ props }) => {
  const aboutProps = [
    
      {
        headingSecond: "Swan Vitality PT is a lifestyle are you ready?",
        headingTert1: "One Stop Shop for Results lets go!",
        aboutGraph1:
          "Are you hungry for a health and fitness change? Do you have time in your life to really commit to be at your dream level of fitness and health. Well this is a one stop shop for results if you do the work we tell you put in, you will recieve exactly what you want out of it. it's now or let those years keep on flying by like water. Sign up to take advantage of now!",
        headingTert2: "A new lifestyle and wonderful learning experiance!",
        aboutGraph2:
          "Learn to be able to make the best choices for you your family and friends health. learn about Chemicals and preservitives as well as GMO's and fake food that are making you sick and you probably dont even know it. We expose the myth's that keep everyone going in circles in there workout's as well as eating habits. The best part is you will look and feel better as well as have more energy."
      }
    
  ];
  const renderedAboutList = aboutProps.map(aboutPropsClone => {
    return (
      <About
        key={aboutPropsClone}
        headingSecond={aboutPropsClone.headingSecond}
        headingTert1={aboutPropsClone.headingTert1}
        aboutGraph1={aboutPropsClone.aboutGraph1}
        headingTert2={aboutPropsClone.headingTert2}
        aboutGraph2={aboutPropsClone.aboutGraph2}
      />
      
    );
  });
  return <div className="">{renderedAboutList}</div>;
};

export default AboutList;
