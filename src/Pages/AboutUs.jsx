import React from "react";
//components
import AboutSecton from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";

//motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSecton />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
