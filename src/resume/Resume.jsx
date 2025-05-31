const Resume = () => {
  return (
    <div className="container px-5 my-5">
      <header className="d-flex flex-column align-items-center mb-5">
        <h1 className="display-5 fw-bolder mb-3">
          <span className="text-gradient d-inline">Abdullah Afifi</span>
        </h1>
        <h2 className="text-secondary mb-4">
          Full-Stack Developer (MERN, MEAN, NEXT.JS)
        </h2>
        <a
          href="https://drive.google.com/file/d/1Oxb0KvC0HCwHkhg0ACZZDp02CnIjYUEC/view?usp=drive_link"
          target="_blank"
          className="btn btn-primary px-4 py-3"
        >
          <i className="bi bi-download me-2"></i>
          Resume
        </a>
      </header>

      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <section className="mb-5 text-center">
            <div
              className="d-flex justify-content-center gap-3 mb-3"
              style={{ flexWrap: "wrap" }}
            >
              <a
                href="mailto:abdo.afifi20007@gmail.com"
                className="btn btn-outline-primary"
              >
                abdo.afifi20007@gmail.com
              </a>
              <a href="tel:+201211810733" className="btn btn-outline-primary">
                +20 121 181 0733
              </a>
            </div>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://github.com/Abdalloafifi"
                className="btn btn-dark"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdallah-afifi-05bb40271"
                className="btn btn-primary linkedin-btn"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">
              Professional Summary
            </h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <p className="lead">
                  Professional full-stack developer with extensive experience in
                  independently building complete projects. Proficient in React,
                  AngularJS, NEXTJS,Express.JS, Node.js, and MongoDB with strong
                  focus on security and best practices. Continuously learning
                  new technologies through personal and experimental projects.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Technical Skills</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="skill-category">
                      <h5 className="text-primary">Frontend</h5>
                      <ul className="list-unstyled">
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React.js (Hooks & Redux)</li>
                        <li>AngularJS</li>
                        <li>NEXTJS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col">
                    <div className="skill-category">
                      <h5 className="text-primary">Backend</h5>
                      <ul className="list-unstyled">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>RESTful APIs</li>
                        <li>GraphQL</li>
                        <li>gRPC</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col">
                    <div className="skill-category">
                      <h5 className="text-primary">Security</h5>
                      <ul className="list-unstyled">
                        <li>JWT Authentication</li>
                        <li>CSRF Protection</li>
                        <li>CORS Configuration</li>
                        <li>SQL Injection Prevention</li>
                        <li>Helmet & Rate Limiting</li>
                        <li>mongoSanitize</li>
                        <li>hpp</li>
                        <li>xss</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Work Experience</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="mb-4">
                  <h5 className="text-primary">Backend Developer (Volunteer)</h5>
                  <div className="text-muted mb-2">Remote | February 2025 – Present</div>
                  <ul className="list-unstyled">
                    <li>• Developed and deployed a secure Node.js/Express.js API for cross-platform use.</li>
                    <li>• Integrated JWT authentication and secure headers, reducing vulnerability by 90%.</li>
                                        <li>• Improved server response time by 40% via query optimization.</li>
                    <li>• Maintained 99.95% uptime using MongoDB Atlas and load balancing.</li>
                    <li>• Applied rate-limiting and CSRF/XSS protection, boosting security score by 85%.</li>
                    <li>• Integrated Socket.io for real-time communication with under 200ms latency for 100+ users.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-primary">Intern, Appout ITS</h5>
                  <div className="text-muted mb-2">Tanta, Egypt | July 2024 – October 2024</div>

                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder">
                        2022 – 2026
                      </div>
                      <div className="mb-2">
                        <div className="small fw-bolder">
                          Higher Institute for Computers and Information
                        </div>
                        <div className="small text-muted">Tanta, Egypt</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="ps-md-4">
                      <h5 className="text-primary">
                        BSc in Management Information Technology
                      </h5>
                      <ul className="list-unstyled">
                        <li>
                          Key Courses: Web Development, Database Systems,
                          Software Security
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary fw-bolder mb-4">Languages</h2>
            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-4">
                    <div className="language-item text-center p-3">
                      <h5 className="text-primary">Arabic</h5>
                      <div className="text-muted">Native</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="language-item text-center p-3">
                      <h5 className="text-primary">English</h5>
                      <div className="text-muted">Elementary</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="language-item text-center p-3">
                      <h5 className="text-primary">Russian</h5>
                      <div className="text-muted">Intermediate</div>
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
