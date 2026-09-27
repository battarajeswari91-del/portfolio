import { projects } from "../data/projects";

function Projects() {
    return (
        <section id="projects" className="section">

            <div className="section-title">

                <p>
                    MY WORK
                </p>

                <h2>
                    Projects
                </h2>

            </div>

            <div className="projects-container">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={project.title}
                    >

                        <div className="project-number">
                            0{index + 1}
                        </div>

                        <h3>
                            {project.title}
                        </h3>

                        <p>
                            {project.description}
                        </p>

                        <div className="project-tech">
                            {project.technologies}
                        </div>

                        <div className="project-buttons">

                            {project.demo !== "#" && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-btn"
                                >
                                    LiveDemo
                                </a>
                            )}

                            {project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="github-btn"
                                >
                                    GitHub
                                </a>
                            )}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;