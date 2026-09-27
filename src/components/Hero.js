function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">

                <p className="small-title">
                    Hello, I'm
                </p>

                <h1>
                    Rajeswari Batta
                </h1>

                <h2>
                    Aspiring IT professional | Computer Science Student
                </h2>

                <p className="hero-text">
                    I enjoy building practical solutions, exploring technology,
                    and turning ideas into useful applications.
                </p>

                <div className="hero-buttons">

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        View Resume
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="resume-btn"
                    >
                        Download Resume
                    </a>


                </div>

            </div>

            <div className="hero-card">

                <div className="profile-image">
                    <img src="/pic.png" alt="Rajeswari Batta" />
                </div>

                <h3>
                    Aspiring IT Professional
                </h3>

                <p>
                    Passionate about technology and continuous learning
                </p>

            </div>

        </section>
    );
}

export default Hero;