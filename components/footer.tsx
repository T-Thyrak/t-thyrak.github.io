import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-full py-4 bg-crust">
      <div className="flex items-center justify-center mb-6">
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-xl font-bold">Contact Me</h3>

          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href="mailto:bus.teng.thaisothyrak+portfolio@gmail.com"
                target="_blank"
                className="ml-2 underline"
              >
                bus.teng.thaisothyrak@gmail.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faTelegram} />
              <a
                href="https://t.me/teng_thaisothyrak"
                target="_blank"
                className="ml-2 underline"
              >
                @teng_thaisothyrak
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-subtext0">
          &copy; 2025 Teng Thaisothyrak
          <br />
          Powered by Next.js, Tailwind CSS, GitHub Pages, and a moderate amount
          of sillyness.
        </p>
      </div>
    </footer>
  );
}
