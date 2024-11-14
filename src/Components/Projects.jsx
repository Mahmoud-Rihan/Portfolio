import React from "react";

const Projects = () => (
  <div id="projects" className="container mt-5">
    <h2>Projects</h2>
    <div className="row">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Project Title</h5>
            <p className="card-text">Description of the project.</p>
            <a href="project-url" className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
