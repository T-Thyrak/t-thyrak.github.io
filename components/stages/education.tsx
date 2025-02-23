import NTLink from "../ntlink";

export default function EducationStage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-8">
      <h1 className="text-5xl font-bold m-2" id="education">
        Education
      </h1>
      <hr className="w-full keep-border border-rosewater" />
      <div className="my-8">
        {/* from https://flowbite.com/docs/components/timeline/ */}
        <ol className="relative border-s border-teal keep-border">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2020">2020</time> to{" "}
              <time dateTime="2024">2024</time>
            </p>
            <h3 className="text-lg font-semibold">
              Bachelor of Computer Science
            </h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology | Institute of Digital
              Technology
            </h4>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-teal rounded-full -start-1.5 border border-teal keep-border"></div>
            <p className="mb-1 text-sm text-teal font-normal leading-none">
              <time dateTime="2023-08">Aug, 2023</time> to{" "}
              <time dateTime="2024-01">Jan 2024</time>
            </p>
            <h3 className="text-lg font-semibold">CyberOps Associate</h3>
            <h4 className="text-lg text-sky">
              Cambodia Academy of Digital Technology | Institute of Digital
              Governance
            </h4>
          </li>
        </ol>
      </div>
    </div>
  );
}
