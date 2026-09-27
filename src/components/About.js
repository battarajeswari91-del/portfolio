function About() {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>

            <div className="about-container">
                <div className="about-text">
                    <h3>Who I Am</h3>

                    <p>
                        I am a Computer Science Engineering student who enjoys learning
                        technology by building practical projects. I have a foundation
                        in programming, web development, databases, and problem solving.
                        I believe in learning through practice and continuously improving
                        my technical skills.
                    </p>

                    <p>
                        Through my academic projects and self-learning, I have gained
                        experience in creating user-friendly applications and solving
                        real-world problems. I am always interested in exploring new
                        technologies and learning how they can be used to create useful
                        solutions.
                    </p>
                </div>


                {/* RIGHT SIDE */}
                <aside className="about-side">

                    <div className="about-profile">
                        <div className="about-icon">
                            👩‍💻
                        </div>

                        <h3>B.Tech CSE Student</h3>

                        <p>
                            Aspiring IT Professional interested in software development,
                            web technologies, and real-world problem solving.
                        </p>
                    </div>

                    <div className="about-interests">
                        <h3>What I'm Interested In</h3>

                        <ul>
                            <li>💻 Software & IT Roles</li>
                            <li>🌐 Web Development</li>
                            <li>⚛️ Modern Technologies</li>
                            <li>🧠 Problem Solving</li>
                            <li>📚 Continuous Learning</li>
                        </ul>
                    </div>

                </aside>

            </div>
        </section>
    );
}

export default About;