import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    // بيانات المشروع
    const projects = [
        {
            id: 1,
            name: "Book store APP",
            description: "هذا هو مشروع المتجر الإلكتروني الخاص بي. يتضمن واجهة مستخدم رائعة مع جميع الميزات الأساسية للتسوق عبر الإنترنت.",
            altText: "متجر إلكتروني",
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
                            {/* عرض المشروع */}
                            {projects.map(project => (
                            <Link to="https://github.com/Abdalloafifi/Book-Store/tree/master">    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5" key={project.id}>
                            <div className="card-body p-0">
                                <div className="d-flex align-items-center">
                                    <div className="p-5">
                                        <h2 className="fw-bolder">{project.name}</h2>
                                        <p>{project.description}</p>
                                    </div>                                </div>
                            </div>
                        </div></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* قسم الدعوة للعمل */}
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="display-4 fw-bolder mb-4"> 
                        Most BackEnd projects are API based and not worth showing on their own.                            </h2>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Projects;
