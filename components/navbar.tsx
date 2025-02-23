import ModeToggle from "@/components/ui/mode_toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full bg-base">
      <div className="flex items-center justify-between max-w-xl w-full p-4 rounded-xl border-2 border-green keep-border">
        <ul className="flex space-x-8">
          <li>
            <a href="#overview" className="hover:underline hover:font-bold">
              Overview
            </a>
          </li>
          <li>
            <a href="#experiences" className="hover:underline hover:font-bold">
              Experiences
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline hover:font-bold">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:underline hover:font-bold">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline hover:font-bold">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex w-full h-full items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
