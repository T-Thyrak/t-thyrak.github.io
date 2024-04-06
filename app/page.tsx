import { FadeInObject } from "@/components/extra/fades";
import Navbar from "@/components/navbar";
import OverviewStage from "@/components/stages/overview";
import ExperiencesStage from "@/components/stages/experiences";
import SkillsStage from "@/components/stages/skills";
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
        <div>
            <Navbar />
            <Content />
            <StickyButton />
        </div>
    );
}

export function Content() {
    return (
        <div>
            <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
                <OverviewStage />
            </FadeInObject>
            <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
                <ExperiencesStage />
            </FadeInObject>
            <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
                <SkillsStage />
            </FadeInObject>
            <FadeInObject className="flex flex-col items-center justify-center w-full h-full translate-y-4">
                <UnderConstruction />
            </FadeInObject>
        </div>
    );
}
