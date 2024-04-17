// "use client";

import Image from "next/image";
import { FadeInObject } from "@/components/extra/fades";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "@/components/dropdown";

export default function OverviewStage() {
  const items = [
    {
      label: "Machine Learning",
      options: {
        target: "_blank",
        href: "cvs/Final-Teng-Thaisothyrak-CV-Machine-Learning-Engineer.pdf",
      },
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full w-full my-8">
      <h1 className="text-5xl font-bold m-2" id="overview">
        Overview
      </h1>

      <hr className="w-full keep-border border-rosewater" />

      <div className="flex space-x-6 h-full w-full border-2 border-white">
        <FadeInObject className="flex w-full h-full -translate-x-4">
          <div className="flex items-center justify-center h-full w-full my-4">
            <Image
              src="/images/portrait-no-bg.png"
              width={300}
              height={300}
              alt="portrait"
              // className="rounded-xl border-2 border-teal keep-border"
            />
          </div>
        </FadeInObject>

        <FadeInObject className="flex w-full translate-x-4 border-2 border-green">
          <div className="flex flex-col items-center justify-center h-full w-full border-2 border-blue">
            <h2 className="text-3xl my-4">
              Hi, I am <span className="font-bold">Teng Thaisothyrak</span>.
            </h2>
            <div className="flex items-center justify-center w-full h-full border-2 border-rosewater">
              <div className="flex flex-col justify-center items-start w-full h-full border-2 border-green">
                <p>
                  I am primarily a backend developer with a passion for machine
                  learning and data science, but I can also do web development
                  as well as mobile development.
                </p>
                <br />
                <p>
                  I have experience in developing web applications using Flask,
                  and aiohttp.
                </p>
                <br />
                <p>
                  I am also qualified for Cisco&apos;s CyberOperations
                  Associate.
                </p>
              </div>
            </div>

            <Dropdown items={items} mainLabel="Get my CV!" />

            {/* <a
              href="cvs/Final-Teng-Thaisothyrak-CV-Machine-Learning-Engineer.pdf"
              download
              className="m-4 px-4 py-1 rounded-xl border-2 border-sapphire keep-border bg-surface0 hover:bg-surface1">
              <div className="space-x-2">
                <span>
                  <FontAwesomeIcon icon={faFilePdf} />
                </span>
                <span>Get my CV!</span>
              </div>
            </a> */}
          </div>
        </FadeInObject>
      </div>
    </div>
  );
}
