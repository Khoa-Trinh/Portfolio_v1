import { resumeExperiment } from "@/constants";
import TimelineBar from "./TimelineBar";
import { ExperimentResumeCard } from "./BetterCard";

export default function Experiment() {
  return (
    <>
      <div className="sub-headings-2 mx-[5.5rem]">Experiment</div>
      <TimelineBar />

      <div className="flex flex-wrap mt-[1rem] gap-x-[1.25rem] max-w-[65rem]">
        {resumeExperiment.map((proper, i) => (
          <ExperimentResumeCard key={i} {...proper} />
        ))}
      </div>
    </>
  );
}
