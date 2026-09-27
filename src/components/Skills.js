import { skills } from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="section skills-section">

            <div className="section-title">

                <p>
                    WHAT I KNOW
                </p>

                <h2>
                    My Skills
                </h2>

            </div>

            <div className="skills-container">

                {skills.map((skillGroup, index) => (

                    <div
                        className="skill-card"
                        key={skillGroup.category}
                    >

                        <h3>
                            {skillGroup.category}
                        </h3>

                        <div className="skill-list">

                            {skillGroup.skills.map((skill) => (

                                <span key={skill}>
                                    {skill}
                                </span>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;