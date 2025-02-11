import { resumeEducation } from "@/constants";
import TimelineBar from "./TimelineBar";

export default function Education() {
  return (
    <>
      <div className="sub-headings-2 mx-[5.5rem]">Education</div>
      <TimelineBar />

      {resumeEducation.map(({ title, description, time, icons }) => {})}
    </>
  );
}
