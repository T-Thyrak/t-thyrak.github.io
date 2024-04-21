import { FadeInObject } from "@/components/ui/fades";

function ProgressBar({
  value,
  max,
}: Readonly<{
  value: number;
  max: number;
}>) {
  return (
    <div className="relative">
      <div className="absolute w-full bg-flamingo rounded-full h-2.5 border-2 border-rosewater -translate-y-[0.375rem]"></div>
      <div
        className="absolute h-2.5 bg-lavender rounded-full z-10 border-2 border-green -translate-y-[0.375rem]"
        style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
  );
}

function ProgressItem({
  label,
  value,
  max = 100,
}: Readonly<{
  label: string;
  value: number;
  max?: number;
}>) {
  return (
    // <div className="flex items-center justify-center space-x-8 w-full h-full border-2 border-mauve">
    //   <div className="flex flex-col items-center justify-center">
    //     <p className="text-left border-2 border-red">{label}</p>
    //   </div>
    //   <div className="flex flex-col items-center justify-center w-[50%]">
    //     <div className="w-full border-2 border-green">
    //       <ProgressBar value={value} max={max} />
    //     </div>
    //   </div>
    // </div>
    <div className="w-[75%] mb-2">
      <div className="flex justify-between mb-1">
        <span className="font-bold">{label}</span>
        <span className="font-bold">{`${(value / max) * 100}`}%</span>
      </div>
      <div className="w-full bg-rosewater rounded-full h-2.5">
        <div
          className="bg-lavender h-2.5 rounded-full"
          style={{ width: `${(value / max) * 100}%` }}></div>
      </div>
    </div>
  );
}

export default function SkillsStage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full my-8">
      <h1 className="text-5xl font-bold m-2" id="skills">
        Skills
      </h1>

      <hr className="w-full keep-border border-rosewater" />

      <div className="flex space-x-2 h-full w-full border-2 border-green my-4">
        <div className="flex flex-col items-center justify-center h-full w-full border-2 border-blue">
          <ProgressItem label="Python" value={95} />
          <ProgressItem label="Rust" value={85} />
          <ProgressItem label="SQL" value={80} />
          <ProgressItem label="C/C++" value={80} />
          <ProgressItem label="Java" value={69} />
          <ProgressItem label="JavaScript" value={60} />
          <ProgressItem label="PHP" value={60} />
          <ProgressItem label="Dart" value={50} />
          <ProgressItem label="Ruby" value={40} />
        </div>

        <div className="flex flex-col items-center justify-center h-full w-full border-2 border-blue">
          <ul className="list-disc text-left">
            <li>
              <p>General Software Development</p>
            </li>
            <li>
              <p>Database Management</p>
              <p>SQL variants:</p>
              <ul className="list-disc ml-4">
                <li>MySQL</li>
                <li>MariaDB</li>
                <li>T-SQL</li>
              </ul>
            </li>
            <li>
              <p>Version Control (Git)</p>
            </li>
            <li>
              <p>API Design</p>
            </li>
            <li>
              <p>Communication and Teamwork</p>
            </li>
            <li>
              <p>Problem-Solving</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
