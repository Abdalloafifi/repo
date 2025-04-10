import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Real-Time Chat Application",
            description: "Live messaging app with WebSocket communication and JWT authenticationIt is a chat site for quick credit. It is characterized by the ability to apply images, audio, video, or files. It is a meat project and is expandable. It has many features that have not been added to the interface, and thus work on making voice and image calls.",
            tech: "MERN Stack, Socket.io, JWT",
            link: "https://github.com/Abdalloafifi/chat-app" // موجود
        },
        {
            id: 2,
            name: "Blog Platform (Plog-App)",
            description: "Admin-controlled CMS with role-based access",
            tech: "MERN Stack, RESTful APIs",
            link: "https://github.com/Abdalloafifi/plogApp" // اتركه فارغًا
        },
        {
            id: 3,
            name: "Online Bookstore",
            description: "E-commerce interface with dynamic filtering; So far, it is just a front end, and work is being done on its back end, with the addition of payment, verification, and security features for payment.",
            tech: "React, Bootstrap",
            link: "https://github.com/Abdalloafifi/Book-Store/tree/master" // موجود
        }
    ];

    return (
        <main>
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0">
                            <span className="text-gradient d-inline">المشاريع</span>
                        </h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {projects.map(project => (
                                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" key={project.id}>
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="p-5">
                                                <h2 className="fw-bolder">{project.name}</h2>
                                                <p>{project.description}</p>
                                                <p className="text-muted">{project.tech}</p>
                                                <Link
                                                    to={project.link}
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                >
                                                    View on GitHub
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;