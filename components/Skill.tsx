import { aboutmeSkill } from "@/constants";
import { SkillAboutmeCard } from "./BetterCard";

export default function Skill() {
  return (
    <div className="mx-[5.5rem] mb-[11rem]">
      <div className="sub-headings">Skill</div>
      <div className="descriptions mt-[-1.25rem]">Skills in each specialty</div>

      <div className="flex flex-wrap mt-[2.25rem] gap-x-[1.25rem] gap-y-[0.5rem] max-w-[54rem]">
        {aboutmeSkill.map((proper, i) => (
          <SkillAboutmeCard key={i} {...proper} />
        ))}
      </div>
    </div>
  );
}
