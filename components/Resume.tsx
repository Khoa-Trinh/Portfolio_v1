import Education from "./Education";
import Experiment from "./Experiment";

export default function Resume() {
  return (
    <>
      <div className="mx-[5.5rem] mb-[0.5rem]">
        <div className="headings">Resume</div>
        <div className="descriptions mt-[-1.25rem]">
          Information about my education and experience
        </div>
      </div>

      <div className="mb-[12.125rem]">
        <Education />
        <Experiment />
      </div> 
    </>
  );
}
