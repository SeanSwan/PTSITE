import React from "react";
import Features from "./Features";

const FeaturesList = ({ props }) => {
  const featureProps = [
    
    
      {
        id: 1,
        title:"Personal Training",
        icon: "heartbeat",
        featHeadTert: "Flexibility is very important in 2020",
        featText:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugiat quod saepe aperiam eaque non quam, magnam nesciunt excepturi nulla odit explicabo amet, itaque animi laudantium minima, in recusandae dolore!"
      },
      {
        id: 2,
        title: "Swizzle TV",
        icon: "desktop",
        featHeadTert: "Flexibility is very important in 2020",
        featText:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugiat quod saepe aperiam eaque non quam, magnam nesciunt excepturi nulla odit explicabo amet, itaque animi laudantium minima, in recusandae dolore!" 
      },
      {
        id: 3,
        title: "Tech News",
        icon: "microchip",
        featHeadTert: "Flexibility is very important in 2020",
        featText:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugiat quod saepe aperiam eaque non quam, magnam nesciunt excepturi nulla odit explicabo amet, itaque animi laudantium minima, in recusandae dolore!" 
      },
      {
        id: 4,
        title: "Star Citizen",
        icon: "fighter-jet",
        featHeadTert: "Flexibility is very important in 2020",
        featText:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugiat quod saepe aperiam eaque non quam, magnam nesciunt excepturi nulla odit explicabo amet, itaque animi laudantium minima, in recusandae dolore!" 
      },
    
  ];
  const renderedFeatureList = featureProps.map(featurePropsClone => {
    return (
      <Features
        key={featurePropsClone.id}
        title={featurePropsClone.title}
        icon={featurePropsClone.icon}
        featHeadTert={featurePropsClone.featHeadTert}
        featText={featurePropsClone.featText}
        
        
      />
    );
  });
  return <div className="">{renderedFeatureList}</div>;
};

export default FeaturesList;