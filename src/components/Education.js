function Education() {
    const education = [
        {
            degree: "B.Tech - Computer Science and Engineering",
            college: "DRK Institute of Science and Technology",
            duration: "2024 - Currently pursuing final year",
            score: "Last Semester SGPA: 8.5"
        },

        {
            degree: "Diploma - Electronics and Communication Engineering",
            college: "Government Polytechnic for Women",
            duration: "2021 - 2024",
            score: "CGPA: 9.35"
        },

        {
            degree: "SSC(secondary School Certificate)",
            college: "ZPHS Dendukuru",
            score: "CGPA: 10"
        }
    ];

    return (
        <section
            id="education"
            className="section education-section"
        >

            <div className="section-title">

                <p>
                    MY ACADEMIC JOURNEY
                </p>

                <h2>
                    Education
                </h2>

            </div>

            <div className="education-container">

                {education.map((item) => (

                    <div
                        className="education-card"
                        key={item.degree}
                    >

                        <h3>
                            {item.degree}
                        </h3>

                        <h4>
                            {item.college}
                        </h4>

                        {item.duration && (
                            <p>
                                {item.duration}
                            </p>
                        )}

                        <span>
                            {item.score}
                        </span>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Education;