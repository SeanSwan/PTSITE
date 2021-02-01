import React from "react";
import Footer from "./Footer";

import FootVid1 from "../assets/pics/cubes.mp4";
import FootVid2 from "../assets/pics/cubes.mp4";
import footerLogo from "../assets/pics/swan-v-logo.png";
//Need to make footvid2 webm

const FooterList = ({ props }) => {
  const footerProps = [
    {
      id: 1,
      footerVideoMp4: FootVid1,
      footerVideoWebm: FootVid2,
      footerLogo: footerLogo,
      footerLink1: "Company",
      footerLink2: "Contact Us",
      footerLink3: "Carrers",
      footerLink4: "Privacy policy",
      footerLink5: "Swan Vitality PT is a lifestyle are you ready?",
      copyright1: " Built by ",
      copyright2: " Sean London Swan",
      copyright3: " for his Personal Training and Swizzle TV site ",
      copyright4: " Swan Vitality Personal Trainers ",
      copyright5:
        " Copyright \&copy;\ by Sean London Swan. You are not allowed to use this " +
        " webpage for both personal and commercial use unless authorized by author " +
        " Sean London Swan, NOT to claim as your own design. A credit to the " +
        " original author, Sean Swan, is of course highly appreciated! "
    }
  ];
  const renderedfooterList = footerProps.map(footerPropsClone => {
    return (
      <Footer
        key={footerPropsClone.id}
        footerLink1={footerPropsClone.footerLink1}
        footerLink2={footerPropsClone.foterLink2}
        footerLink3={footerPropsClone.footerLink3}
        footerLink4={footerPropsClone.footerLink4}
        footerLink5={footerPropsClone.footerLink5}
        footerLogo={footerPropsClone.footerLogo}
        footerVideoMp4={footerPropsClone.footerVideoMp4}
        footerVideoWebm={footerPropsClone.footerVideoWebm}
        copyright1={footerPropsClone.copyright1}
        copyright2={footerPropsClone.copyright2}
        copyright3={footerPropsClone.copyright3}
        copyright4={footerPropsClone.copyright4}
        copyright5={footerPropsClone.copyright5}
      />
    );
  });
  return <div className="">{renderedfooterList}</div>;
};

export default FooterList;
