import { resumeEducation } from "@/constants";
import TimelineBar from "./TimelineBar";
import { EducationResumeCard } from "./BetterCard";

export default function Education() {
  return (
    <>
      <div className="sub-headings-2 mx-[5.5rem]">Education</div>
      <TimelineBar />

      <div className="flex flex-wrap mt-[1rem] mb-[1.625rem] gap-x-[1.25rem] max-w-[65rem]">
        {resumeEducation.map((proper, i) => (
          <EducationResumeCard key={i} {...proper} />
        ))}
      </div>
    </>
  );
}
