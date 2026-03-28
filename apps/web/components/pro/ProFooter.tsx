export function ProFooter() {
  return (
    <footer className="border-t border-terminal-border py-8 px-6 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-sans text-sm text-terminal-muted">
          ♊ © {new Date().getFullYear()} Ash Clements · Phoenix, AZ
        </div>
        <div className="flex items-center gap-6 font-sans text-sm text-terminal-muted">
          <a href="https://www.linkedin.com/in/ash-clements" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/BadAsh99" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://badash99.dev" className="hover:text-white transition-colors">
            badash99.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
