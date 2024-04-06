export default function Navbar() {
    return (
        <nav className="flex items-center justify-center w-full bg-base">
            <div className="flex items-center justify-center max-w-xl w-full p-4 rounded-xl border-2 border-green keep-border">
                <ul className="flex space-x-8">
                    <li>
                        <a
                            href="#overview"
                            className="hover:underline hover:font-bold">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experiences"
                            className="hover:underline hover:font-bold">
                            Experiences
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}