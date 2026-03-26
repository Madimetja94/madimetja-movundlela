import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-6">
      <h1 className="font-bold text-xl">Madimetja Movundlela</h1>
      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
