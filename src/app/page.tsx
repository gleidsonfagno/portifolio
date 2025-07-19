"use client";

import Image from "next/image";
import { SkillItem } from "./components/SkillItem";
import { skills } from "./data/skills";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Gleidson Fagno
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Casa
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Habilidades
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Projetos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </button>
              {/* <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </button> */}
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </button>
              <button className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-20"
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-4">
                    👋 Olá, eu sou Gleidson Fagno
                  </span>
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Desenvolvedor Front-End
                  </h1>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
                  Construindo experiências digitais com código e criatividade.
                  Apaixonado por transformar ideias em soluções tecnológicas
                  inovadoras que fazem a diferença.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    Ver Projetos
                  </button>
                  <button className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Baixar Currículo
                  </button>
                </div>

                <div className="flex gap-6 justify-center lg:justify-start">
                  <a
                    href="https://github.com/gleidsonfagno"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gleidson-fagno-1510a91ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div>
                  <Image
                    src="/variant=5.png"
                    alt="image"
                    width={1080}
                    height={1080}
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-8 border-white dark:border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Sobre Mim
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Minha jornada profissional e denvolvimento com tecnologia
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    alt="Gleidson Fagno - About"
                    className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                    src="https://avatars.githubusercontent.com/u/98245928?v=4"
                    width={1080}
                    height={1080}
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 dark:bg-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code-xml text-white"
                    >
                      <path d="M18 16l4-4-4-4"></path>
                      <path d="M6 8l-4 4 4 4"></path>
                      <path d="M14.5 4l-5 16"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Desenvolvedor Front-End — em busca de crescimento,
                    aprendizado e experiência real
                  </h3>

                  <div className="space-y-4 font-sans">
                    <div className="flex items-start gap-3">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        <strong>
                          Tecnologo em Análise e Desenvolvimento de Sistemas
                        </strong>{" "}
                        – UNIFATECIE (previsão 2025)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        <strong>Curso Fullstack Python</strong> – EBAC (2024)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        <strong>Objetivo profissional:</strong> Desenvolvedor
                        Front-End, em busca de oportunidades e
                        crescimento
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Desenvolvedor focado em tecnologia, boas práticas e evolução constante no desenvolvimento de software.
                      </p>
                    </div>

                    {/* <div className="flex items-start gap-3">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        <strong>Localização:</strong> Altamira, PA – Brasil
                      </p>
                    </div> */}

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Informações de Contato
                      </h3>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="M22 7 13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>

                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Email
                          </div>
                          <a
                            href="mailto:gleidson@email.com"
                            className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            gleidson@email.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>

                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Telefone
                          </div>
                          <a
                            href="mailto:gleidson@email.com"
                            className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            +55 (93) 98436-3405
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>

                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Localização
                          </div>
                          <a
                            href="mailto:gleidson@email.com"
                            className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            Altamira, PA
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="/curriculo.pdf"
                    download
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                      data-magicpath-id="125"
                      data-magicpath-path="PortfolioPage.tsx"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Baixar Currículo
                  </a>

                  <div className="flex gap-3">
                    <a
                      href="https://github.com/gleidsonfagno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                        data-magicpath-id="127"
                        data-magicpath-path="PortfolioPage.tsx"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/gleidson-fagno-1510a91ab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                        data-magicpath-id="128"
                        data-magicpath-path="PortfolioPage.tsx"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Habilidades Técnicas
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tecnologias e ferramentas que domino para criar soluções
                completas
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                Front-End
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                Back-End
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200">
                Ferramentas
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                Design
              </div>
            </div>

            <div className="mb-20 overflow-hidden">
              <div className="flex gap-8 animate-scroll-horizontal whitespace-nowrap">
                {skills.map((skill, index) => (
                  <SkillItem key={index} {...skill} />
                ))}

                {skills.map((skill, index) => (
                  <SkillItem key={index} {...skill} />
                ))}
                
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Frontend
                </h3>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=17.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    React
                  </span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=19.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    TypeScript
                  </span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=18.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Next.js
                  </span>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 pt-2">
                  +2 mais
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Backend
                </h3>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=16.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Node.js
                  </span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=23.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    PostgreSQL
                  </span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=21.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Djagno
                  </span>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 pt-2">
                  +1 mais
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Ferramentas
                </h3>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=26.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Git
                  </span>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="/logos/variant=24.png"
                      alt="image"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Docker
                  </span>
                </div>

                <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="https://tse3.mm.bing.net/th/id/OIP.LA0nCGiwTKIk0llD3P6O6wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="Vercel logo"
                      width={1080}
                      height={1080}
                      className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform "
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Vercel
                  </span>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Design
                </h3>

                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-lg">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                      alt="Figma logo"
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform"
                    />
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sempre aprendendo e me atualizando com as últimas tecnologias
            </p>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Projetos</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Alguns dos projetos que desenvolvi recentemente
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600">
                  Todos
                </button>
                <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600">
                  Front-End
                </button>
                <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600">
                  Back-End
                </button>
                <button className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600">
                  Fullstack
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/Bilizzard.png"
                  alt="image"
                  width={1080}
                  height={1080}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Blizzard Landing Page
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Landing page responsiva e moderna inspirada no design da
                    Blizzard Entertainment, com animações suaves e interface
                    intuitiva.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      JavaScript
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/gleidsonfagno/Bilizzard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                        role="img"
                        aria-label="GitHub logo"
                      >
                        <title>GitHub</title>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </a>

                    <a
                      href="https://gleidsonfagno.github.io/Bilizzard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/bg-hackaton.png"
                  alt="image"
                  width={1080}
                  height={1080}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Hackathon do Carnaval de 2025 da Codante
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Esse projeto foi um desafio que disponibiliza uma API para
                    utilizarmos e sugere alguns desafios: filtrar por bairro,
                    filtrar por horário, buscar por nome e exibir os bloquinhos
                    pré, durante e pós-carnaval.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      API
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/gleidsonfagno/mp-hackaton-do-carnaval-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                        role="img"
                        aria-label="GitHub logo"
                      >
                        <title>GitHub</title>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </a>

                    <a
                      href="https://mp-hackaton-do-carnaval-2025.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src="/bg-prjeto-produtos de tecnologias.png"
                  alt="image"
                  width={1080}
                  height={1080}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Mini projeto - Landing page de produtos de tecnologia
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Landing page responsiva que apresenta smartphones e
                    smartwatches, simulando uma página inicial de um e-commerce.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      HTML
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      CSS
                    </span>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                      JavaScript
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/gleidsonfagno/mp-landing-page-de-produtos-de-tecnologia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                        role="img"
                        aria-label="GitHub logo"
                      >
                        <title>GitHub</title>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </a>

                    <a
                      href="https://mp-landing-page-de-produtos-de-tecnologia.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>blog</section> */}

        {/* <section className="py-20 bg-white dark:bg-gray-800">

        </section> */}

        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Gleidson fagno</h3>
                <p className="text-gray-400 mb-4">
                  Desenvolvedor Front-End apaixonado por criar experiências
                  digitais incríveis.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/gleidsonfagno"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gleidson-fagno-1510a91ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                    onClick={() => scrollToSection("home")}
                     className="text-gray-400 hover:text-white transition-colors">
                      Início
                    </button>
                  </li>

                  <li>
                    <button 
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors">
                      Sobre
                    </button>
                  </li>

                  <li>
                    <button 
                    onClick={() => scrollToSection("skills")}
                    className="text-gray-400 hover:text-white transition-colors">
                      Projetos
                    </button>
                  </li>

                </ul>
              </div>

              <div className="space-y-2 text-gray-400">
                <h4 className="text-lg font-semibold mb-4">Contato</h4>

                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="M22 7 13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  gleidsonfagner838@gmail.com
                </p>

                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +55 (93) 98436-3405
                </p>

                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Altamira, PA
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
