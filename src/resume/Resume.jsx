const Resume = () => {
  const handleDownload = () => {
    const resumeContent = `
Abdullah Mohamed Abdullah Afifi
Full-Stack Developer (MERN Stack)
abdo.afifi20007@gmail.com | +20 1211810733
Tanta, Gharbia, Egypt | Portfolio: https://portfolio-ee95e.web.app/________________________________________
Professional Summary
I am a professional full-stack developer with extensive hands-on experience in independently building complete projects that cover all practical aspects required by companies and clients. Proficient in both frontend and backend development, I seek to join a dynamic team to deliver innovative solutions and exceptional user experiences. I am continuously learning new technologies through personal and experimental projects.________________________________________
Technical Skills
Programming Languages: JavaScript, Python, HTML, CSS
Frameworks & Libraries:
• React.js (including Hooks & Redux), AngularJS
• Express.js, Node.js
• Bootstrap, Tailwind CSS
• Django (utilized in personal training projects)
Databases: MongoDB, SQL
Tools & Services: Git, Postman, VS Code, Firebase, Cloudinary, Restful API
Concepts: RESTful APIs, Responsive Design, and application security measures (CSRF, Cookies, JWT, SQL Injection, CORS). I have also explored additional security and organizational techniques as part of my continuous development.
Education
Higher Institute for Computers and Information Technology – Major in Management Information Technology, 3rd Year
Projects
1. Chat-App
Description: A comprehensive real-time chat platform enabling users to exchange messages with multimedia support (images, files, videos). Features include friendship management (sending/receiving requests), individual & group chats with online status, profile updates with privacy settings, secure login using JWT, protection against CSRF and SQL Injection, and real-time communication via Socket.io.
Technologies: MERN Stack, Bootstrap, JWT, Cookies, CSRF, SQL Injection prevention, CORS, Socket.io.
https://github.com/Abdalloafifi/chat-app/tree/master
2. Plog-App
Description: A social media platform allowing content publishing and interaction through a nested comments system (enabling replies on previous comments). Users can create, edit, or delete posts; engage via likes; and recover passwords through an integrated email-based system. The design is responsive for optimal performance across devices.
Technologies: MERN Stack, RESTful APIs, Firebase, Git, plus additional tools for performance and security enhancements.
https://github.com/Abdalloafifi/plogApp
3. Book-Store (In Development)
Description: A fully integrated e-commerce platform for managing a bookstore. It displays a detailed list of books (title, author, price, image) with features for adding, updating, or deleting books based on admin privileges. Includes secure user authentication (role-based for regular users vs. admin), an effective shopping cart, a completed electronic payment system, and an upcoming real-time notification system.
Technologies: Frontend built with React.js and React Router, state management through Context API/Redux, Axios for backend communication, and UI design via Bootstrap or Material-UI.
https://github.com/Abdalloafifi/Book-Store/tree/master
3. A platform for requesting medical services
 A system responsible for creating medical services, dealing with electronic and manual payments, complete encryption of your data, dealing with the latest types of token encryption, dealing with verification of the phone number and e-mail, dealing with written transactions between patients and doctors in the scope of medical support and medical consultation, and complete control of the system through the admin in Aleppo data, approval and clarification to users and more things
https://github.com/Abdalloafifi/24h/tree/main/api________________________________________
Languages
• Arabic: Native
• English: Intermediate (continuously improving)
• Russian: Very Good (relatively fluent with minor conversational limitations)
Additional Notes
• I host many projects on GitHub and provide tailored links upon request to showcase the most relevant work.
• The above projects were carefully selected to represent my skills and practical experience accurately.
• My portfolio offers a comprehensive view of my development work and creative initiatives.


    `;
    
    

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV-Abdullah_Afifi.pdf";
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
                  I am a Mid-Level Full Stack Developer with solid experience in the MERN Stack, capable of building scalable, secure,
                  and high-performance applications. I have delivered technically complex projects that demonstrate my ability to
                  implement real-world solutions with a professional user experience. My training includes a two-month AngularJS course,
                  and I continue to grow beyond the Junior level by adopting advanced development tools and best practices across the
                  stack,
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
                  <li>
                    <strong>A platform for requesting medical services</strong> Implemented WebSocket
                    communication for instant messaging.
                    <br />
                    <em>Tech:</em> axios, bcrypt, cors, dotenv, express, jsonwebtoken, mongoose, nodemailer, csurf, cloudinary, compression, helmet, hpp, joi, joi-password-complexity, multer, socket.io, twilio,
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
