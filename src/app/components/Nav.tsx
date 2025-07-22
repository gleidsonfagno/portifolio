import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // alternar tema adicionando/removendo classe 'dark' no <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // fecha menu ao clicar
  };

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          Gleidson Fagno
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "skills", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors relative group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Ações à direita */}
        <div className="flex items-center space-x-4">
          {/* Botão dark mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          {/* Menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          {["home", "about", "skills", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-left text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
