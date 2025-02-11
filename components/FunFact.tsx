import { aboutmeMain } from "@/constants";
import { MainAboutmeCard } from "./BetterCard";

export default function FunFact() {
  return (
    <div className="mx-[5.5rem] mb-[12rem]">
      <div className="sub-headings">Fun facts</div>
      <div className="descriptions mt-[-1.25rem]">
        Some facts, achievements and goals of mine
      </div>

      <div className="flex flex-wrap mt-[1rem] gap-x-[1.25rem] gap-y-[1.5rem] max-w-[48.4375rem]">
        {aboutmeMain.map((proper, i) => (
          <MainAboutmeCard key={i} {...proper} />
        ))}
      </div>
    </div>
  );
}
