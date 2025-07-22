import { useState } from "react";
import Image from "next/image";

const projetos = [
  {
    id: 1,
    nome: "Blizzard Landing Page",
    categoria: "Front-End",
    descricao:
      "Landing page responsiva e moderna inspirada no design da Blizzard Entertainment.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "/Bilizzard.png",
    github: "https://github.com/gleidsonfagno/Bilizzard",
    demo: "https://gleidsonfagno.github.io/Bilizzard/",
  },
  {
    id: 2,
    nome: "Hackathon do Carnaval 2025",
    categoria: "Front-End",
    descricao:
      "Desafio com API: filtrar por bairro, horário, nome e exibir bloquinhos de carnaval.",
    tecnologias: ["Next.js", "API"],
    imagem: "/bg-hackaton.png",
    github: "https://github.com/gleidsonfagno/mp-hackaton-do-carnaval-2025",
    demo: "https://mp-hackaton-do-carnaval-2025.vercel.app/",
  },
  {
    id: 3,
    nome: "Landing de Produtos de Tecnologia",
    categoria: "Front-End",
    descricao:
      "Landing page que apresenta produtos como smartphones e smartwatches.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagem: "/bg-prjeto-produtos de tecnologias.png",
    github:
      "https://github.com/gleidsonfagno/mp-landing-page-de-produtos-de-tecnologia",
    demo: "https://mp-landing-page-de-produtos-de-tecnologia.vercel.app/",
  },
];

export default function Projects() {
  const [filtro, setFiltro] = useState("Todos");

  const categorias = ["Todos", "Front-End", "Back-End", "Fullstack"];

  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro);

  return (
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
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filtro === cat
                    ? "bg-indigo-600 text-white dark:bg-indigo-500"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                width={1080}
                height={1080}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {projeto.nome}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {projeto.descricao}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tec) => (
                    <span
                      key={tec}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                    >
                      {tec}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
