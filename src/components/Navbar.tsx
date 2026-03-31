export default function Navbar() {
  return (
    <header className="w-full border-b border-stone-200 bg-[#f8f7f2]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-medium tracking-wide text-stone-900">
          GreenHive
        </a>
        <nav className="hidden gap-6 text-sm text-stone-700 md:flex">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/quote">Quote</a>
        </nav>
      </div>
    </header>
  );
}
