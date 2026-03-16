import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="relative z-50">
      <header className="w-full h-[80px] flex items-center justify-center">
        <div className="w-full h-full max-w-[1440px] px-6 md:px-20 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-full">
            <a href="#home" className="text-xl font-medium tracking-tight text-white">
              Daniyal Ahmed
            </a>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center space-x-8 h-full">
            {[
              { label: "Work", href: "#work" },
              { label: "Capabilities", href: "#capabilities" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200 flex items-center h-full pt-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center h-full">
            <a
              href="#contact"
              className="bg-white text-black text-xs font-semibold px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>
        </div>
      </header>
      <div className="w-full max-w-[1440px] mx-auto border-dashed-custom-h opacity-100"></div>
    </div>
  );
};

export default Navbar;
