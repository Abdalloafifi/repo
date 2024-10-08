const Resume = () => {
    const handleDownload = () => {
        // تحديد محتوى السيرة الذاتية المراد تحميله
        const resumeContent = `
        اسمك الكامل:Abdullah Mohammed Abdullah Afifi
        البريد الإلكتروني:abdo.afifi20007@gmail.com
        رقم الهاتف: +201211810733
        
        ملخص:
        Aspiring web developer currently in the third year at the Computer Science Institute, seeking to gain practical experience and certifications in web development technologies.
        
        تجربة التدريب:
        2024 (2 Months) - Intern Web Developer
        About company was a DobotDesk project
        Tanta, Egypt
        خلال فترة التدريب، ساهمت في مشاريع تطوير الويب، مما عزز مهاراتي في HTML، CSS، وJavaScript.
        - Assisted in developing responsive web applications.
        - Collaborated with the development team to improve user interface and experience.
        
        التعليم:
        - Present - معهد حاسبات ومعلومات, Tanta, Egypt
        Bachelor's in Computer Science
        أنا حاليا في السنة الثالثة من دراستي، أركز على تطوير البرمجيات وتقنيات الويب.

        المهارات:
        HTML, CSS, JavaScript, AngularJS, React, Node.js, Express, MongoDB

        الشهادات:
        Currently seeking certifications in web development and related technologies.

        المشاريع:
        - Online Bookstore: Developed an online bookstore using React...
        - Blog App: Currently working on a personal blog...

        التجربة التطوعية:
        2024 (During Internship) - Team Member at First Programming Company
        Tanta, Egypt
        Worked as part of a team during the internship, contributing to various projects and collaborating on coding tasks.
        `;

        // إنشاء Blob من المحتوى
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        // إنشاء رابط لتحميل الملف
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Resume.txt';
        a.click();

        // تحرير الذاكرة
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container px-5 my-5">
            <header className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0">
                    <span className="text-gradient d-inline">Resume</span>
                </h1>
            </header>
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-11 col-xl-9 col-xxl-8">
                    {/* معلومات شخصية */}
                    <section className="mb-5 text-center">
                        <h2 className="fw-bolder">Abdullah Mohammed Abdullah Afifi</h2>
                        <p>البريد الإلكتروني: abdo.afifi20007@gmail.com</p>
                        <p>رقم الهاتف: +201211810733</p>
                        <a href="https://www.linkedin.com/in/abdallah-afifi-05bb40271" className="btn btn-primary">LinkedIn</a>
                    </section>

                    {/* ملخص */}
                    <section className="mb-5">
                        <h2 className="text-secondary fw-bolder mb-4">Summary</h2>
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <p>
                                    Aspiring web developer currently in the third year at the Computer Science Institute, seeking to gain practical experience and certifications in web development technologies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* تجربة التدريب */}
                    <section>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h2 className="text-primary fw-bolder mb-0">Internship Experience</h2>
                            <button className="btn btn-primary px-4 py-3" onClick={handleDownload}>
                                <div className="d-inline-block bi bi-download me-2"></div>
                                Download Resume
                            </button>
                        </div>
                        {/* تجربة التدريب 1 */}
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="text-primary fw-bolder mb-2">2024 (2 Months)</div>
                                            <div className="small fw-bolder">Intern Web Developer</div>
                                            <div className="small text-muted">About company was a DobotDesk project</div>
                                            <div className="small text-muted">Tanta, Egypt</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div>
                                            During the internship, I contributed to web development projects, enhancing my skills in HTML, CSS, and JavaScript.
                                            <ul>
                                                <li>Assisted in developing responsive web applications.</li>
                                                <li>Collaborated with the development team to improve user interface and experience.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* التعليم */}
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                        {/* التعليم 1 */}
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="text-secondary fw-bolder mb-2">2021 - Present</div>
                                            <div className="mb-2">
                                                <div className="small fw-bolder">معهد حاسبات ومعلومات</div>
                                                <div className="small text-muted">Tanta, Egypt</div>
                                            </div>
                                            <div className="fst-italic">
                                                <div className="small text-muted">Bachelor's in Computer Science</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div>
                                            I am currently in the third year of my studies, focusing on software development and web technologies.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* المهارات */}
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Professional Skills</h2>
                        {/* بطاقة المهارات */}
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                {/* قائمة المهارات */}
                                <div className="row row-cols-1 row-cols-md-3">
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
                                    <div className="col mb-4">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Express</div>
                                    </div>
                                    <div className="col mb-4">
                                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MongoDB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* الشهادات */}
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Certifications</h2>
                        <p>Currently seeking certifications in web development and related technologies.</p>
                    </section>

                    {/* المشاريع */}
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Projects</h2>
                        <ul>
                            <li>Online Bookstore: Developed an online bookstore using React...</li>
                            <li>Blog App: Currently working on a personal blog...</li>
                        </ul>
                    </section>

                    {/* التجربة التطوعية */}
                    <section>
                        <h2 className="text-secondary fw-bolder mb-4">Voluntary Experience</h2>
                        {/* التجربة التطوعية 1 */}
                        <div className="card shadow border-0 rounded-4 mb-5">
                            <div className="card-body p-5">
                                <div className="row align-items-center gx-5">
                                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div className="bg-light p-4 rounded-4">
                                            <div className="text-secondary fw-bolder mb-2">2024 (During Internship)</div>
                                            <div className="small fw-bolder">Team Member at First Programming Company</div>
                                            <div className="small text-muted">City, Country</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div>
                                            Worked as part of a team during the internship, contributing to various projects and collaborating on coding tasks.
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
