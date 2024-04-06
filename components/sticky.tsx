"use client";

import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StickyButton() {
    return (
        <button
            className="fixed bottom-8 right-8 w-12 h-12 bg-crust text-text rounded-full border-2 border-mauve keep-border transition hover:scale-110 hover:text-mauve duration-300 ease-in-out"
            onClick={() => {
                // go to top
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            <FontAwesomeIcon icon={faSquareCaretUp} color={"text"} size="xl" />
        </button>
        // <button className="transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 ...">
        //     Save Changes
        // </button>
    );
}
