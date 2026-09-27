const certifications = [
    {
        id: 1,
        title: "Data Analyst",
        issuer: "Deloitte",
        description: "Completed a Data Analyst job simulation certification program."
    },
    {
        id: 2,
        title: "Frontend Developer",
        issuer: "OneRoadmap",
        description: "Successfully completed a Frontend Developer course."
    },
    {
        id: 3,
        title: "Industrial Training – PCB Assembling",
        issuer: "SPR Capital Solutions",
        description: "Completed industrial training in PCB assembling."
    },
    {
        id: 4,
        title: "Practical Robotics",
        issuer: "Synchrony",
        description: "Completed a practical robotics training course."
    },
    {
        id: 5,
        title: "Web Development",
        issuer: "Thiranex",
        description: "Completed a web development course."
    }
];

function Certifications() {
    return (
        <section className="certifications" id="certifications">

            <h2>Certifications</h2>

            <div className="certificates-container">

                {certifications.map((certificate) => (
                    <div className="certificate-card" key={certificate.id}>

                        <h3>{certificate.title}</h3>

                        <h4>{certificate.issuer}</h4>

                        <p>{certificate.description}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Certifications;
