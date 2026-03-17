import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { n: '01.', name: 'О нас', href: '#about' },
    { n: '02.', name: 'Услуги', href: '#services' },
    { n: '03.', name: 'Кейсы', href: '#cases' },
    { n: '04.', name: 'Стек', href: '#stack' },
    { n: '05.', name: 'Процесс', href: '#process' },
    { n: '06.', name: 'FAQ', href: '#faq' },
    { n: '07.', name: 'Контакты', href: '#contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-5 sm:px-6 md:px-10 py-4 sm:py-5 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled ? 'border-white/10 bg-[#050505]/90' : 'border-white/5 bg-[#050505]/80'
      }`}>
        {/* Логотип */}
        <div className="flex items-center gap-2.5 font-black tracking-tighter text-xl cursor-pointer">
          <div className="relative flex items-center justify-center w-7 h-7">
            <div className="absolute w-full h-full border-2 border-accent rounded-sm rotate-45"></div>
            <span className="relative text-accent text-[10px] font-bold">{`{ }`}</span>
          </div>
          <span className="hidden sm:inline">SOLART</span>
        </div>

        {/* Десктоп-навигация */}
        <div className="hidden lg:flex gap-6 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.n}
              href={link.href}
              className="flex gap-1.5 items-baseline group"
            >
              <span className="text-[10px] text-accent/60 font-mono font-medium">{link.n}</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-bold group-hover:text-white transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <a
            href="#contacts"
            className="hidden sm:inline-flex border-2 border-white/10 px-5 sm:px-6 py-2 rounded-sm text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-accent hover:border-accent hover:text-dark transition-all duration-300"
          >
            Написать
          </a>

          {/* Бургер-кнопка */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-accent/50 transition-colors"
            aria-label="Меню"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full px-8">
              <nav className="flex flex-col items-center gap-2 w-full max-w-sm">
                {links.map((link, index) => (
                  <motion.a
                    key={link.n}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex items-center gap-4 w-full py-4 px-4 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-xs text-accent/50 font-mono font-medium w-8">{link.n}</span>
                    <span className="text-xl font-bold uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#contacts"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 bg-accent text-dark font-black px-10 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-white transition-colors"
              >
                Написать нам
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
