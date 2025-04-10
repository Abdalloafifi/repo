const Resume = () => {
  const handleDownload = () => {
  const resumeContent = `
  Abdullah Mohammed Afifi
  Email: abdo.afifi20007@gmail.com
  Phone: +201211810733
  GitHub: github.com/Abdalloafifi
  LinkedIn: linkedin.com/in/abdallah-afifi-05bb40271
  Portfolio: https://portfolio-ee95e.web.app/
  
  Summary:
  Mid-Level Full Stack Developer with experience in building scalable, secure applications. Trained in AngularJS fundamentals and committed to adopting advanced development practices. Seeking opportunities to deliver professional solutions.
  
  Education:
  Bachelor’s in Computer Science (Expected Graduation: 2026)
  Institute of Computers and Information, Tanta | 2022–Present
  Key Courses: Web Development, Database Systems, Software Security.
  ITI Workshops: Advanced project management and AI tools (RoboDesk case study).
  
  Technical Skills:
  Frontend: React, HTML5, CSS3, Bootstrap, Socket.io, AngularJS
  Backend: Node.js, Express.js, MongoDB, RESTful APIs
  Security: JWT, CSRF Protection, Rate Limiting, Helmet
  Tools: Git, Postman
  Languages: Arabic (Native), Russian (B2), English (A2)
  
  Projects:
  
  Real-Time Chat App
  
  WebSocket communication with JWT authentication
  
  Multi-media support & scalable architecture
  Tech: MERN Stack, Socket.io, JWT
  
  Blog Platform (Plog-App)
  
  Nested comments, reactions, and real-time updates
  
  Dynamic content filtering system
  Tech: MERN Stack, RESTful APIs, Nodemailer
  
  Online Bookstore
  
  Payment integration & transactional emails
  Tech: React, Bootstrap, AngularJS
  
  Training:
  Appout Training Program | 2024 (2 Months)
  
  AngularJS fundamentals and API integration
  
  Team collaboration with version control
  `;
  
  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CV-Abdullah_Afifi.txt";
  a.click();
  URL.revokeObjectURL(url);
  };

  return (
    <div className="container px-5 my-5">
      {/* رأس الصفحة مع عنوان السيرة الذاتية وزر التحميل */}
      <header className="d-flex flex-column align-items-center mb-5">
        <h1 className="display-5 fw-bolder mb-3">
          <span className="text-gradient d-inline">Resume</span>
        </h1>
        <button className="btn btn-primary px-4 py-3" onClick={handleDownload}>
          <div className="d-inline-block bi bi-download me-2"></div>
          Download Resume
        </button>
      </header>

      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          {/* معلومات شخصية */}
          <section className="mb-5 text-center">
            <h2 className="fw-bolder">Abdullah Mohammed Afifi</h2>
            <p>البريد الإلكتروني: abdo.afifi20007@gmail.com</p>
            <p>رقم الهاتف: +201211810733</p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://github.com/Abdalloafifi"
                className="btn btn-outline-secondary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdallah-afifi-05bb40271"
                className="btn btn-outline-secondary"
              >
                LinkedIn
              </a>

            </div>
          </section>

          {/* ملخص */}
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Summary</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <p>
                  I aspire to work as a software developer at MERN and am
                  currently in my third year of a computer science degree. I am
                  passionate about building secure, user-centric web
                  applications through self-paced projects. I am looking for
                  opportunities to apply my academic knowledge in real-world
                  situations and gain further experience.
                </p>
              </div>
            </div>
          </section>

          {/* التعليم */}
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        2022 – Present
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">
                          Institute of Computers and Information, Tanta
                        </div>
                        <div className="small text-muted">Egypt</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">
                          Bachelor’s in Computer Science (Expected Graduation:
                          2026)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Key Courses: Web Development, Database Systems, Software
                      Security.
                      <br />
                      ITI Workshops: Explored AI tools and large-scale project
                      management (RoboDesk case study).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* المهارات التقنية */}
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Technical Skills</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col mb-4">
                    <strong>Frontend:</strong>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">AngularJS</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React</div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <strong>Backend:</strong>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Express</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MongoDB</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">RESTFULLAPI</div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <strong>Security:</strong>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JWT</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSRF</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100"> Rate</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Limiting</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Helmet</div>
                    </div>
                    
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">  SQL Injection</div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <strong>Tools:</strong> 
                    
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100"> Git</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100"> Postman</div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <strong>Languages:</strong> 
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100"> Arabic (Native)</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100"> Russian (B2)</div>
                    </div>
                    <div className="col mb-4">
                      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">English (A2)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* المشاريع */}
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Projects</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <ul>
                  <li>
                    <strong>Real-Time Chat App:</strong> Implemented WebSocket
                    communication for instant messaging.
                    <br />
                    <em>Tech:</em> MERN Stack, Socket.io, JWT.
                  </li>
                  <li className="mt-3">
                    <strong>Blog Platform (Plog-App):</strong> Developed
                    admin-controlled content management system.
                    <br />
                    <em>Tech:</em> MERN Stack, RESTful APIs.
                  </li>
                  <li className="mt-3">
                    <strong>Online Bookstore:</strong> Built a React-based
                    e-commerce interface.
                    <br />
                    <em>Tech:</em> React, Bootstrap.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* التدريب */}
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Training</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">
                        2024 (2 Months)
                      </div>
                      <div className="small fw-bolder">
                        Appout Training Program
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Focused on AngularJS fundamentals and API integration.
                      <br />
                      Gained insights into team collaboration and project
                      workflows.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* التجربة التطوعية */}
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">
              Voluntary Experience
            </h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">
                        2024 (During Internship)
                      </div>
                      <div className="small fw-bolder">
                        Team Member at First Programming Company
                      </div>
                      <div className="small text-muted">City, Country</div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div>
                      Worked as part of a team during the internship,
                      contributing to various projects and collaborating on
                      coding tasks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
