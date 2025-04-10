import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Real-Time Chat Application",
            description: "Built a real-time chat system using WebSocket with JWT authentication. Supports multiple media types: text, image, audio, video, and file uploads (simultaneously). Scalable architecture with upcoming features like video/voice calling.",
            tech: "MERN Stack, Socket.io, JWT, WebSocket",
            link: "https://github.com/Abdalloafifi/chat-app"
        },
        {
            id: 2,
            name: "Blog Platform (Plog-App)",
            description: "Admin-controlled CMS with nested commenting system, post reactions, and real-time updates. Inspired by social platforms with dynamic post-type filtering and user-generated content types.",
            tech: "MERN Stack, RESTful APIs, Nodemailer",
            link: "https://github.com/Abdalloafifi/plogApp"
        },
        {
            id: 3,
            name: "Online Bookstore",
            description: "Responsive e-commerce interface with dynamic filtering. Backend under development includes payment integration (Visa/PayPal) and transactional notifications using Nodemailer.",
            tech: "React, Bootstrap, AngularJS",
            link: "https://github.com/Abdalloafifi/Book-Store/tree/master"
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