import { FadeInObject } from "@/components/ui/fades";
import OverviewStage from "@/components/stages/overview";
import ExperiencesStage from "@/components/stages/experiences";
import SkillsStage from "@/components/stages/skills";
import ProjectsStage from "@/components/stages/projects";
import { StickyButton } from "@/components/sticky";
import UnderConstruction from "@/components/under_construction";

export default function Home() {
  const underConstruction = false;
  return (
    <main className="flex min-h-screen justify-start flex-col px-16 py-8 text-lg">
      {underConstruction ? <UnderConstruction /> : <Page />}
    </main>
  );
}

function Page() {
  return (
    <>
      <Content />
      <StickyButton />
    </>
  );
}

function Content() {
  return (
    <>
      <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4 z-20">
        <OverviewStage />
      </FadeInObject>
      <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4 z-10">
        <ExperiencesStage />
      </FadeInObject>
      <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
        <SkillsStage />
      </FadeInObject>
      <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
        <ProjectsStage />
      </FadeInObject>
      <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
        <UnderConstruction />
      </FadeInObject>
    </>
  );
}
