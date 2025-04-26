"use client"

import type React from "react"

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-emerald-900"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="public/Resume.pdf" target="_blank" rel="noopener noreferrer">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-emerald-500 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link href = "/Resume.pdf" target="_blank" rel ="noopener noreferrer">
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black"
              >
                Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center ">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-emerald-500">Hello, I'm</span>
            <br />
            <span className="text-white">Dat Bui</span>
          </motion.h1>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-400 mb-8"
          >
            Compututer Scientist from Vietnam
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {/* <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">View Projects</Button>
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black"
            >
              Contact Me
            </Button> */}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            <span className="text-emerald-500">About</span> Me
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div
              className="w-full md:w-1/3 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 rounded-full bg-emerald-500/20 border-2 border-emerald-500 overflow-hidden flex items-center justify-center text-emerald-500">
                <img
                  src = "/Dat.jpeg"
                  alt= "Dat Bui"
                  className="w-full h-full object-cover"  
                />
              </div>
            </motion.div>
            <div className="w-full md:w-2/3">
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                I'm an upcoming third-year student at the University of Nebraska–Lincoln, pursuing a bachelor's degree in Computer Science with a minor in Mathematics.
                 I grew up in Bien Hoa, Vietnam, and have lived in Lincoln for 4 years. 
                I have a diverse work background, starting in food customer service, teaching assistant, and transitioning into software development.
                 Over the past 2 years, I’ve been taking computer science classes and gained IT experience through an internship. 
                 I’m passionate about software engineering and eager to continue gaining hands-on experience across different areas of computing. 
                 I also want to make a difference by supporting the world of technology. After graduation, I hope to build close connections with the businesses I work with and find a permanent career that truly fits me.
              </motion.p>
              {/* <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                My journey in web development began 5 years ago, and since then, I've worked on a variety of projects
                ranging from small business websites to complex enterprise applications. I'm constantly learning and
                adapting to new technologies to stay at the forefront of web development.
              </motion.p>
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-300"
              >
                When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or experimenting
                with new recipes in the kitchen.
              </motion.p> */}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-emerald-500">My</span> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.1)" }}
                className="bg-zinc-900 p-6 rounded-lg border border-emerald-900 hover:border-emerald-500 transition-colors text-center"
              >
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg"
                >
                  {skill}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Work Experience Section */}
      <AnimatedSection id="work-experience" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-emerald-500">My</span> Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-500 h-full"></div>

            <div className="flex flex-col space-y-20">
              {workExperience.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-emerald-500 rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2"></div>

                  {/* Work Experience Details */}
                  <div
                    className={`${
                      index % 2 === 0 ? "pl-16 pr-4" : "pr-16 pl-4"
                    } bg-zinc-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-md w-full`}
                  >
                    <h3 className="text-xl font-semibold text-emerald-400">{experience.position}</h3>
                    <p className="text-gray-300">{experience.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{experience.dates}</p>
                    <ul className="space-y-4 text-gray-300 list-none pl-6">
                      {experience.responsibilities.map((task, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-3"
                        >
                          {/* Consistent Bullet Point */}
                          <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>





      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-emerald-500">My</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 15px 30px -5px rgba(16, 185, 129, 0.2)" }}
                className="bg-black rounded-lg overflow-hidden border border-emerald-900 hover:border-emerald-500 transition-all"
              >
                <motion.div
                  className="h-48 bg-emerald-900/30 flex items-center justify-center"
                  whileHover={{
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.span
                    className="text-emerald-500 text-5xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.title.charAt(0)}
                  </motion.span>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.div whileHover={{ x: -2, y: -2 }}>
                      <Link
                        href={project.github}
                        className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ x: -2, y: -2 }}>
                      <Link
                        href={project.demo}
                        className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-emerald-500">Contact</span> Me
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-4 text-white"
              >
                Get In Touch
              </motion.h3>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-6"
              >
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to
                say hi, I'll try my best to get back to you!
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="text-emerald-500 w-5 h-5" />, text: "youremail@example.com" },
                  { icon: <Linkedin className="text-emerald-500 w-5 h-5" />, text: "linkedin.com/in/yourname" },
                  { icon: <Github className="text-emerald-500 w-5 h-5" />, text: "github.com/yourusername" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    {item.icon}
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-6 rounded-lg border border-emerald-900"
            >
              <form className="space-y-4">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                  { id: "email", label: "Email", type: "email", placeholder: "Your Email" },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor={field.id} className="block text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full bg-black border border-emerald-900 rounded p-3 text-white focus:border-emerald-500 focus:outline-none"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-black border border-emerald-900 rounded p-3 text-white focus:border-emerald-500 focus:outline-none"
                    placeholder="Your Message"
                  ></textarea>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Send Message</Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-8 bg-zinc-950 border-t border-emerald-900"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-emerald-500">
                Portfolio
              </Link>
            </div>
            <div className="flex space-x-6">
              {[
                { href: "#", icon: <Github className="w-5 h-5" /> },
                { href: "#", icon: <Linkedin className="w-5 h-5" /> },
                { href: "#", icon: <Mail className="w-5 h-5" /> },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -5, scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={item.href} className="text-gray-400 hover:text-emerald-500">
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

// Animated Section Component
function AnimatedSection({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

// Sample data
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C",
  "HTML",
  "CSS",
  "MySQL",
  "Git",
  "Docker",
  "Visual Basic",
  "Assembly",
  "Tailwind CSS",
  "MVC",
  ".NET",
  "API",
  "TypeScript"
];

const workExperience = [
  
  {
    position: "IT Support Intern",
    company: "GlobalTech",
    dates: "January 2024 - May 2024",
    responsibilities: [
      "Assisted in troubleshooting hardware and software issues",
      "Provided technical support to employees",
      "Documented and tracked user issues"
    ]
  },
  {
    position: "Learning Assistant",
    company: "University of Nebraska-Lincoln - School of Computing",
    dates: "Jan 2025 - Present",
    responsibilities: [
      "Provided individualized support to over 60 students through one-on-one sessions and online platforms (CampusWire), leveraging technical expertise and effective communication skills.",
      "Evaluated and graded student assignments on CSE servers (Handin, Web-grader).",
      "Oversaw computer lab sessions for 30+ students, offering guidance and fostering a productive learning environment"

    ]
  },

  {
    position: "Learning Consultant",
    company: "University of Nebraska-Lincoln - College of Engineering",
    dates: "Sep 2024 - Present",
    responsibilities: [
      "Assisted in • Provided effective tutoring and academic support in Calculus I, II, and III as part of the Nebraska Engineering Support and Tutoring (NEST) program",
      "Collaborated with the Engineering Student Services team to enhance student success, leveraging in-depth knowledge of engineering courses",
    ]
  },
  {
    position: "Student Worker(Dinning Service)",
    company: "University of Nebraska-Lincoln",
    dates: "Sep 2023 - Present",
    responsibilities: [
      "Managed work areas effectively by following recipes and maintaining excellent customer service standards",
      "Resolved operational challenges to ensure smooth dining hall functionality.",
      "Collaborated with supervisors and managers to uphold dining hall quality through clear communication and attention to detail"
    ]
  },
  {
    position: "Coding & Robotics Teacher Assistant",
    company: "Educational Search",
    dates: "May 2024 - June 2024",
    responsibilities: [
      "Assisted over 15 students in understanding and applying JavaScript coding and utilizing the Sphero robots app",
      "Supported integrating JavaScript and Sphero Bolt technologies into curriculum activities, promoting interactive educational sessions.",
    ]
  }
];



const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    technologies: ["React", "Weather API", "Chart.js", "Styled Components"],
    github: "#",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "A content management system for creating and managing blog posts with user authentication.",
    technologies: ["Next.js", "Markdown", "Auth.js", "Prisma"],
    github: "#",
    demo: "#",
  },
  
]
