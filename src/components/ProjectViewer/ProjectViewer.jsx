import "./ProjectViewer.css";

import { motion } from "framer-motion";

export default function ProjectViewer({ project, onClose }) {

  return (

    <motion.section

      className="viewer"

      initial={{ opacity: 0, y: 80 }}

      animate={{ opacity: 1, y: 0 }}

      exit={{ opacity: 0, y: 80 }}

      transition={{ duration: .45 }}

    >

      <div className="viewer-container">

        <button

          className="viewer-close"

          onClick={onClose}

        >

          ✕

        </button>

        <div className="viewer-grid">

          <div className="viewer-left">

            {

              project.embed ?

              <iframe

                src={project.embed}

                title={project.title}

                className="viewer-frame"

                allowFullScreen

              />

              :

              <img

                src={project.image}

                className="viewer-image"

                alt={project.title}

              />

            }

          </div>

          <div className="viewer-right">

            <span className="viewer-category">

              {project.category}

            </span>

            <h1>

              {project.title}

            </h1>

            <p>

              {project.description}

            </p>

            <div className="viewer-cards">

              <div>

                <h4>Year</h4>

                <p>{project.year}</p>

              </div>

              <div>

                <h4>Tools</h4>

                <p>{project.tools.join(" • ")}</p>

              </div>

            </div>

          </div>

        </div>

        <div className="viewer-gallery">

          <img src={project.image} />

          <img src={project.image} />

          <img src={project.image} />

        </div>

      </div>

    </motion.section>

  );

}