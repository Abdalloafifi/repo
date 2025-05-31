import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
      {
        id: 1,
        name: " Chat-App",
        description:
          "A real-time messaging platform built on the MERN stack with Socket.io, offering multi-room chat, direct messaging, and presence indicators. Implements secure JWT-based authentication, file uploads via Cloudinary, and Redux-powered state management for a seamless, responsive user experience.",
        link: "https://github.com/Abdalloafifi/chat-app/tree/master",
      },
      {
        id: 2,
        name: "PlogApp",
        description:
          "A full-featured blogging system featuring nested comment threads, role-based permissions, and an intuitive admin dashboard. Powered by a Node.js/Express/MongoDB API and a React/Redux frontend, with JWT security, data validation middleware, and rich text/image support for dynamic content creation.",
        link: "https://github.com/Abdalloafifi/plogApp",
      },
      {
        id: 3,
        name: "A platform for requesting medical services",
        description:
          "A system responsible for creating medical services, dealing with electronic and manual payments, complete encryption of your data, dealing with the latest types of token encryption, dealing with verification of the phone number and e-mail, dealing with written transactions between patients and doctors in the scope of medical support and medical consultation, and complete control of the system through the admin in Aleppo data, approval and clarification to users and more things.",
        link: "https://github.com/Abdalloafifi/24h",
      },
      {
        id: 4,
        name: "Online Bookstore (In Development)",
        description:
          "A fully integrated e-commerce platform with role-based authentication (admin/user), shopping cart, and electronic payment system. Built with React.js, React Router, and state management via Context API/Redux.",
        link: "https://github.com/Abdalloafifi/Book-Store/tree/master",
      },
      {
        id: 5,
        name: "E-commerxe",
        description:
          "A scalable e-commerce backend built with Node.js, Express, and MongoDB, providing product CRUD operations, user authentication, shopping cart workflows, and order processing. Designed with modular routing and middleware for input validation and error handling.",
        link: "https://github.com/Abdalloafifi/E-commerxe"
      },      {
        id: 6,
        name: "E-commerce-next15",
        description:
          `Full-featured online store with admin panel
          A complete e-commerce platform that handles payment methods, displaying and adding products, built on next.js and express.js`,
        link: "https://github.com/Abdalloafifi/E-commerce-next15"
      },
      {
        id: 7,
        name: "File-Manager-System",
        description:
          "A secure file management API enabling users to upload, rename, delete, and organize files within a MongoDB-backed hierarchy. Implemented with Express middleware for authentication and validation, delivering a robust foundation for any cloud storage solution.",
        link: "https://github.com/Abdalloafifi/File-Manager-System"
      }, {
        id: 8,
        name: "Rating-Reviews",
        description:
          "A dedicated reviews microservice developed with Express and Mongoose, offering endpoints for submitting, editing, and deleting user ratings and reviews. Automatically calculates and exposes aggregate scores, with built-in input validation and pagination support for high-volume data.",
        link: "https://github.com/Abdalloafifi/Rating-Reviews"
      },
      {
        id: 9,
        name: "To-Do-API",
        description:
          "A lightweight RESTful API for managing personal to-do lists, built on Express.js and MongoDB. Provides full CRUD functionality, request validation middleware, and clear endpoint documentation—ideal for integration into any task-management application.",
        link: "https://github.com/Abdalloafifi/To-Do-API"
      }
    ];
    
    return (
        <main>
            <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0">
                            <span className="text-gradient d-inline">projects</span>
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