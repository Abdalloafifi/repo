import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
      {
        id: 1,
        name: "Real-Time Chat Application",
        description:
          "A comprehensive real-time chat platform enabling users to exchange messages with multimedia support (images, files, videos). Features include friendship management (sending/receiving requests), individual & group chats with online status, profile updates with privacy settings, secure login using JWT, protection against CSRF and SQL Injection, and real-time communication via Socket.io.",
        tech: "MERN Stack, Socket.io, JWT, Cookies, CSRF Protection, CORS, SQL Injection Prevention",
        link: "https://github.com/Abdalloafifi/chat-app/tree/master",
      },
      {
        id: 2,
        name: "Blog Platform (Plog-App)",
        description:
          "A social media platform allowing content publishing and interaction through a nested comments system. Users can create, edit, or delete posts; engage via likes; and recover passwords through an integrated email-based system. Includes admin-controlled content filtering and real-time updates.",
        tech: "MERN Stack, RESTful APIs, Firebase, Nodemailer, CSRF Protection",
        link: "https://github.com/Abdalloafifi/plogApp",
      },
      {
        id: 3,
        name: "Online Bookstore (In Development)",
        description:
          "A fully integrated e-commerce platform with role-based authentication (admin/user), shopping cart, and electronic payment system. Built with React.js, React Router, and state management via Context API/Redux.",
        tech: "React, Bootstrap, Redux, Axios, RESTful APIs",
        link: "https://github.com/Abdalloafifi/Book-Store/tree/master",
      },
      {
        id: 4,
        name: "A platform for requesting medical services",
        description:
          "A system responsible for creating medical services, dealing with electronic and manual payments, complete encryption of your data, dealing with the latest types of token encryption, dealing with verification of the phone number and e-mail, dealing with written transactions between patients and doctors in the scope of medical support and medical consultation, and complete control of the system through the admin in Aleppo data, approval and clarification to users and more things.",
        tech: "axios, bcrypt, cors, dotenv, express, jsonwebtoken, mongoose, nodemailer, csurf, cloudinary, compression, helmet, hpp, joi, joi-password-complexity, multer, socket.io, twilio, ",
        link: "https://github.com/Abdalloafifi/24h/tree/main/api",
      },
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