import { Send, Mail, Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">

        {/* Копирайт */}
        <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest order-2 sm:order-1 text-center sm:text-left">
          © 2026 Solart. All systems operational.
        </div>

        {/* Соцсети */}
        <div className="flex items-center gap-6 sm:gap-8 order-1 sm:order-2">
          <a href="#" className="text-gray-500 hover:text-accent transition-colors p-1"><Send className="w-4 h-4" /></a>
          <a href="#" className="text-gray-500 hover:text-accent transition-colors p-1"><Mail className="w-4 h-4" /></a>
          <a href="#" className="text-gray-500 hover:text-accent transition-colors p-1"><Code2 className="w-4 h-4" /></a>
        </div>

        {/* Возврат наверх */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest hover:text-white transition-colors order-3"
        >
          SYSTEM_REBOOT [UP] <ArrowUp className="w-3 h-3 text-accent" />
        </button>
      </div>
    </footer>
  );
}
