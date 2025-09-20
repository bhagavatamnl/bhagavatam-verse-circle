
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Book, Link as LinkIcon, Contact } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Book },
    { path: "/team", label: "Team", icon: Users },
    { path: "/books", label: "Books", icon: Book },
    { path: "/links", label: "Links", icon: LinkIcon },
    { path: "/contact", label: "Contact", icon: Contact },
    { path: "/events", label: "Event", icon: Contact }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ॐ</span>
            </div>
            <span className="text-xl font-bold text-amber-800">Bhagavatam Reading Club</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-amber-200 text-amber-800 shadow-md"
                      : "text-amber-700 hover:bg-amber-100 hover:text-amber-800"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="md:hidden relative">
            <button
              className="text-amber-700 hover:text-amber-800 focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {mobileOpen && (
              <div
                ref={mobileMenuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-amber-200 z-50 animate-fade-in"
              >
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-amber-200 text-amber-800 shadow"
                          : "text-amber-700 hover:bg-amber-100 hover:text-amber-800"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
