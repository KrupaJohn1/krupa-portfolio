export default function Portfolio() {
  const skills = {
    Languages: ["Java", "SQL", "Shell Scripting"],
    "DevOps & Tools": ["Git", "GitHub", "Docker", "CI/CD Basics"],
    "Core Subjects": ["Computer Networks", "DBMS"],
    Platforms: ["HackerRank", "LeetCode", "CodeChef", "GeeksforGeeks"],
  };

  const projects = [
    {
      title: "Smart Transportation Based Car Pooling System",
      description:
        "Developed a ride-sharing system that enables users to share rides efficiently while reducing traffic congestion and pollution.",
      tech: ["Java", "GitHub", "Database Concepts"],
    },
    {
      title: "Alzheimer’s Disease Detection using Machine Learning",
      description:
        "Built a machine learning framework using MRI features to identify early signs of Alzheimer’s disease.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full bg-slate-950/90 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">
            DASARI KRUPA
          </h1>

          <div className="flex gap-6 text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-widest mb-4">
              Welcome To My Portfolio
            </p>

            <h1 className="text-6xl font-black leading-tight mb-6">
              Hi, I'm <span className="text-cyan-400">KrupaJohn</span>
            </h1>

            <h2 className="text-3xl text-gray-300 font-semibold mb-8">
              Java Developer • DevOps Enthusiast
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Passionate about building modern applications, exploring DevOps technologies, and creating impactful software solutions with creativity and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
              >
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/in/krupa-john123/"
                target="_blank"
                rel="noreferrer"
                className="border border-cyan-400 text-cyan-300 px-8 py-4 rounded-2xl"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl shadow-2xl max-w-xl w-full">
              <h3 className="text-4xl font-bold text-cyan-400 text-center mb-10">
                Academic Highlights
              </h3>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-4xl font-bold text-cyan-400">7.89</h3>
                  <p className="text-gray-400 mt-2">CGPA</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-4xl font-bold text-cyan-400">91.2%</h3>
                  <p className="text-gray-400 mt-2">Intermediate</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
                  <p className="text-gray-400 mt-2">SSC</p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate about software development, DevOps technologies,
                  and continuous learning to build impactful and efficient systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            About Me
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <p className="text-xl text-gray-300 leading-relaxed">
              I am a passionate and self-motivated Information Technology student with strong foundations in Java, SQL, Computer Networks, and DevOps concepts. I enjoy learning new technologies and continuously improving my technical and problem-solving skills.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mt-8">
              My interest lies in software development, automation, cloud technologies, and building efficient systems that solve real-world problems. I am highly interested in understanding how modern applications are developed, deployed, and managed using DevOps practices.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mt-8">
              Along with academics, I actively work on projects, coding platforms, and technical learning to strengthen my practical knowledge. I am a quick learner, team player, and always ready to take on new challenges that help me grow professionally.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
                <p className="text-gray-400 mt-2">Major Projects</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
                <p className="text-gray-400 mt-2">Coding Platforms</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
                <p className="text-gray-400 mt-2">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-cyan-400/10 text-cyan-300 px-5 py-3 rounded-2xl"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-10"
              >
                <h3 className="text-3xl font-bold text-cyan-400 mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 text-gray-200 px-5 py-3 rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profiles" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Coding Profiles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://github.com/Dasarikrupa"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">GitHub</h3>
              <p className="text-gray-400">Explore my repositories and projects</p>
            </a>

            <a
              href="https://www.linkedin.com/in/krupa-john123/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">LinkedIn</h3>
              <p className="text-gray-400">Connect with me professionally</p>
            </a>

            <a
              href="https://www.hackerrank.com/profile/22951a1236"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">HackerRank</h3>
              <p className="text-gray-400">Problem solving and coding practice</p>
            </a>

            <a
              href="https://leetcode.com/u/DASARIKRUPA/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">LeetCode</h3>
              <p className="text-gray-400">DSA and coding challenge solutions</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Contact Me
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Open to internships and fresher opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl mb-4">📧</div>
              <p className="text-gray-300">krupadasari2022@gmail.com</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl mb-4">📱</div>
              <p className="text-gray-300">+91 8096353475</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-300">Hyderabad</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/Dasarikrupa"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/krupa-john123/"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 text-cyan-300 px-8 py-4 rounded-2xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
