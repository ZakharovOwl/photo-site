import React from "react";
//images
import home1 from "../img/home1.png";
//styles
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSecton = () => {
/*   const container = {
    hidden: { x: 100 },
    show: { x: 0,  transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.25 }},
  }; */

  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for ane some text some textsome textsome textsome textsome
          textsome textsome textsome text
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="photography" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled components

export default AboutSecton;
