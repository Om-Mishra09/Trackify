import { motion } from "framer-motion";
import "../css/features.css";

const features = [
  {
    title: "Auto Average Calculation",
    description: "Track your module and year average effortlessly, always knowing your academic standing.",
  },
  {
    title: "Tailored to You",
    description: "Customize your targets and view progress in your personal dashboard.",
  },
  {
    title: "Data Export",
    description: "Export all your academic data as JSON or printable reports with a click.",
  },

];

const Features = () => {
  return (
    <section className="features-section" id="features-section">
      <div className="animated-bg"></div>

      <motion.h2
        className="features-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>

      <div className="features-list">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Features;


