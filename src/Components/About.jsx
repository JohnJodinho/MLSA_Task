/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background_.jpg";

const imageAltText = "John Ibrahim - This is the background photo for my portfolio site";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
"I'm a Mechanical Engineering studentjm  at the University of Jos, blending Arduino prowess, Azure IoT Central skills, and Power Platform development. As a Microsoft Learn Student Ambassador, I bridge innovation and technology.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Microsoft Learn Student Ambassador",
  "Internet of Things and Embedded Systems",
  "Power Apps",
  "Robotics",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
"I'm fueled by a passion for innovative problem-solving, constantly seeking novel ways to make technology accessible and impactful. Through my skills in IoTs, Robotics and Power Platform, I strive to drive meaningful change.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
