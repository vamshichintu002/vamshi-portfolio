import Image from "next/image";

type NavItem = { label: string; href: string };

type Project = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

type Skill = { name: string; level: number };

const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = {
  x: "https://x.com/vamshichintu02",
  github: "https://github.com/vamshichintu002",
  instagram: "https://www.instagram.com/vamshichintu02/",
  linkedin: "https://www.linkedin.com/in/sudulavamshi/",
};

const skills: Skill[] = [
  { name: "Generative AI", level: 99 },
  { name: "Machine Learning", level: 90 },
  { name: "Python", level: 90 },
  { name: "Web Services", level: 90 },
  { name: "API Handling", level: 85 },
  { name: "SAAS", level: 80 },
];

const projects: Project[] = [
  {
    title: "Investo",
    subtitle: "Your Personal AI Investment Advisor",
    image: "https://vamshi-resume.netlify.app/assets/img/investoai.png",
    description:
      "Personalized investment recommendations powered by AI algorithms to help build and manage a portfolio with confidence.",
    tags: ["AI", "Finance", "Product"],
  },
  {
    title: "Imagen",
    subtitle: "Text to Image Generator",
    image: "https://vamshi-resume.netlify.app/assets/img/imagenbyvamshi.jpeg",
    description:
      "Text-to-image generation with community gallery exploration, downloads, and responsive UI (with Google Sign-In).",
    tags: ["GenAI", "Images", "Auth"],
  },
  {
    title: "Course Landing Page",
    subtitle: "AI-Driven Curriculum",
    image: "https://vamshi-resume.netlify.app/assets/img/course.png",
    description:
      "Responsive landing page for an AI-driven full-stack curriculum; highlights tech stack and learning outcomes.",
    tags: ["Web", "Landing", "Responsive"],
  },
  {
    title: "AI Chatbot Playground",
    subtitle: "Multi-model AI Playground",
    image: "https://vamshi-resume.netlify.app/assets/img/vamshi-playground.png",
    description:
      "Playground supporting multiple AI models with streaming responses; integrates Hugging Face, Groq, and Replicate.",
    tags: ["LLMs", "APIs", "Streaming"],
  },
  {
    title: "GitHub README Generator",
    subtitle: "AI-powered README editor",
    image: "https://vamshi-resume.netlify.app/assets/img/github-readme-preview.png",
    description:
      "A user-friendly AI-powered editor to generate clean, structured GitHub READMEs quickly.",
    tags: ["GenAI", "DevTools"],
  },
  {
    title: "How2Draw",
    subtitle: "AI-Assisted Drawing Guide",
    image: "https://vamshi-resume.netlify.app/assets/img/how2draw.png",
    description:
      "AI-powered drawing instruction generation with real-time image generation using Hugging Face APIs.",
    tags: ["GenAI", "UX", "HuggingFace"],
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {kicker ? (
        <p className="text-sm font-medium tracking-wider text-blue-400/90">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/50 dark:text-zinc-200">
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
    >
      {children}
    </a>
  );
}

function GhostButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-zinc-200/70 bg-white/40 px-5 py-2.5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/40 dark:border-zinc-700/70 dark:bg-zinc-900/30 dark:text-zinc-100 dark:hover:bg-zinc-900/50"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-black/30">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="leading-tight">
                <p className="text-sm font-semibold">Vamshi Sudula</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  AI & ML Engineer
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-900/50 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-200/70 bg-white/40 px-3 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white/60 dark:border-zinc-700/70 dark:bg-zinc-900/30 dark:text-zinc-100"
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="hidden rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-500/20 transition hover:bg-blue-400 sm:inline-flex"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="pt-12 sm:pt-16">
        <Container>
          <div className="grid items-center gap-10 rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Pill>Artificial Intelligence</Pill>
                <Pill>Machine Learning</Pill>
                <Pill>Generative AI</Pill>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                Vamshi Sudula
              </h1>
              <p className="mt-3 text-lg font-medium text-zinc-700 dark:text-zinc-200">
                AI & ML Engineer
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Click on menu to know more about me.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <PrimaryButton href={socials.linkedin}>LinkedIn</PrimaryButton>
                <GhostButton href={socials.x}>X (Twitter)</GhostButton>
                <GhostButton href={socials.instagram}>Instagram</GhostButton>
                <GhostButton href={socials.github}>GitHub</GhostButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200/60 bg-white/40 p-4 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/20">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    City
                  </p>
                  <p className="mt-1 font-semibold">Hyderabad, Telangana</p>
                </div>
                <div className="rounded-2xl border border-zinc-200/60 bg-white/40 p-4 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/20">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Freelance
                  </p>
                  <p className="mt-1 font-semibold">Available</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-200/60 bg-gradient-to-b from-blue-500/10 to-violet-500/10 shadow-sm dark:border-zinc-800/60">
                <Image
                  src="https://vamshi-resume.netlify.app/assets/img/me.png"
                  alt="Vamshi Sudula"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="About"
            title="Learn more about me"
            subtitle="Artificial Intelligence and Machine Learning Graduate with a strong foundation in mathematics, statistics, and programming."
          />

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                <h3 className="text-lg font-semibold">AI & ML Engineer</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  As a Btech student, I am eager to join your team and learn from your expertise. I have strong problem-solving, communication, and teamwork skills. I am passionate about using technology for social good. I enjoy exploring new technologies. I am excited to apply my skills and enthusiasm to your innovative projects.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                <ul className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-200">
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Birthday
                    </span>
                    <span className="font-semibold">15 July 2002</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Website
                    </span>
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Click here to view
                    </a>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Phone
                    </span>
                    <a
                      href="tel:+917396149081"
                      className="font-semibold hover:text-blue-300"
                    >
                      +91 7396149081
                    </a>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      City
                    </span>
                    <span className="font-semibold">
                      Hyderabad, Telangana, India
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Age
                    </span>
                    <span className="font-semibold">22</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Degree
                    </span>
                    <span className="font-semibold">Bachelor of Technology</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Email ID
                    </span>
                    <a
                      href="mailto:vamshichintu002@gmail.com"
                      className="font-semibold hover:text-blue-300"
                    >
                      vamshichintu002@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      Freelance
                    </span>
                    <span className="font-semibold">Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="pt-12 sm:pt-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Happy Clients", value: "10+" },
              { label: "Projects", value: "12+" },
              { label: "Hours Of Support", value: "500+" },
              { label: "Awards", value: "2" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 text-center shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40"
              >
                <p className="text-3xl font-semibold tracking-tight">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="Skills"
            title="What I work with"
            subtitle="A quick snapshot of my strongest areas — always learning, always shipping."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40"
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-semibold">{skill.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {skill.level}%
                  </p>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-200/70 dark:bg-zinc-800/70">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                    style={{ width: `${skill.level}%` }}
                    aria-label={`${skill.name} proficiency`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interests */}
      <section className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="Interests"
            title="Things I enjoy"
            subtitle="A few areas I keep exploring alongside my core work."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Generative AI", "Product Building", "APIs", "Data + Finance"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40"
                >
                  <p className="font-semibold">{item}</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    Curiosity-driven learning and side experiments.
                  </p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section id="achievements" className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="Achievements"
            title="Highlights & wins"
            subtitle="A couple of moments I’m proud of — and a sign of what I can deliver under pressure."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
              <h3 className="text-xl font-semibold">Buildathon Winner</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                Secured 1st place at the 100xEngineers Buildathon.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                <li>
                  Collaborated with a highly skilled team to develop an innovative
                  full-stack application.
                </li>
                <li>
                  Received the winner&apos;s certificate from Varun Mayya.
                </li>
                <li>
                  Demonstrated exceptional teamwork, problem-solving, and technical
                  skills under time constraints.
                </li>
              </ul>
              <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60">
                <Image
                  src="https://vamshi-resume.netlify.app/assets/img/100x_certificate.jpeg"
                  alt="Buildathon Winner Certificate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
              <h3 className="text-xl font-semibold">GenAI Buildathon Finalist</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                Achieved a Top 8 position in India&apos;s first GenAI Buildathon by
                100xEngineers (1,506 participants).
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                <li>
                  Delivered a standout presentation to judges including
                  representatives from OpenAI.
                </li>
                <li>
                  Explored cutting-edge GenAI models with domain knowledge in data
                  and finance.
                </li>
                <li>
                  Collaborated with talented teammates to create an impactful
                  solution.
                </li>
              </ul>
              <div className="mt-6 rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6 dark:border-zinc-800/60">
                <p className="text-sm text-zinc-700 dark:text-zinc-200">
                  If you want, I can add links/media for this achievement (demo,
                  blog, or photos).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Resume */}
      <section id="resume" className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="Resume"
            title="A quick timeline"
            subtitle="Education, experience, and a few key projects." 
          />

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                <h3 className="text-lg font-semibold">Summary</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Vamshi Sudula
                  </span>
                  {" — "}
                  Creative and organized AI & ML Engineer with over 3 years of
                  experience in creating user-friendly digital tools. Proficient in
                  Python, HTML, CSS, and JavaScript. Skilled in machine learning,
                  AI algorithms, natural language processing, and data visualization.
                  Strong foundation in mathematics, statistics, and programming
                  concepts.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <p className="text-zinc-700 dark:text-zinc-200">
                    Hyderabad, Telangana, India
                  </p>
                  <p>
                    <a
                      href="tel:+917396149081"
                      className="font-semibold hover:text-blue-300"
                    >
                      (+91) 7396149081
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:vamshichintu002@gmail.com"
                      className="font-semibold hover:text-blue-300"
                    >
                      vamshichintu002@gmail.com
                    </a>
                  </p>
                </div>

                <div className="mt-6">
                  <GhostButton href="#">View Resume (PDF)</GhostButton>
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                    Share your PDF link and I&apos;ll wire this button to it.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-6">
                <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="font-semibold">Bachelor of Technology</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        2020 – 2024 · Siddhartha Institute of Engineering and Technology, Hyderabad
                      </p>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                        B.Tech in CSE (AI & ML), graduated July 2024.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Intermediate (Higher Secondary Certificate)
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        2018 – 2020 · Sri Gayatri Junior College, Kukatpally
                      </p>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                        State Board of Intermediate Education: 73%
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">Secondary School Certificate (SSC)</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        2018 · Ashok Memorial Chanakya High School
                      </p>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                        State Board of Secondary Education: 8.5/10 CGPA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                  <h3 className="text-lg font-semibold">Professional Experience</h3>
                  <div className="mt-5">
                    <p className="font-semibold">Machine Learning Intern</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                      3 months · Feynn Labs (Virtual Internship)
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                      <li>
                        Completed a virtual internship under the guidance of Mr.
                        Sanjay Basumatary.
                      </li>
                      <li>
                        Analyzed the Electric Vehicle (EV) Market in India as part
                        of the program.
                      </li>
                      <li>
                        Team Leader: Led a team to complete the Smart Kitchen
                        Assistant project.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
              <h3 className="text-lg font-semibold">AI Projects</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                <li>
                  <span className="font-semibold">Github README Generator</span>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    The easiest way to create a README using AI — via an editor.
                  </div>
                </li>
                <li>
                  <span className="font-semibold">How2Draw</span>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    AI-powered drawing instruction generation + real-time image
                    generation.
                  </div>
                </li>
                <li>
                  <span className="font-semibold">AI Chatbot Playground</span>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    Multi-model playground with streaming responses.
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Imagen</span>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    Text-to-image generator with auth + community gallery.
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
              <h3 className="text-lg font-semibold">Other Projects</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                <li>
                  <span className="font-semibold">
                    Razorpay Webhook → Google Spreadsheet Automation
                  </span>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    Captures payment details via webhooks, updates a Sheet, and sends
                    automated emails.
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Course Landing Page</span>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    Responsive landing page for an AI-driven curriculum.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="Projects"
            title="Explore my work"
            subtitle="A selection of projects across GenAI, product building, and web experiences." 
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/60 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/70 dark:border-zinc-800/60 dark:bg-zinc-950/40 dark:hover:bg-zinc-950/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-400/90">
                    {p.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.liveUrl ? (
                      <PrimaryButton href={p.liveUrl}>Live</PrimaryButton>
                    ) : (
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        Live link: add later
                      </span>
                    )}
                    {p.githubUrl ? (
                      <GhostButton href={p.githubUrl}>Code</GhostButton>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40">
            <p className="text-sm text-zinc-700 dark:text-zinc-200">
              Want me to attach live/demo + GitHub links for each project? Just send
              them and I&apos;ll add buttons.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="pt-16 sm:pt-20">
        <Container>
          <SectionTitle
            kicker="Contact"
            title="Let’s talk"
            subtitle="Reach out for internships, freelance work, or collaborations." 
          />

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                <h3 className="text-lg font-semibold">My Address</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  4-34-102 Venkateshwara Nagar, Jagathgirigutta, Hyderabad - 500037
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-200/60 bg-white/40 p-4 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/20">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Email Me
                    </p>
                    <a
                      href="mailto:vamshichintu002@gmail.com"
                      className="mt-1 block font-semibold hover:text-blue-300"
                    >
                      vamshichintu002@gmail.com
                    </a>
                  </div>
                  <div className="rounded-2xl border border-zinc-200/60 bg-white/40 p-4 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/20">
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Call Me
                    </p>
                    <a
                      href="tel:+917396149081"
                      className="mt-1 block font-semibold hover:text-blue-300"
                    >
                      +91 7396149081
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <PrimaryButton href={socials.linkedin}>LinkedIn</PrimaryButton>
                  <GhostButton href={socials.github}>GitHub</GhostButton>
                  <GhostButton href={socials.x}>X</GhostButton>
                  <GhostButton href={socials.instagram}>Instagram</GhostButton>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-zinc-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/40 sm:p-8">
                <h3 className="text-lg font-semibold">Quick note</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  Share your resume PDF link (Google Drive or hosted) and I’ll add a
                  clean “Download Resume” CTA in the hero and resume section.
                </p>
                <div className="mt-6 rounded-2xl border border-zinc-200/60 bg-white/40 p-4 text-sm text-zinc-700 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/20 dark:text-zinc-200">
                  <p className="font-semibold">Socials</p>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a className="hover:text-blue-300" href={socials.github}>
                        {socials.github}
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-blue-300" href={socials.linkedin}>
                        {socials.linkedin}
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-blue-300" href={socials.x}>
                        {socials.x}
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-blue-300"
                        href={socials.instagram}
                      >
                        {socials.instagram}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-10">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 border-t border-zinc-200/60 pt-8 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-300 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Vamshi Sudula. All rights reserved.</p>
            <p>
              Built with Next.js + Tailwind.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
