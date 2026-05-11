export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
            Krupa John
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-14 items-center pt-24">
          <div>
            <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-5">
              Software Developer & AI Enthusiast
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Building
              <span className="text-cyan-400"> Modern </span>
              Intelligent Digital Experiences
            </h1>

            <p className="text-gray-400 text-lg leading-8 mb-10 max-w-xl">
              Passionate developer focused on AI-powered applications,
              professional web experiences, and real-world problem solving.
              Skilled in frontend development, backend integration, databases,
              and deployment technologies.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://github.com/KrupaJohn1"
                target="_blank"
                className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/20"
              >
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/krupa-john123/"
                target="_blank"
                className="px-7 py-4 rounded-2xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[35px] shadow-2xl w-full max-w-md hover:scale-105 transition duration-500">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold">Krupa John</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Full Stack Developer
                  </p>
                </div>

                <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold text-xl">
                  KJ
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-black/40 p-5 rounded-2xl border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Specialization</p>
                  <h3 className="text-lg font-semibold">
                    AI Applications & Web Development
                  </h3>
                </div>

                <div className="bg-black/40 p-5 rounded-2xl border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Tech Stack</p>
                  <h3 className="text-lg font-semibold">
                    HTML • CSS • JavaScript • Python • MySQL
                  </h3>
                </div>

                <div className="bg-black/40 p-5 rounded-2xl border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Goal</p>
                  <h3 className="text-lg font-semibold">
                    Creating impactful and scalable digital products
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-bold">
              Professional Profile
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Who I Am
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                I am a passionate and dedicated developer with strong interest
                in Artificial Intelligence, modern web development, and
                real-world software solutions. I enjoy building visually
                attractive and user-friendly applications with scalable backend
                systems.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Career Objective
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                Seeking opportunities to contribute technical skills, creativity,
                and problem-solving abilities in a professional environment while
                continuously learning advanced technologies and building
                innovative projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  NeuroVision AI
                </h3>

                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                  AI Project
                </span>
              </div>

              <p className="text-gray-400 leading-8 mb-8">
                Professional AI-powered brain MRI analysis platform with modern
                authentication system, image uploads, backend integration, and
                interactive dashboard experience.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/KrupaJohn1/neurovision-ai" 
                  target="_blank"
                  className="px-5 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 backdrop-blur-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  Smart Transportation Car Pooling System
                </h3>

                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                  Web App
                </span>
              </div>

              <p className="text-gray-400 leading-8 mb-8">
                Smart transportation-based car pooling system designed to improve
                ride sharing, reduce travel costs, and provide efficient
                transportation management.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/KrupaJohn1/Smart-Transportation-Based-Car-Pooling-System"
                  target="_blank"
                  className="px-5 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
              Expertise
            </p>

            <h2 className="text-5xl font-bold">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'Python',
              'MySQL',
              'Flask',
              'GitHub',
              'Responsive Design',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-cyan-400 hover:text-black transition duration-300 font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 bg-black/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-12">
            Open to internships, collaborations, and professional opportunities.
            Feel free to connect through LinkedIn, GitHub, or email.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:krupadasari2022@gmail.com"
              className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/krupa-john123/"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/KrupaJohn1"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Krupa John • Designed with professionalism and modern UI.

        <div className="flex justify-center gap-6 mt-5 text-sm">
          <a
            href="https://github.com/KrupaJohn1"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/krupa-john123/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:krupadasari2022@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
